const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/getAdmin', adminController.getAdmin);
// router.post('/insertAdmin', adminController.insertAdmin);

module.exports = router;

// http://localhost:5000/portfolio/getAllProjects