// Ticket #15 - User Data table
// Kaitlyn Peters

//Functions that manipulate the data within the 'userModel'
//userController is called by userRoutes

const User = require('../models/user');

const userController = {
    //POST
    // get user
    login: async (req, res) => {
        try {
            //todo
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
        }
        catch (error) {
            console.log(error);
            res.status(500).json({error: 'Error getting logged in user'});
        }
    },

    //POST
    // create user/ register user
    register: async (req, res) => {

    },
};

modules.export = userController;
