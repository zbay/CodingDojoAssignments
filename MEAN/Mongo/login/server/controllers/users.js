// todo: divvy up errors between register and login, for display
"use strict";
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
let self = module.exports = {
  register: function(req, res){
      User.find({email: req.body.email}).exec(function(error, user){
        if(user.length > 0){
            req.session.registration_errors = {errors: {message: "This email is in use by another account! Try another one, or log in."}};
            req.session.first_name = req.body.first_name;
            req.session.last_name = req.body.last_name;
            req.session.email = req.body.email;
            req.session.birthday = req.body.birthday;
            res.redirect("/");
        }
        else{
            let newUser = new User(req.body);
            newUser.save(function saveUser(err){
                if(err || (req.body.password !== req.body.confirm_password)){
                    req.session.first_name = req.body.first_name;
                    req.session.last_name = req.body.last_name;
                    req.session.email = req.body.email;
                    req.session.birthday = req.body.birthday;
                    req.session.registration_errors = err;
                    if(req.body.password !== req.body.confirm_password){
                        req.session.registration_errors.errors['password_match'] = {message: "Your passwords do not match!"};
                    }
                    res.redirect("/");
                }
                else{
                    req.session.logged_in = true;
                    res.redirect("/success");
                }
            });
        }
      });
  },
  login: function(req, res){
    User.find({email: req.body.email}).exec(function(err, users){
        req.session.email = req.body.email;
        if(err){
            req.session.login_errors = {errors: {user: {message: "Could not retrieve user from database!"}}};
            res.redirect("/");
        }
        else{
            if(users.length < 1){
                req.session.login_errors = {errors: {pw: {message: "Incorrect email or password!"}}};
                res.redirect("/");
            }
            else{
                let user = users[0];
                bcrypt.compare(req.body.password, user.password, function(err, matched){
                    if(matched){
                        req.session.first_name = user.first_name;
                        req.session.logged_in = true;
                        res.redirect("/success"); 
                    }
                    else{
                        req.session.login_errors = {errors: {pw: {message: "Incorrect email or password!"}}};
                        res.redirect("/");
                    }
                });
            }
        }
    });
  },
  logout: function(req, res){
    self.reset_session(req);
    res.redirect("/");
  },
  reset_session: function(req){
    req.session.logged_in = false;
    req.session.email = "";
    req.session.first_name = "";
    req.session.last_name = "";
    req.session.birthday = "1900-01-01";
    req.session.registration_errors = {errors: {}};
    req.session.login_errors = {errors: {}};
}
}