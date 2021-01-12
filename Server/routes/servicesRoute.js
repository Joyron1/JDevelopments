const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController')

router.get('/getAllServices', servicesController.getAllServices);
router.post('/insertService', servicesController.insertService);
router.post('/deleteService', servicesController.deleteService);
router.post('/updateService', servicesController.updateService);

module.exports = router;
