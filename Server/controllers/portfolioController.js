const con = require('../utils/databse')
const Portfolio = require('../models/portfolioModel')
const sendToClient = require('../utils/returnObToClient')

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

let compress = 0;

exports.getAllProjects = async (req, res, next) => {
    await Portfolio.findAll().then(portfolio => {
        res.send(sendToClient(portfolio, null, 1));
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.getProjectById = async (req, res, next) => {
    let id = req.query.id;
    await Portfolio.findAll({
        where: {
            id: id
        }
    }).then(project => {
        res.send(sendToClient(project, null, 1));
        // console.log("selected project:", project)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.insertProject = async (req, res, next) => {
    // console.log("insert project: ", req.body);
    let project = req.body;
    if (req.files[0]) {
        calculateSize(req.files[0].size);
        compressImage("uploads/" + req.files[0].filename);
        project.pc_img = req.files[0].filename;
    }

    await Portfolio.create(project).then(result => {
        res.send(sendToClient(result, null, 1));
        // console.log("new project:", result)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.deleteProject = async (req, res, next) => {
    let id = req.query.id;
    await Portfolio.destroy({
        where: {
            id: id
        }
    }).then(projects => {
        res.send(sendToClient(projects, null, 1));
        // console.log("projects:", projects)
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}

exports.updateProject = async (req, res, next) => {
    let project = req.body;
    if (req.files[0]) {
        calculateSize(req.files[0].size);
        compressImage("uploads/" + req.files[0].filename);
        project.pc_img = req.files[0].filename;
    }
    await Portfolio.update(project, {
        where: { id: project.id }
    }).then(result => {
        res.send(sendToClient(result, null, 1));
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}


calculateSize = (size) => {
    console.log("size is:", size)
    let comp = 1;
    while (size * comp > 100000) {
        comp -= 0.01
    }
    compress = comp;
}

compressImage = (image) => {
    //await imagemin(['uploads/*.{jpg,png}'],
    (async () => {
        const files = await imagemin([image], {
            destination: 'uploads/',
            plugins: [
                imageminJpegtran(),
                imageminPngquant({
                    quality: [0.5, 0.5]
                })
            ]
        });

        console.log(files);
        //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
    })();
}