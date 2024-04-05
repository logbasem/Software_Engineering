// Ticket #15 - User Data table
// Kaitlyn Peters

//Contains functions that manipulate the data within the 'userModel'
//note: userController methods are called by userRoutes

const passport = require('passport');
const bcrypt = require('bcrypt'); //for salting passwords
const hash = require('bcryptjs')
const User = require('../models/userModel');

//passsword salting + hashing using bcrypt -----------
const saltRounds = 10;

async function hashPassword(password) {
    try{
        //generate a salt
        const salt = bcrypt.genSalt(saltRounds)
        //hash the password
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    catch(error) {
        console.log(error.message);
    }
    
}
//check the password
// async function checkPassword(password) {
//     const result = await bcrypt.compare(password, hash);
//     return result;
// }

//USER CONTROLLER METHODS ---------
const userController = {
    //@desc Return a list of all users
    //@route GET /users/allUsers
    //@access Private
    getAllUsers: async (req, res) => {
        try{
            //get all users
            // findAll is a sequelize method that returns all records in the database matching the query
            await User.findAll({
                attributes: [
                    "id",
                    "username",
                    "userpassword",
                    "email",
                    "first_name",
                    "last_name",
                ],
                //success message + json data retrieved from tables
            }).then((userdata) => {
                res.status(200).json(userdata);
            });
        }
        catch (error) {
            console.error('Error getting all users:', error);
            res.status(500).json({error: 'Error getting all users'});
        }
    },


    //@desc Login user
    //@route POST /users/login
    //@access Public
    login: async (req, res) => {
        //authenticate using passport
        //note: the passwords are hashed. Passport checks the hashed passwords
        //using its local strategy where passport is configured (check index.js)
        passport.authenticate('local', (err, user, info) => {
            if(err) {
                console.log(err);
                return next(err);
            }
            //user not found
            if(!user) {
                return res.status(401).json({message: 'Invalid username or password'});
            }
            //If sucess, log in the user
            req.logIn(user, (err) => {
                if(err) {
                    return next(err);
                }
                return res.json({message: 'Login sucessful', user});
            });
        })(req, res, next);
    },

    // @desc Check if user is logged in
    // @route GET /users/
    // @access Private
    getLoggedInUser: async (req, res) => {
        if(req.isAuthenticated()) {
            //success message + returns the JSON user data as well
            res.status(200).json(req.user); 
        }
        else {
            res.status(401).json({message: 'No user logged in'});
        }
    },

    // @desc Register new user
    // @route POST /users/register
    // @access Private
    register: async (req, res) => {
        try {
            //extract user data from request body
            const {username, enteredPassword, first_name, last_name, email} = req.body;
            const userpassword = hashPassword(enteredPassword); //hash password

            //Create a new user instance (using sequelize)
            //note: all queries must be NON NULL!
            const newUser = await User.create({
                username,
                userpassword,
                first_name,
                last_name,
                email
            });

            //success message
            res.status(200).json({message: 'User created', data: newUser});
        }
        catch(error) {
            console.log(error);
            res.status(500).json({error: 'Error registering user'});
        }
    },

    //todo: update user
    // @route PUT
    // @access Private
    updateUser: async (req, res) => {

    }
};

module.exports = userController;
