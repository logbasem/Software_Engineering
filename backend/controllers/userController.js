// Ticket #15 - User Data table
// Kaitlyn Peters

//Functions that manipulate the data within the 'userModel'
//userController is called by userRoutes

const User = require('../models/userModel');

const userController = {
    //get all users
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
            }).then((userdata) => {
                res.status(200).json(userdata);
            });
        }
        catch (error) {
            console.error('Error getting all users:', error);
            res.status(500).json({error: 'Error getting all users'});
        }
    },
    //POST
    // get user
    login: async (req, res) => {
        try {
            //todo
            console.log("Login the user");
        }
        catch (error) {
            console.log(error);
            res.status(500).json({error: 'Error logging in'});
        }
    },

    //GET
    // get currently loggedd user
    getLoggedInUser: async (req, res) => {
        try {
            //todo
            console.log("Get logged in user");
        }
        catch (error) {
            console.log(error);
            res.status(500).json({error: 'Error getting logged in user'});
        }
    },

    //POST
    // create user/ register user
    register: async (req, res) => {
        try {
            console.log("Get registered user")
        }
        catch(error) {
            console.log(error);
            res.status(500).json({error: 'Error registering user'});
        }
    },
};

module.exports = userController;
