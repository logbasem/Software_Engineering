// Ticket #15 - User Data Table
// Kaitlyn Peters

//gets functions from 'userController' to connect to db

const express = require('express');
const passport = require('passport')
const LocalStrategy = require('passport-local');

//router allows us to use modular route handlers
const router = express.Router() 
const userController = require('../controllers/userController.js'); 

//middleware for authentication (passportjs)
function isAuthenticated(req, res, next) {
    //if logged in, continue
    if(req.isAuthenticated()) {
        return next();
    }
    //else redirect user to login page
    res.redirect('/login');
}
//todo: login router
//POST  (create)
router.get('/login', userController.login);

//todo: Get logged in user (will be used for retrieving profile page data!)
//GET (read)
router.get("/", isAuthenticated, userController.getLoggedInUser);

router.get("/allUsers", userController.getAllUsers);

//todo: register router
//POST (create)
router.get('/register', userController.register)


module.exports = router;
