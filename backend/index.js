// Ticket #10 - Setting up backend
// Ticket #15 - User Table Data
// Kaitlyn Peters

//node js and express js to connect to mySQL database
// import express from "express";
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

const app = express();
//get environment variables from .env file
require('dotenv').config();

// MYSQL routes!! hook up the route for tables here
app.use('/users', require('./routes/userRoutes')); //user route

app.listen(3000, ()=>{
    console.log("Server starting");
});