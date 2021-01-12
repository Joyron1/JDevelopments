const con = require('../utils/databse')
const Portfolio = require('../models/portfolioModel')
const sendToClient = require('../utils/returnObToClient')

const fs = require('fs');

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
        console.log("selected project:", project)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.insertProject = async (req, res, next) => {
    console.log("insert project: ", req.body);
    let project = req.body;
    if (req.files[0])
        project.pc_img = req.files[0].filename;

    await Portfolio.create(project).then(result => {
        res.send(sendToClient(result, null, 1));
        console.log("new project:", result)
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
        console.log("projects:", projects)
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}

exports.updateProject = async (req, res, next) => {
    console.log("1")
    let project = req.body;
    console.log("project:", project)
    if (req.files[0]) {
        project.pc_img = req.files[0].filename;
    }
    await Portfolio.update(project, {
        where: { id: project.id }
    }).then(result => {
        console.log("2");
        res.send(sendToClient(result, null, 1));
        // console.log("projects:", result)
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}


