const { Team } = require('./../db');
const axios = require('axios');
const URL = 'http://localhost:5000/drivers';

const teamsToDb = async ()=>{
    try {
        const drivers = await axios(URL)
        if(!drivers) throw new Error('Drivers not found')

        await drivers.data.map(d => {

            Team.findOrCreate({
                where:{
                    name: d.teams[0]
                }
            })
            
        })
        return {message:'Populated database'}
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = teamsToDb;