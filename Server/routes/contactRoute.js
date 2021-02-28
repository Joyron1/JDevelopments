const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController')
const checkAuth = require('../middleware/check-auth');

router.get('/getAllContact', contactController.getAllContact);
router.post('/insertContact', contactController.insertContact);
router.post('/deleteContact', checkAuth, contactController.deleteContact);
router.post('/updateRead', checkAuth, contactController.updateRead);


module.exports = router;

// http://localhost:5000/portfolio/getAllProjects