const { Router } = require("express");
const getAllDrivers = require('./../controllers/get/getAllDrivers');
const getDriverById = require('./../controllers/get/getDriverById');
const getDriverByName = require('./../controllers/get/getDriverByName');
const postDriver = require('./../controllers/post/postDriver');

const router = Router();

router.get('/drivers/create', postDriver)
router.get('/drivers/name', getDriverByName)
router.get('/drivers', getAllDrivers)

router.post('/drivers/:idDriver', getDriverById)

module.exports = router;
