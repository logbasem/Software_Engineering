// Ticket #10 - Setting up backend
// Ticket #15 - User Table Data
// Kaitlyn Peters

//node js and express js to connect to mySQL database
// import express from "express";
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const app = express();

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
//configure Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/userModel.js'); //get user model

//serialize and deserialize
//for maintaining login session
passport.serializeUser((user, done) => {
    console.log(user.id);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    //retrieve user form the data base using id
    User.findAll({
        where: {
            id: id,
        },
    }).then((user) => {
        done(null, user);
     });
});

async function isValidPassword(enteredPass, hashPass) {
    const result = await bcrypt.compare(enteredPass, hashPass);
};

//passport configuration
passport.use(new LocalStrategy(
    {
        usernameField: "username",
        passwordField: "userpassword",
        passReqToCallback: true,
    },
    async function(req, username, password, done) {
        //query the entered username
        User.findOne({
            where:
               { 
                username: username,
            },
        }).then(function (user) {
            //check if user exists
            if(!user) {
                return done(null, false, {
                    message: "Username does not exist",
                });
            }
            //compare against the entered password + users hashed password
            if(!(isValidPassword(password, user.userpassword))) {
                return done(null, false, {
                    message: "Incorrect password.",
                });
            }
            //to do: User is valid but password is not
            return done(null, user);
        //error message :(
        }).catch(function (err) {
            console.log("Error:", err);
            return done(null, false, {
                message: "login failed",
            });
        });
    }
));

// MYSQL routes!! hook up the route for tables here
app.use('/users', require('./routes/userRoutes')); //user route
app.use('/products', require('./routes/productRoutes')); //product routes

app.listen(3000, ()=>{
    console.log("Server starting");
});