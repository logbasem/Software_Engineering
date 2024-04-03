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

//home page route connected to the backend
app.get("/", (req, res) => {
    res.json("this is the backend")
});

app.listen(3000, ()=>{
    console.log("Connected to backend!")
});