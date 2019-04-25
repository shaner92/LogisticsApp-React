const initialState = {
    selected_bol: []
}

function rootReducer (state = initialState, { type, payload })  {
    switch (type) {

        case 'ADD_BOL':
        return { 
            ...state,
            selected_bol: [...state.selected_bol, payload.value]
        }

        case 'REMOVE_BOL':
            const index = state.selected_bol.indexOf(payload.value);
            return{
                ...state,
                selected_bol: [...state.selected_bol.slice(0,index), ...state.selected_bol.slice(index+1)]
            } 

        case 'CLEAR_BOL':
        return{
            ...state,
            selected_bol: []
        } 


        default:
            return state
    }
}

export default rootReducer;