// Ticket #15 - User Data Table
// Kaitlyn Peters

//get the user model and connect to routes to interact
//with the `users` table
const express = require('express');
//router allows us to use modular route handlers
const router = express.Router() 
const User = require('../models/user'); 

//todo: Need a way to check if users are logged in

//todo: login router
//POST  (create)
router.get('/login', User.login);

//todo: check if user is already logged in
//GET (read)
router.get("/", User.getLoggedInUser);

//todo: register router
//POST (create)
router.get('/register', User.register)

//no delete or put yet (not neccessary for now?)

module.exports = router;
