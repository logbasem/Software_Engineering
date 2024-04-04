// Ticket #15 - User Data Table
// Kaitlyn Peters

//get the user model and connect to routes to interact
//with the `users` table
const express = require('express');
//router allows us to use modular route handlers
const router = express.Router() 
const userController = require('../controllers/userController.js'); 

//todo: Need a way to check if users are logged in

//todo: login router
//POST  (create)
router.get('/login', userController.login);

//todo: check if user is already logged in
//GET (read)
router.get("/", userController.getLoggedInUser);

//todo: register router
//POST (create)
router.get('/register', userController.register)

//no delete or put yet (not neccessary for now?)

module.exports = router;
