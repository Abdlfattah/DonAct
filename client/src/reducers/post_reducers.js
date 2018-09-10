export default function(state={},action){
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return {
                ...state,
                post:action.payload
            }
        case 'CLAER_ALL_POSTS':
            return {
                ...state,
                post:action.payload
            }
        case 'POST':
            return {
                ...state,
                newPost:action.payload
            }
        case 'GET_POST':
            return {
                ...state,
                post:action.payload
            }
        case 'CLEAR_GET_POST':
            return {
                ...state,
                post:action.payload
            }
        case 'GET_MY_POST':
            return{
                ...state,
                post:action.payload
            }
        default:
            return {...state}
    }
}