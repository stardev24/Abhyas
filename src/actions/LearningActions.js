import axios from 'axios';
import {ENV_CONFIG as ENV } from '../core/config'



//Post loading action
export function businessPostsLoading(bool){
    return {
        type:'BUSINESS_POSTS_LOADING',
        isLoading:bool,
        hasError:false,


    }
}

//Post success action
export function businessPostsDataSuccess(bool,businessPosts){
    return {
        type:'BUSINESS_POSTS_SUCCESS',
        businessPosts,
        hasError:bool,
        isLoading:false
    }
}


export function businessPostDataError(bool,error){
    return {
        type:'BUSINESS_POSTS_ERROR',
        hasError:bool,
        error:error,
        isLoading:false
    }
}


export function fetchBusinessPosts(level){
    return (dispatch) => {
        dispatch(businessPostsLoading(true));
        let learningUrl = level ?`${ENV.BASE}/spaces/${ENV.SPACE}/environments/${ENV.EID}/entries?access_token=${ENV.AT}&content_type=cards&fields.level.sys.contentType.sys.id=levels&fields.level.fields.levelid=${level}` 
        :
        `${ENV.BASE}/spaces/${ENV.SPACE}/environments/${ENV.EID}/entries?access_token=${ENV.AT}&content_type=cards` 
        console.log("LEARNING URL is -->",learningUrl)
       return axios.get(learningUrl)
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
