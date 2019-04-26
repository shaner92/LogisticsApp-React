const initialState = {
    selected_bol: {}
}

function rootReducer (state = initialState, { type, payload })  {
    switch (type) {

        case 'SELECT_BOL':
        return { 
            ...state,
            selected_bol: payload.value
        }

        case 'CLEAR_BOL':
        return{
            ...state,
            selected_bol: ''
        } 


        default:
            return state
    }
}

export default rootReducer;