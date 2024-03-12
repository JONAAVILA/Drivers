const axios = require("axios");
const URL = 'http://localhost:5000/drivers?name.forename_like=';

const driverByName = async (name) => {
    try {
        const response = await axios.get(`${URL}${name}&_limit=15`);
        if (response.data.length === 0) {
            throw new Error('Driver by name not found');
        }
        return response.data;
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = driverByName;