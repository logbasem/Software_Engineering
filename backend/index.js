// Ticket #10 - Setting up backend
// Ticket #15 - User Table Data
// Kaitlyn Peters

//node js and express js to connect to mySQL database
//libraries
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = 3001;

//get environment variables from .env file
require('dotenv').config();

app.use(bodyParser.json()); //so that app can parse json requests

//set up sessions
app.use(session({
    secret: 'secretstringforsomething',
    resave: false,
    saveUninitialized: false,
    cookies: {
        maxAge: 12 * 60 * 60 * 1000, //12 hours
    }
}))

//set up cors
app.use(cors({
    origin: 'http://localhost:3000'
}));

//configure Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

//passport configuration
const User = require('./models/userModel.js');
require('./config/passportConfig')(passport, User);

// MYSQL routes!! hook up the route for tables here
app.use('/users', require('./routes/userRoutes')); //user route
app.use('/products', require('./routes/productRoutes')); //product routes

app.listen(PORT, ()=>{
    console.log(`Server starting on http://localhost:${PORT}`);
});