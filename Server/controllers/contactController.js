const con = require('../utils/databse')
const Contact = require('../models/contactModel')
const sendToClient = require('../utils/returnObToClient')

const fs = require('fs');

exports.getAllContact = async (req, res, next) => {
    await Contact.findAll().then(Contacts => {
        res.send(sendToClient(Contacts, null, 1));
        console.log("Contacts:", Contacts)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.insertContact = async (req, res, next) => {
    console.log("InsertContact: ", req.body);
    let contact = req.body;
    await Contact.create(contact).then(result => {
        res.send(sendToClient(result, null, 1));
        console.log("new contact:", result)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
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

