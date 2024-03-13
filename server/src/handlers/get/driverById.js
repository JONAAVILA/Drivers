const axios = require('axios');
const { Driver } = require('./../../db');
const URL = 'http://localhost:5000/drivers/';

const driverById = async (idDriver)=>{
    try {
        const driverToBb = await Driver.findByPk(idDriver)
        const driver = await axios(`${URL}${idDriver}`)
        if(!driver) throw new Error('Driver not found')
        return {
            ...driver.data,
            driverToBb
        }
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = driverById;