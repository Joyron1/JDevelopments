const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Info = sequelize.define('opt_customers', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
module.exports = Info;