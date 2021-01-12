const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController')

var multer = require('multer');

var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        let dt = new Date().getTime();
        //  console.log("DTT : ", dt, file)
        cb(null, String(dt) + file.originalname);
    }
});

var upload = multer({ storage: storage });

router.get('/getAllProjects', portfolioController.getAllProjects);
router.get('/getProjectById', portfolioController.getProjectById);
router.post('/insertProject', upload.array('uploads[]', 12), portfolioController.insertProject);
router.post('/updateProject', upload.array('uploads[]', 12), portfolioController.updateProject);
router.get('/deleteProject', portfolioController.deleteProject);

module.exports = router;

// http://localhost:5000/portfolio/getAllProjects