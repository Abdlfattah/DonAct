export default function(state={},action){
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                register:action.payload
            }
        case 'CLEAR_REGISTER_USER':
            return{
                ...state,
                register:action.payload
            }
        case 'CONFIRMATION_USER':
            return{
                ...state,
                confirmation:action.payload
            }
        case 'CLEAR_CONFIRMATION_USER':
            return {
                ...state,
                confirmation:action.payload
            }
        case 'LOGIN_USER':
            return{
                ...state,
                login:action.payload
            }
        case 'CLEAR_LOGIN_USER':
            return{
                ...state,
                login:action.payload
            }
        case 'AUTH_USER':
            return {
                ...state,
                auth:action.payload
            }
        case 'RESEND_CONFIRMATION':
            return {
                ...state,
                resend_confirmation:action.payload
            }
        case 'CLEAR_RESEND_CONFIRMATION':
            return{
                ...state,
                resend_confirmation:action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                logout:action.payload
            }
        case 'DONATE':
            return{
                ...state,
                donate:action.payload
            }
        case 'UPDATE':
            return{
                ...state,
                user:action.payload
            }
        default:
            return {...state}
    }
}