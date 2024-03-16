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
            if(!state.drivers.db){
                   const filterOrder = [...state.drivers.api]
                if (action.payload === "A") {
                    filterOrder.sort((a, b) => a.name.forename.localeCompare(b.name.forename))
                }else if(action.payload === "Random"){
                    filterOrder.sort(() => Math.random() - 0.5)
                }else{
                    filterOrder.sort((a, b) => b.name.forename.localeCompare(a.name.forename))
                }
                return {
                    ...state,
                    driversFiltered: filterOrder
                }; 
            }else{
                const filterOrder = [...state.drivers.api,...state.drivers.db]
                if (action.payload === "A") {
                    filterOrder.sort((a, b) => a.name.forename.localeCompare(b.name.forename))
                }else if(action.payload === "Random"){
                    filterOrder.sort(() => Math.random() - 0.5)
                }else{
                    filterOrder.sort((a, b) => b.name.forename.localeCompare(a.name.forename))
                }
                return {
                    ...state,
                    driversFiltered: filterOrder
                }; 
            }
            
    
        default:
            return state
    }
}

export default rootReducer;