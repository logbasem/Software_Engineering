// Ticket #10 - Setting up backend
// Kaitlyn Peters

//node js and express js to connect to mySQL database
import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";

const app = express();
//get environment variables from .env file
dotenv.config();

//open db connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// MYSQL routes!! hook up the route for tables here
app.use('/user', require('./routes/userRoutes')); //user route


app.listen(3000, ()=>{
    console.log("Connected to backend!")
});