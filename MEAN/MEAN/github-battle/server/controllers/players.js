const mongoose = require('mongoose');
const Player = mongoose.model('Player');
module.exports = {
  getAll: function(req, res) {
    console.log("getting players???");
    Player.find({}).sort({score: -1}).exec((err, notes) => {
        if(err){
            res.json({error: err});
        }
        else{
            res.json(notes);
        }
    });
  },

  newPlayer: function(req, res){
    Player.find({'username': req.body.username}, (err, users) => {
        console.log(users);
        if(users && users.length > 0){
            console.log("updating!");
            this.update(req, res);
        }
        else{
            let newPlayer = new Player(req.body);
            newPlayer.save((err) => {
                if(err){
                    res.json({error: err});
                }
                else{
                    console.log("Successful player save!!!");
                    res.json({success: "Player successfully saved to the database!"});
                }
            });
        }
    });
  },

  update: function(req, res){
      Player.findOne({username: req.body.username}, (err, player) => {
        player.score = req.body.score;
        player.avatarURL = req.body.avatarURL;
        player.save((err, response) => {
          if(err){
              res.json({error: err});
          }
          else{
              res.json(response);
          }       
        });     
      });
  }
}