//Ticket #5 - User Data Table
// Kaitlyn Peters

//get users local db configuration
const dbConfig = require('../config/dbConfig.js');
//create a model for the table `user` using Sequelize
const Sequelize = require('sequelize');

//passing parameters
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    //db options
    {
        host: dbConfig.host,
        dialect: "mysql",
    }
);

//Create user model
const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userpassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
});
