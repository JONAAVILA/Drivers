import axios from 'axios';
import { ALL_DRIVERS, ALL_TEAMS, ORDER, SEARCH } from './ActionsTypes';

export const allDrivers = ()=>{
    const URL = 'http://localhost:3001/drivers'

    return async (dispatch)=>{
        const response = await axios(URL)
        return dispatch({
            type: ALL_DRIVERS,
            payload: response.data
        })
    }
}

export const allTeams = ()=>{
    const URL = 'http://localhost:3001/teams'

    return async (dispatch)=>{
        const response = await axios(URL)
        return dispatch({
            type: ALL_TEAMS,
            payload: response.data
        })
    }
}

export const searchDrivers = (driver)=>{
    return async (dispatch)=>{
        return dispatch({
            type: SEARCH,
            payload: driver
        })
    }
}

export const orderDrivers = (order)=>{
    return async (dispatch)=>{
        return dispatch({
            type: ORDER,
            payload: order
        })
    }
}