const { Drivers } = require('./../db');
const axios = require('axios');

const allDrivers = async ()=>{
    try {
        const drivers = await axios('http://localhost:5000/drivers')
        if(!drivers) throw new Error("Drivers not found")
        return drivers.data;
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = allDrivers;