import axios from 'axios';
import {ENV_CONFIG as ENV } from '../core/config'

//Post loading action
export function practicePostsLoading(bool){
    return {
        type:'PRACTICE_POSTS_LOADING',
        isLoading:bool,
        hasError:false,


    }
}

//Post success action
export function practicePostsDataSuccess(bool,practicePosts){
    return {
        type:'PRACTICE_POSTS_SUCCESS',
        practicePosts,
        hasError:bool,
        isLoading:false
    }
}


export function practicePostDataError(bool,error){
    return {
        type:'PRACTICE_POSTS_ERROR',
        hasError:bool,
        error:error,
        isLoading:false
    }
}

export function fetchPracticePosts(url){
    return (dispatch) => {
        dispatch(practicePostsLoading(true));
       return axios.get(`${ENV.BASE}/spaces/${ENV.SPACE}/environments/${ENV.EID}/entries?access_token=${ENV.AT}&content_type=flashcards`)
        .then((response) =>{
            if(response.status != 200){
                throw Error(response.statusText);
            }
            dispatch(practicePostsLoading(false));

            return response
        })
        .then((response) => dispatch(practicePostsDataSuccess(false,response.data.items.length > 0?response.data.items:[])))
        .catch((err) => dispatch(practicePostDataError(true,err)))

    } 

}