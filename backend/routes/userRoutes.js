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
    console.log('Not logged in bro');
}
//login router
//POST  (create)
router.post('/login', userController.login);

//Get logged in user
//GET (read)
router.get("/", isAuthenticated, userController.getLoggedInUser);

router.get("/logout", userController.logout);

router.get("/allUsers", userController.getAllUsers);

//register router
//POST (create)
router.post('/register', userController.register)


module.exports = router;
