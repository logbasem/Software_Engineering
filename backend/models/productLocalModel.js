//Ticket #14 - Product Routes

// model for `productlocal` table

//get users local db config
const dbConfig = require('../config/dbConfig.js');
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');

//get parameters of db
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: "mysql",
        logging: console.log
    },
);

//create user model
const ProductLocal = sequelize.define('productlocal', {
    productID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    barcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    megaCorp: {
        type: DataTypes.TINYINT,
    },
    vegan: {
        type: DataTypes.TINYINT,
    },
    ethicalSourced: {
        type: DataTypes.TINYINT,
    },
    localSourced: {
        type: DataTypes.TINYINT,
    }
}, {
        timestamps: false,
        freezeTableName: true, 
        //freeTableName so that sequelize does not pluralize the table name
    }
);

module.exports = ProductLocal;