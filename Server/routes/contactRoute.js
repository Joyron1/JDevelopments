const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController')

router.get('/getAllContact', contactController.getAllContact);
router.post('/insertContact', contactController.insertContact);

module.exports = router;

// http://localhost:5000/portfolio/getAllProjects