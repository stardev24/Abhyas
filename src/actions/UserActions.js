import axios from 'axios';


//Store User action
export function setUser(user){
    return {
        type:'STORE_USER_DETAILS',
        user:user,
        hasError:false,
        isLoading:false
    }
}


