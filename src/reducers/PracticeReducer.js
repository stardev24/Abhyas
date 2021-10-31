const initialState = {
    error:null,
    isLoading:false,
    practicePosts:[],
    hasError:false   
}


export function practiceLoading(state=initialState,action){
    switch(action.type){
        case 'PRACTICE_POSTS_LOADING':
            return {...state,isLoading:action.isLoading,error:action.hasError}
        default:
            return state
    }
}

export function practiceSuccess(state=initialState,action){
    switch(action.type){
        case 'PRACTICE_POSTS_SUCCESS':
            return {...state,practicePosts:action.practicePosts,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function practiceFailure(state=initialState,action){
    switch(action.type){

        case 'PRACTICE_POSTS_ERROR':
            return {...state,error:action.error,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}