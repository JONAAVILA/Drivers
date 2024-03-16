import { ALL_DRIVERS, ALL_TEAMS, ORDER, SEARCH } from './ActionsTypes';

const initialState = {
    drivers: [],
    driversFiltered: [],
    teams: []
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ALL_DRIVERS:
            return{
                ...state,
                drivers: action.payload
            }
        case ALL_TEAMS:
            return{
                ...state,
                teams: action.payload
            }
        case SEARCH:
            return{
                ...state,
                driversFiltered: action.payload
            }
        case ORDER:
            return{
                ...state,
                driversFiltered: action.payload
            }
    
        default:
            return state
    }
}

export default rootReducer;