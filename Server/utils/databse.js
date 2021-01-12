var mysql = require("mysql2");
const Sequelize = require('sequelize');

const sequelize = new Sequelize('jdevelopments', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// const sequelize = new Sequelize('jdevelop_jdevelopments', 'jdevelop_Admin', 'jo2y1ro7n5', {
//     host: 'www.jdevelopments.co.il',
//     dialect: 'mysql'
// })

module.exports = sequelize;




