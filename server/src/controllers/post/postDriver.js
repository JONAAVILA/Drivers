const postHandlerDriver = require('./../../handlers/post/postHandlerDriver');

const postDriver = async (req,res)=>{
    try {
        const {
            name,
            lastname,
            description,
            image,
            nationality,
            release,
            teams
        } = req.body

        const driverPost = await postHandlerDriver(name,
                                                   lastname,
                                                   description,
                                                   image,
                                                   nationality,
                                                   release,
                                                   teams)
        res.status(200).json(driverPost)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = postDriver;