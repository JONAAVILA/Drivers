import { ALL_DRIVERS, FILTER } from './ActionsTypes';

const initialState = {
    drivers: [],
    driversFiltered: []
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
                driversFiltered: action.payload
            }
    
        default:
            return state
    }
}

export default rootReducer;