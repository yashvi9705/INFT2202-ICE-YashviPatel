
const { response } = require("express");
const bcrypt = require('bcrypt');
const {model} = require('mongoose');
const saltRounds = 12;

const { User } = require("../models/user");


/**
 * renders home view
 * @param {*} req 
 * @param {*} res 
 */
exports.homeView = (req, res) => {
    res.render('home', {
        pageTitle: 'INFT 2202 - Home Page',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: ''
    });
}

/**
 * render the login failure page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getLoginFailure = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: 'Username/password combination does not exist. Please try again.'
    });
}

/**
 * render the login success page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getLoginSuccess = (req, res, next) => {
    res.render('login-success', {
        pageTitle: '',
        user: { username: req.body.username }
    });
}

/**
 * handle login form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postLogin = (req, res) => {
    let usernameEntry = req.body.username;
    let passwordEntry = req.body.password;
    // check to see if user pass combo exists
    // render either login-failure or login-success
    // TODO: check against DB instead of hardcoded values
    User.findOne({username: usernameEntry}).then(function(user) {
        if(user){
            bcrypt.compare(passwordEntry,user.hashPassword, function(err, result){
                if(err == null && result){
                    // user has log in and correct password
                    getLoginSuccess(req, res);
    
                }else{
                    getLoginFailure(req, res);
                }
                
            });

        }else{
            // user not found 
            getLoginFailure(req, res);
        }
    });

    // if (username === 'admin' && password === 'admin') {
    //     // user password combination matches, show success
    //     this.getLoginSuccess(req, res);
    // } else {
    //     // user password combination failed/does not exist
    //     // show error message
    //     this.getLoginFailure(req, res);
    // }
}


/**
 * render the register page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getRegister = (req, res, next) => {
    res.render('register', {
        pageTitle: 'Register a New Account',
        errorMessage: ''
    });
}

/**
 * handle register form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postRegister = (req, res) => {
    let usernameEntry = req.body.username.trim();
    let passwordEntry = req.body.password.trim();

    let errorMessage = '';

    User.findOne({username: usernameEntry}).then(function(user) {
        if(user){
            res.render('register', {
                pageTitle: 'Register a New Account',
                errorMessage: 'Username is already in use. Please choose another'
            });

        }else{

            // user does not exist 
            // has the password before adding in 
            bcrypt.hash(passwordEntry, saltRounds, function(err, hash){
                if(err == null && hash){
                    // no error, has successful 
                    // creat ea user object 

                    let userData = {
                        username: usernameEntry,
                        hashPassword: hash
                    }

                    // create schema model object 
                    let newUser = new User(userData);

                    // save new user 
                    newUser.save();
                    res.render('login', {
                        pageTitle: 'login',
                        errorMessage: ''
                    });

                }else{

                    console.log(err);
                }
                // console.log(err,hash, passwordEntry)
            });
            
        }
    })
    .catch((err) => {
        // does not exist create new record 
        console.log("An error occured !!!!")
    });

    
}



module.exports = exports;


// npm install to installed all teh dependencies which are needed and in the package.json file 
// create new database ice11 and user

// click the add data and copy the user json data inside 
// create an object with this in. 

