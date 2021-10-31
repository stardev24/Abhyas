const initialState = {
    error:null,
    isLoading:false,
    libraryPosts:[],
    hasError:false   
}


export function libraryLoading(state=initialState,action){
    switch(action.type){
        case 'LIBRARY_POSTS_LOADING':
            return {...state,isLoading:action.isLoading,error:action.hasError}
        default:
            return state
    }
}

export function librarySuccess(state=initialState,action){
    switch(action.type){
        case 'LIBRARY_POSTS_SUCCESS':
            return {...state,libraryPosts:action.libraryPosts,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function libraryFailure(state=initialState,action){
    switch(action.type){

        case 'LIBRARY_POSTS_ERROR':
            return {...state,error:action.error,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}