const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const checkAuth = require('../middleware/check-auth');

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

router.get('/getAllProjects', portfolioController.getAllProjects);
router.get('/getProjectById', portfolioController.getProjectById);
router.post('/insertProject', upload.array('uploads[]', 12), checkAuth, portfolioController.insertProject);
router.post('/updateProject', upload.array('uploads[]', 12), checkAuth, portfolioController.updateProject);
router.post('/deleteProject', checkAuth, portfolioController.deleteProject);

module.exports = router;

// http://localhost:5000/portfolio/getAllProjects