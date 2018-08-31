export default function(state={},action){
    switch (action.type) {
        case 'GET_DONATIONS':
            return {
                ...state,
                donations:action.payload
            }
        case 'CLAER_GET_DONATIONS':
            return {
                ...state,
                donations:action.payload
            }
        case 'POST_DONATION':
            return {
                ...state,
                donation:action.payload
            }
        case 'GET_DONATION':
            return {
                ...state,
                donation:action.payload
            }
            case 'CLEAR_GET_DONATION':
            return {
                ...state,
                donation:action.payload
            }
        default:
            return {...state}
    }
}