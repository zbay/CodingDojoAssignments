const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');
const createToken = require('../util/token');

let self = module.exports = {
    register: function(req, res) {
        User.find({name: req.body.name}).exec(function(error, user){
          if(user.length > 0){
              return res.status(403).json({error: "The name you last submitted is already in the system."});
          }
          if(error){
            return res.status(500).json(err);
          }
          else{
              // might want to check for non-blank name and password
              let newUser = new User(req.body);
              newUser.save(function saveUser(err, user){
                  if(err){
                    return res.status(403).json({error: "Failed to save new user to database! Try again!"});
                  }
                  else{
                    return res.json({token: createToken(user)});
                  }
              });
          }
        });
    },
    login: function(req, res){
        console.log("login reached?");
      User.find({email: req.body.email}).exec(function(err, users){
          if(err){
            return res.status(403).json({error: "Incorrect email or password!"});
          }
          else{
              if(users.length < 1){
                  return res.status(403).json({error: "Incorrect email or password!"});
              }
              else{
                  let user = users[0];
                  bcrypt.compare(req.body.password, user.password, function(err, matched){
                  if(matched){
                        user.save((error, msg) => {
                            return res.json({token: createToken(user)});
                        });
                   }
                   else{
                    user.save((error, msg) => {
                        return res.status(403).json({error: "Incorrect email or password!"});
                    });
                   }
                });
              }
          }
      });
    },
    users: function(req, res){
        User.find({}, 'name').exec(function(err, users){
            if(err){
                return res.status(500).json({error: "Failed to retrieve users!"});
            }
            console.log(users);
            return res.json({users: users});
        });
    }
}