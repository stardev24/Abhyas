const initialState = {
    error:null,
    isLoading:false,
    businessPosts:[],
    levels:[],
    hasError:false   
}


export function businessNewsLoading(state=initialState,action){
    switch(action.type){
        case 'BUSINESS_POSTS_LOADING':
            return {...state,isLoading:action.isLoading,error:action.hasError}
        default:
            return state
    }
}

export function businessNewsSuccess(state=initialState,action){
    switch(action.type){
        case 'BUSINESS_POSTS_SUCCESS':
            return {...state,businessPosts:action.businessPosts,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function businessNewsFailure(state=initialState,action){
    switch(action.type){

        case 'BUSINESS_POSTS_ERROR':
            return {...state,error:action.error,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function levelsLoading(state=initialState,action){
    switch(action.type){
        case 'LEVELS_LOADING':
            return {...state,isLoading:action.isLoading,error:action.hasError}
        default:
            return state
    }
}

export function levelsSuccess(state=initialState,action){
    switch(action.type){
        case 'LEVELS_SUCCESS':
            return {...state,levels:action.levels,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}

export function levelsFailure(state=initialState,action){
    switch(action.type){

        case 'LEVELS_ERROR':
            return {...state,error:action.error,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}