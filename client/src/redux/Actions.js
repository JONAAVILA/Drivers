import axios from 'axios';
import { ALL_DRIVERS } from './ActionsTypes';

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