const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');
let self = module.exports = {
  newUser: function(req, res) {
      User.find({email: req.body.email}).exec(function(error, user){
        if(user.length > 0){
            return res.status(403).json({error: "The email you last submitted is already in the system."});
        }
        if(error){
          return res.status(500).json(err);
        }
        else{
            let newUser = new User(req.body);
            newUser.save(function saveUser(err, user){
                if(err || (req.body.password !== req.body.passwordConfirmation)){
                    if((req.body.password !== req.body.passwordConfirmation) || req.body.password.length < 16){
                        return res.status(403).json({error: "Password error! Make sure they're long enough and that they match!"});
                    }
                    else{
                      return res.status(403).json({error: "Failed to save new user to database! Try again!"});
                    }
                }
                else{
                    req.session.user_id = user.id;
                    res.json({success: "You saved a new user!"});
                }
            });
        }
      });
  },
  login: function(req, res){
    User.find({email: req.body.email}).exec(function(err, users){
        if(err){
          return res.status(403).json({error: "Could not find user in database!"});
        }
        else{
            if(users.length < 1){
                return res.status(403).json({error: "Incorrect email or password"});
            }
            else{
                let user = users[0];
                bcrypt.compare(req.body.password, user.password, function(err, matched){
                    if(matched){
                        req.session.user_id = user._id;
                        res.json({success: "Logged in correctly!"});
                    }
                    else{
                      return res.status(403).json({error: "Incorrect email or password!"});
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
    req.session.user_id = false;
  }
  }