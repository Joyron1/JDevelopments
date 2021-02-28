const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController')
const checkAuth = require('../middleware/check-auth');

router.get('/getAllNewsletter', newsletterController.getAllNewsletter);
router.post('/insertNewsletter', newsletterController.insertNewsletter);
router.post('/deleteNewsletter', checkAuth, newsletterController.deleteNewsletter);
router.post('/editNewsletter', checkAuth, newsletterController.editNewsletter);

module.exports = router;

// http://localhost:5000/portfolio/getAllProjects