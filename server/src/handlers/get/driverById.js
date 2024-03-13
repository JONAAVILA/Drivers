const axios = require('axios');
const { Driver } = require('./../../db');
const URL = 'http://localhost:5000/drivers/';

const driverById = async (idDriver)=>{
    try {
        const driverToDb = await Driver.findByPk(idDriver)
        const driver = await axios(`${URL}${idDriver}`)
        if(!driver) throw new Error('Driver not found')
        return {
            ...driver.data,
            driverToDb
        }
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = driverById;