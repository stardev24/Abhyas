import axios from 'axios';
import {ENV_CONFIG as ENV } from '../core/config'

//Post loading action
export function businessPostsLoading(bool){
    return {
        type:'REFRESHER_POSTS_LOADING',
        isLoading:bool,
        hasError:false,


    }
}

//Post success action
export function businessPostsDataSuccess(bool,refresherPosts){
    return {
        type:'REFRESHER_POSTS_SUCCESS',
        refresherPosts,
        hasError:bool,
        isLoading:false
    }
}


export function businessPostDataError(bool,error){
    return {
        type:'REFRESHER_POSTS_ERROR',
        hasError:bool,
        error:error,
        isLoading:false
    }
}

export function fetchRefresherPosts(url){
    return (dispatch) => {
        dispatch(businessPostsLoading(true));
       return axios.get(`${ENV.BASE}/spaces/${ENV.SPACE}/environments/${ENV.EID}/entries?access_token=${ENV.AT}&content_type=refresher`)
        .then((response) =>{
            if(response.status != 200){
                throw Error(response.statusText);
            }
            dispatch(businessPostsLoading(false));
            console.log("----response-----",response)
            return response
        })
        .then((response) => dispatch(businessPostsDataSuccess(false,response.data.items.length > 0?response.data.items:[])))
        .catch((err) => dispatch(businessPostDataError(true,err)))

    } 

}