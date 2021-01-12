const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Admin = sequelize.define('admins', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
module.exports = Admin;