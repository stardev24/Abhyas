import axios from 'axios';
import {ENV_CONFIG as ENV } from '../core/config'




//Levels loading action
export function levelsLoading(bool){
    return {
        type:'LEVELS_LOADING',
        isLoading:bool,
        hasError:false,


    }
}

//Post success action
export function levelsDataSuccess(bool,levels){
    return {
        type:'LEVELS_SUCCESS',
        levels,
        hasError:bool,
        isLoading:false
    }
}


export function levelsDataError(bool,error){
    return {
        type:'LEVELS_ERROR',
        hasError:bool,
        error:error,
        isLoading:false
    }
}


export function fetchLevels(){
    return (dispatch) => {
        dispatch(levelsLoading(true));
       return axios.get(`${ENV.BASE}/spaces/${ENV.SPACE}/environments/${ENV.EID}/entries?access_token=${ENV.AT}&content_type=levels&order=fields.order`)
        .then((response) =>{
            if(response.status != 200){
                throw Error(response.statusText);
            }
            dispatch(levelsLoading(false));
            console.log("----response-----",response)
            return response
        })
        .then((response) => dispatch(levelsDataSuccess(false,response.data.items.length > 0?response.data.items:[])))
        .catch((err) => dispatch(levelsDataError(true,err)))

    } 

}