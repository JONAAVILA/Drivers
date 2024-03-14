import axios from 'axios';
import { ALL_DRIVERS,SEARCH } from './ActionsTypes';

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

export const searchDrivers = (driver)=>{
    return async (dispatch)=>{
        return dispatch({
            type: FILSEARCHTER,
            payload: driver
        })
    }
}