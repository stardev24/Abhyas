const initialState = {
    error:null,
    isLoading:false,
    userDetails:[],
    hasError:false   
}

export function userStore(state=initialState,action){
    switch(action.type){
        case 'STORE_USER_DETAILS':
            return {...state,userDetails:action.user,hasError:action.hasError,isLoading:action.isLoading}
        default:
            return state
    }
}