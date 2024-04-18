//main file for instantiating sequelize object
const dbConfig = require('../config/dbConfig.js');
const Sequelize = require('sequelize');

//passing parameters of db config
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    //db options
    {
        host: dbConfig.host,
        dialect: "mysql",
        logging: console.log
    },
    
);

module.exports = sequelize;