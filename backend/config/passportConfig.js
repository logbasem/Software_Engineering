// Ticket 54/ Issue 54
// redundant code
var User = require('../models/userModel.js');

module.exports = function(passport) {
    const LocalStrategy = require('passport-local').Strategy;
    const bcrypt = require('bcrypt');

    //serialize and deserialize
    //for maintaining login session
    passport.serializeUser((user, done) => {
        console.log(user.id);
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        //retrieve user form the data base using id
        User.findOne({ where: { id: id } })
        .then(user => {
            // User found, pass user object to done callback
            done(null, user);
        })
        .catch(err => {
            // Error occurred while retrieving user
            done(err, null);
        });
});

    //check password using bcrypt
    async function isValidPassword(enteredPass, hashPass) {
        const result = await bcrypt.compare(enteredPass, hashPass);
    };
    
    //passport configuration
    passport.use(new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "userpassword",
            passReqToCallback: true,
        },
        async function(req, email, password, done) {
            //query the entered username
            User.findOne({
                where:
                   { 
                    email: email,
                    userpassword: password,
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
    
};