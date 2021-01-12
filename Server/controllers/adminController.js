const con = require('../utils/databse')
const Admin = require('../models/adminModel')
const sendToClient = require('../utils/returnObToClient')

const fs = require('fs');

exports.getAdmin = async (req, res, next) => {
    await Admin.findAll().then(result => {
        res.send(sendToClient(result, null, 1));
        console.log("result:", result)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

// exports.insertAdmin = async (req, res, next) => {
//     console.log("InsertAdmin: ", req.body);
//     let admin = req.body;
//     await Admin.create(admin).then(result => {
//         res.send(sendToClient(result, null, 1));
//         console.log("new admin:", result)
//     }).catch(err => {
//         res.send(sendToClient(null, err, 0))
//     })
// }

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




// exports.deleteAlbum = async (req, res, next) => {
//     let id = req.query.id;

//     await Albums.destroy({
//         where: {
//             id: id
//         }
//     }).then(albums => {
//         res.send(sendToClient(albums, null, 1));
//         console.log("albums:", albums)
//     }).catch(err => {
//         res.send(sendToClient(null, err, 0));
//     })
// }

// exports.updateAlbum = async (req, res, next) => {

//     await Albums.update(req.body, {
//         where: {
//             id: req.body.id
//         }
//     }).then(albums => {
//         res.send(sendToClient(albums, null, 1));
//         console.log("albums:", albums)
//     }).catch(err => {
//         res.send(sendToClient(null, err, 0));
//     })
// }

