export default function(state=[],action){
    switch (action.type) {
        case 'GET_MY_DONATIONS':
            return {
                ...state,
                donation:action.payload
            }
        case 'GET_DONATION':
            return {
                ...state,
                donation:action.payload
            }
        case 'DONATE':
            return {
                ...state,
                donate:action.payload
            }
        case 'UPDATE':
            return {
                ...state,
                update:action.payload
            }
        default:
            return{...state}
            break;
    }

}