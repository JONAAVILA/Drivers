const { Router } = require("express");
const getAllDrivers = require('./../controllers/get/getAllDrivers');

const router = Router();

router.get('/drivers', getAllDrivers)

module.exports = router;
