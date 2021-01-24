const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController')
var multer = require('multer');

var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let dt = new Date().getTime();
        //  console.log("DTT : ", dt, file)
        cb(null, file.originalname);
    }

});

var upload = multer({ storage: storage });

router.get('/getAllServices', servicesController.getAllServices);
router.get('/getServiceById', servicesController.getServiceById);
router.post('/insertService', upload.array('uploads[]', 12), servicesController.insertService);
router.post('/updateService', upload.array('uploads[]', 12), servicesController.updateService);
router.get('/deleteService', servicesController.deleteService);

module.exports = router;
