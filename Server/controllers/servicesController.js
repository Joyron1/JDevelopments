const con = require('../utils/databse')
const Services = require('../models/servicesModel')
const sendToClient = require('../utils/returnObToClient')

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

let compress = 0;

exports.getAllServices = async (req, res, next) => {
    await Services.findAll().then(services => {
        res.send(sendToClient(services, null, 1));
        // console.log("services:", services)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.getServiceById = async (req, res, next) => {
    let id = req.query.id;
    await Services.findAll({
        where: {
            id: id
        }
    }).then(service => {
        res.send(sendToClient(service, null, 1));
        // console.log("selected service:", service)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}


exports.insertService = async (req, res, next) => {
    console.log("insertService: ", req.body);
    let service = req.body;
    if (req.files[0]) {
        calculateSize(req.files[0].size);
        compressImage("uploads/" + req.files[0].filename);
        service.img = req.files[0].filename;
    }
    await Services.create(service).then(result => {
        res.send(sendToClient(result, null, 1));
        console.log("new service:", result)
    }).catch(err => {
        res.send(sendToClient(null, err, 0))
    })
}

exports.deleteService = async (req, res, next) => {
    let id = req.query.id;
    console.log("deleted service id:", id)
    await Services.destroy({
        where: { id: id }
    }).then(services => {
        res.send(sendToClient(services, null, 1));
        console.log("services:", services)
    }).catch(err => {
        res.send(sendToClient(null, err, 0));
    })
}

exports.updateService = async (req, res, next) => {
    let service = req.body;
    if (req.files[0]) {
        calculateSize(req.files[0].size);
        compressImage("uploads/" + req.files[0].filename);
        service.img = req.files[0].filename;
    }
    await Services.update(req.body, {
        where: { id: req.body.id }
    }).then(result => {
        res.send(sendToClient(result, null, 1));
        console.log("services:", result);
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








