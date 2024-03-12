const { Router } = require("express");
const getAllDrivers = require('./../controllers/get/getAllDrivers');
const getDriverById = require('./../controllers/get/getDriverById');

const router = Router();

router.get('/drivers', getAllDrivers)
router.get('/drivers/:idDriver', getDriverById)

module.exports = router;
