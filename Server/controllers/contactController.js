const con = require('../utils/databse')
const Contact = require('../models/contactModel')
const sendToClient = require('../utils/returnObToClient')

const fs = require('fs');

exports.getAllContact = async (req, res, next) => {
    await Contact.findAll().then(contacts => {
        for (let i = 0; i < contacts.length; i++) {
            contacts[i].phone.charAt(0) == '0' ? contacts[i].phone = '972' + contacts[i].phone.slice(1) : contacts[i].phone;
            contacts[i].phone.charAt(0) == '+' ? contacts[i].phone = contacts[i].phone.slice(1) : contacts[i].phone;
            console.log(contacts[i].phone);
        }
        res.send(sendToClient(contacts, null, 1));
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.insertContact = async (req, res, next) => {
    // console.log("InsertContact: ", req.body);
    let contact = req.body;
    contact.read = 0;
    await Contact.create(contact).then(result => {
        res.send(sendToClient(result, null, 1));
        // console.log("new contact:", result);
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.deleteContact = async (req, res, next) => {
    let obj = req.body;
    console.log("obj to delete:", obj)
    await Contact.destroy({
        where: { id: obj.id }
    }).then(msg => {
        res.send(sendToClient(msg, null, 1));
        // console.log("msg:", msg);
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}

exports.updateRead = async (req, res, next) => {
    let obj = req.body;
    console.log("obj to update:", obj)
    await Contact.update(obj, {
        where: {
            id: obj.id
        }
    }).then(message => {
        res.send(sendToClient(message, null, 1));
        console.log("message:", message);
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








