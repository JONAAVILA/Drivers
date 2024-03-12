const { Router } = require("express");
const getAllDrivers = require('./../controllers/get/getAllDrivers');
const getDriverById = require('./../controllers/get/getDriverById');
const getDriverByName = require('./../controllers/get/getDriverByName');

const router = Router();

router.get('/drivers/name', getDriverByName)
router.get('/drivers', getAllDrivers)
router.get('/drivers/:idDriver', getDriverById)

module.exports = router;
