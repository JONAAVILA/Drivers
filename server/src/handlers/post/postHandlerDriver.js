const { Driver, Team } = require('./../../db');

const postHandlerDriver = async (name,
                                 lastname,
                                 description,
                                 image,
                                 nationality,
                                 release,
                                 team)=>{
       
    if(!name || !lastname || !nationality || !release || !description || !team){
        throw new Error('Parameters are missing')
    }

    try {
        const driverPost = await Driver.create({
            name,
            lastname,
            description,
            image,
            nationality,
            release,
        })
        if(!driverPost) throw new Error('Error to create driver')

        const teamFound = []

        for(teamName of team){
            teamMatch = await Team.findOne({
                where:{
                    name: teamName
                }
            })
            if(teamMatch) teamFound.push(teamMatch)
        }

        await driverPost.addTeam(teamFound)
        return { message: 'Driver created successfully' }
         
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = postHandlerDriver;