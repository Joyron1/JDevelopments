const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Newsletter = sequelize.define('newsletter_Info', {
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
module.exports = Newsletter;