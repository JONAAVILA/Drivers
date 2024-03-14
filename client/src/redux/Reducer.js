import { ALL_DRIVERS, SEARCH } from './ActionsTypes';

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
        case SEARCH:
            return{
                ...state,
                driversFiltered: action.payload
            }
    
        default:
            return state
    }
}

export default rootReducer;