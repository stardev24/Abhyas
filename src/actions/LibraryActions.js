import axios from 'axios';
import {ENV_CONFIG as ENV } from '../core/config'

//Post loading action
export function libraryPostsLoading(bool){
    return {
        type:'LIBRARY_POSTS_LOADING',
        isLoading:bool,
        hasError:false,


    }
}

//Post success action
export function libraryPostsDataSuccess(bool,libraryPosts){
    return {
        type:'LIBRARY_POSTS_SUCCESS',
        libraryPosts,
        hasError:bool,
        isLoading:false
    }
}


export function libraryPostDataError(bool,error){
    return {
        type:'LIBRARY_POSTS_ERROR',
        hasError:bool,
        error:error,
        isLoading:false
    }
}

export function fetchLibraryPosts(){
    return (dispatch) => {
        dispatch(libraryPostsLoading(true));
       return axios.get(`${ENV.BASE}/spaces/${ENV.SPACE}/environments/${ENV.EID}/entries?access_token=${ENV.AT}&content_type=library&include=2`)
        .then((response) =>{
            if(response.status != 200){
                throw Error(response.statusText);
            }
            dispatch(libraryPostsLoading(false));
            console.log("----response-----",response)
            return response
        })
        .then((response) => dispatch(libraryPostsDataSuccess(false,response.data.items.length > 0?response.data:[])))
        .catch((err) => dispatch(libraryPostDataError(true,err)))

    } 

}