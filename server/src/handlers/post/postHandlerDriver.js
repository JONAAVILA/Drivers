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
            nationality,
            release,
        })
        if(!driverPost && !team){
            throw new Error('Error to create driver')
        }else{
            
        }
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = postHandlerDriver;