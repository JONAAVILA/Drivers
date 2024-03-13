import { ALL_DRIVERS } from './ActionsTypes';

const initialState = {
    drivers: [],
    driversFilteres: []
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ALL_DRIVERS:
            return{
                ...state,
                drivers: action.payload
            }
        case FILTER:
            return{
                ...state,
                driversFilteres: action.payload
            }
    
        default:
            return state
    }
}

export default rootReducer;