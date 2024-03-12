const axios = require('axios');
const URL = 'http://localhost:5000/drivers/';

const driverById = async (idDriver)=>{
    try {
        const driver = await axios(`${URL}${idDriver}`)
        if(!driver) throw new Error('Driver not found')
        return driver.data
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = driverById;