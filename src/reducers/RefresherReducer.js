const initialState = {
    error:null,
    isLoading:false,
    refresherPosts:[],
    hasError:false   
}


export function refresherLoading(state=initialState,action){
    switch(action.type){
        case 'REFRESHER_POSTS_LOADING':
            return {...state,isLoading:action.isLoading,error:action.hasError}
        default:
            return state
    }
}

export function refresherSuccess(state=initialState,action){
    switch(action.type){
        case 'REFRESHER_POSTS_SUCCESS':
            return {...state,refresherPosts:action.refresherPosts,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function refresherFailure(state=initialState,action){
    switch(action.type){

        case 'REFRESHER_POSTS_ERROR':
            return {...state,error:action.error,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}