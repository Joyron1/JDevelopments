const con = require('../utils/databse')
const Info = require('../models/infoModel')
const sendToClient = require('../utils/returnObToClient')

const fs = require('fs');

exports.getAllOptCustomers = async (req, res, next) => {
    await Info.findAll().then(optCustomers => {
        res.send(sendToClient(optCustomers, null, 1));
        console.log("optCustomers:", optCustomers)

        let str = "";
        for (let customer of optCustomers) {
            str += "name:" + customer.fullName + " / " + "phone:" + customer.phone + " / " + "email:" + customer.email;
            fs.appendFileSync('contactInfo.pdf', `${str}\r\n`);
        }

    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.insertInfo = async (req, res, next) => {
    console.log("InsertInfo: ", req.body);
    let info = req.body;
    await Info.create(info).then(result => {
        res.send(sendToClient(result, null, 1));
        console.log("new info:", result)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

// exports.download = async (req, res, next) => {
//     console.log("file:", req.body);
//     let file = req.files;
//     console.log()
//     // for (let i = 0; i < file.length; i++) {
//     //     fs.appendFileSync('contactInfo.txt', `${file[i]}\r\n`);
//     // }
//     filepath = __dirname + '/contactInfo.txt';
//     res.sendFile(filepath);
// }

// app.post('/download', (req, res, next) => {
//     myCeck.push(myCeck.shift());
//     console.log("print", myCeck)
//     for (let i = 0; i < myCeck.length; i++) {
//         fs.appendFileSync('log.txt', `${myCeck[i]}\r\n`);
//     }


//     filepath = __dirname + '/log.txt';
//     res.sendFile(filepath);
//     myCeck.length = 0;
// });



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

