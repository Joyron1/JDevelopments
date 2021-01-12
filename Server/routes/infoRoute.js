const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController')

router.get('/getAllOptCustomers', infoController.getAllOptCustomers);
router.post('/insertInfo', infoController.insertInfo);
// router.post('/download', infoController.download);

module.exports = router;

// http://localhost:5000/portfolio/getAllProjects