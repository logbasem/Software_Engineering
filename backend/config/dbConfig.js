//a file for configuring the db options
const dotenv = require("dotenv");
const mysql = require("mysql2");

var databaseOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};

console.log("dotenv" + databaseOptions.user);
module.exports = databaseOptions;