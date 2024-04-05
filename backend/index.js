// Ticket #10 - Setting up backend
// Ticket #15 - User Table Data
// Kaitlyn Peters

//node js and express js to connect to mySQL database
// import express from "express";
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

//get environment variables from .env file
require('dotenv').config();

//configure Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/userModel.js'); //get user model

passport.use(new LocalStrategy(
    {
        usernameField: "username",
        passwordField: "userpassword",
        passReqToCallback: true,
    },
    function(req, username, password, done) {
        //todo: check for valid passwords, might need to
        //figure out the hashing/salting situation

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
            //to do: User is valid but password is not
            return done(null, user);
        //error message :(
        }).catch(function (err) {
            console.log("Error:", err);
            return done(null, false {
                message: "login failed",
            });
        });
    }
));

// MYSQL routes!! hook up the route for tables here
app.use('/users', require('./routes/userRoutes')); //user route

app.listen(3000, ()=>{
    console.log("Server starting");
});