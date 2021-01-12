const Sequelize = require('sequelize');
const sequelize = require('../utils/databse')

const Portfolio = sequelize.define('portfolios', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pc_img: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mobile_img: {
        type: Sequelize.STRING,
        allowNull: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
module.exports = Portfolio;