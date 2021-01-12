const con = require('../utils/databse')
const Services = require('../models/servicesModel')
const sendToClient = require('../utils/returnObToClient')

// const fs = require('fs');

exports.getAllServices = async (req, res, next) => {
    await Services.findAll().then(services => {
        res.send(sendToClient(services, null, 1));
        console.log("services:", services)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.insertService = async (req, res, next) => {
    console.log("insertService: ", req.body);
    let service = req.body;
    await Services.create(service).then(result => {
        res.send(result);
        console.log("new service:", result)
    }).catch(err => {
        res.send("error load services" + err)
    })
}

exports.deleteService = async (req, res, next) => {
    let id = req.query.id;
    await Services.destroy({
        where: {
            id: id
        }
    }).then(services => {
        res.send(sendToClient(services, null, 1));
        console.log("services:", services)
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}

exports.updateService = async (req, res, next) => {
    await Services.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(services => {
        res.send(sendToClient(services, null, 1));
        console.log("services:", services)
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}

// exports.getAlbumById = async (req, res, next) => {
//     await Albums.findAll({
//         where: {
//             id: id
//         }
//     }).then(albums => {
//         res.send(albums);
//         console.log("albums:", albums)
//     }).catch(err => {
//         res.send("error load albums" + err)
//     })
// }








