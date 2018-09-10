import axios from 'axios'


//-------------------------- Register--------------------------------------
export function register(data){
    const request = axios.post('/api/user/register',data)
                    .then( response => response.data )

    return {
        type:'REGISTER_USER',
        payload:request
    }
}


export function clearRegister(){
    return{
        type:'CLEAR_REGISTER_USER',
        payload:null
    }
}

//----------------------------send confirmation email--------------------------
export function confirmation(token){
    const request = axios.get(`/api/user/confirmation?token=${token}`)
                    .then( response => response.data )
    
    return {
        type:'CONFIRMATION_USER',
        payload:request
    }
}

export function clearConformation(){
    return {
        type:'CLEAR_CONFIRMATION_USER',
        payload:null
    }
}


//------------------------- Login ---------------------------------------
export function login(user){
    const request = axios.post('/api/user/login',user)
                    .then( response => response.data)
    
    return{
        type:'LOGIN_USER',
        payload:request
    }
}

export function clearLogin(){
    return {
        type:'CLEAR_LOGIN_USER',
        payload:null
    }
}
//---------------------------- user auth ----------------------------------

export function authUser(){
    const request = axios.get('/api/user/auth')
                    .then( response => response.data)
        

    return{
        type:'AUTH_USER',
        payload:request
    }
}


export function clearAuthUser(){
    return{
        type:'CLEAR_AUTH_USER',
        payload:null
    }
}

//----------------------- Resend confirmation email------------------------------
export function resendConfirmation(email){
    const request = axios.post('/api/user/resend_confirmation', email)
                    .then( response => response.data )
    return {
        type:'RESEND_CONFIRMATION',
        payload:request
    }
}

export function clearResendConfirmation(){
    return {
        type: 'CLEAR_RESEND_CONFIRMATION',
        payload:null
    }
}

//--------------------------- Logout --------------------------------------------

export function logout(){
    const request = axios.get('/api/user/logout')
                    .then( response => response.data)
    return{
        type:'LOGOUT',
        payload:request
    }
}



export function updateUser(id,user){
    const request = axios.post(`/api/user/update?id=${id}`,user)
                    .then( response => response.data )

            
    return{
        type:'UPDATE',
        payload:request
    }
}


export function getUser(id){
    const request = axios.get(`/api/user/get_user?id=${id}`)
                    .then( response => response.data)
            
    return{
        type:'GET_USER',
        payload:request
    }
}