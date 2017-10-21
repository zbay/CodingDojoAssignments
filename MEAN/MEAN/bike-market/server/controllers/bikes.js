const mongoose = require('mongoose');
const User = mongoose.model('User');
const Bike = mongoose.model('Bike');
module.exports = {
  getMine: function(req, res) {
    if(!req.session.user_id){
      return res.status(403).json({error: "You cannot view this content, because you are not logged in!"});
    }
    User.findOne({_id: req.session.user_id})
      .populate('bikes')
      .exec(function(err, user){
        if(err){
          return res.status(500).json({error: "Server error. Could not load your bikes."});
        }
        else{
          console.log("my bikes...");
          console.log(user);
          console.log(user.bikes);
          res.json({bikes: user.bikes});
        }
      });
  },
  getAll: function(req, res){
    if(!req.session.user_id){
      return res.status(403).json({error: "You cannot request this content, because you are not logged in!"});
    }
    else{
    User.find({}).populate('bikes').lean().exec((err, users) => {
      if(err){
        return res.status(500).json({error: "Failed to load bikes! Try again later."});
      }
      else{
      let bikes = [];
      for(let i = 0; i < users.length; i++){
        if(users[i]._id == req.session.user_id){
          for(let j = 0; j < users[i].bikes.length; j++){ // for my bikes, add the "mine" property
            users[i].bikes[j].mine = true;
            bikes.push(users[i].bikes[j]);
          }
        }
        else{
          for(let j = 0; j < users[i].bikes.length; j++){ // for other users' bikes, add contact deets
            users[i].bikes[j].email = users[i].email;
            users[i].bikes[j].firstName = users[i].firstName;
            bikes.push(users[i].bikes[j]);
          }
        }
      }
      return res.json({bikes: bikes});
    }
    });
    /*Bike.find({}).exec((err, bikes) => {
      if(err){
        return res.status(500).json({error: "Failed to load bikes! Try again later."});
      }
      let count = 0;
      console.log("user_id: " + req.session.user_id);
      for(let i = 0; i < bikes.length; i++){
        console.log("bike user id: " + bikes[i]._user);
        if(bikes[i]._user == req.session.user_id){
          bikes[i].mine = true;
          count++;
        }
        else{
          User.findOne({_id: bikes[i]._user}).exec((error, user) => {
            console.log("User? " + user);
            if(error){
              return res.status(500).json({error: "Failed to load bikes! Try again later."});
            }
            bikes[i].firstName = user.firstName;
            bikes[i].email = user.email;
            count++;
          });
        }
        if(count === bikes.length-1){
          console.log("returning the bikes");
          console.log(bikes);
          res.json({bikes: bikes});
        }
      }
    });*/
  }},
  getRandom: function(req, res){
    Bike.find({}).exec((err, bikes) => {
      if(err){
        return res.status(500).json(err);
      }
      if(bikes.length < 1){
        return res.status(404).json({error: "There are no bikes in the database!"});
      }
      let randomIndex = Math.floor(Math.random() * bikes.length);
      res.json({bike: bikes[randomIndex]});
    });
  },
  getByTitle: function(req, res){
    if(!req.session.user_id){
      return res.status(403).json({error: "You cannot retrieve this content, because you are not logged in!!"});
    }
    Bike.find({title: req.body.title}).exec((err, bikes) => {
      if(err){
        return res.status(500).json({error: "Server error. Could not retrieve bikes."});
      }    
      if(bikes.length < 1){
        return res.status(404).json({error: "There are no bikes with that title!"});
      } 
      res.json({bikes: bikes});
    });
  },
  editBike: function(req, res){
    if(!req.session.user_id){
      return res.status(403).json({error: "You cannot edit this bike, because you are not logged in!"});
    }
    Bike.findOne({_id: req.body._id}).exec((err, bike) => {
      if(err){
        return res.status(500).json({error: "Server error. Could not find the bike to be edited."});
      }      
      bike.title = req.body.title;
      bike.description = req.body.description;
      bike.price = req.body.price;
      bike.location = req.body.location;
      bike.imgURL = req.body.imgURL;
      bike.save((error, response) =>{
        if(error){
          return res.status(403).json({error: "Bike edits failed! Is everything valid?"});
        }   
        res.json({success: "Bike changes saved!"});
      }); 
    });
  },
  deleteBike: function(req, res){
    if(!req.session.user_id){
      console.log("unlogged server error");
      return res.status(403).json({error: "You cannot delete this bike, because you are not logged in!"});
    }
    User.findOneAndUpdate({_id: req.session.user_id}, { $pull: {bikes: req.body.bikeID}}).exec((err, response) => {
      if(err){
        console.log("pullAll server error");
        return res.status(500).json({error: "Server error! Bike not deleted from the user or the DB."});
      }
      if(!req.session.user_id){
        console.log("nacho server error");
        return res.status(403).json({error: "You cannot delete this bike, because it is not your bike!"});
      }
      Bike.remove({_id: req.body.bikeID}).exec((error, msg)  => {
        if(error){
          console.log("remove server error");
          return res.status(500).json({error: "Server error! Bike not deleted from the DB."});
        }
        else{
          res.json({success: "Bike successfully deleted!"});      
        }
      });
    });
  },
  newBike: function(req, res){
    if(!req.session.user_id){
      return res.status(403).json({error: "You cannot create a bike, because you are not logged in!"});
    }
    req.body._user = req.session.user_id;
    let newBike = new Bike(req.body);
    newBike.save((err, bike) => {
      if(err){
        return res.status(403).json({error: "You cannot create this bike! Check that all input fields are valid."});
      }
      User.findOne({_id: req.session.user_id}).exec((findError, user) => {
        if(findError){
          return res.status(500).json({error: "Server error. Bike save failed."});
        }
        else{
          user.bikes.push(newBike);
          user.save((finalError, msg) => {
            if(finalError){
              return res.status(500).json({error: "Server error. Bike save failed."});
            }
            else{
              console.log("adding bike to user...");
              console.log(user);
              res.json({success: "Bike successfully created!"});
            } 
          });
        }
      });
    });
  }
}