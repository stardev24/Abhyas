const initialState = {
    error:null,
    isLoading:false,
    technologyPosts:[],
    hasError:false   
}


export function technologyNewsLoading(state=initialState,action){
    switch(action.type){
        case 'TECHNOLOGY_POSTS_LOADING':
            return {...state,isLoading:action.isLoading,error:action.hasError}
        default:
            return state
    }
}

export function technologyNewsSuccess(state=initialState,action){
    switch(action.type){
        case 'TECHNOLOGY_POSTS_SUCCESS':
            return {...state,technologyPosts:action.technologyPosts,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function technologyNewsFailure(state=initialState,action){
    switch(action.type){

        case 'TECHNOLOGY_POSTS_ERROR':
            return {...state,error:action.error,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}