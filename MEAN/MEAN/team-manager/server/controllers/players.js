const mongoose = require('mongoose');
const Player = mongoose.model('Player');
module.exports = {
  getAll: function(req, res) {
    Player.find({}).exec((err, notes) => {
        if(err){
            res.json({error: err});
        }
        else{
            res.json(notes);
        }
    });
  },

  newPlayer: function(req, res){
    let newPlayer = new Player(req.body);
    newPlayer.save((err) => {
        if(err){
            res.json({error: err});
        }
        else{
            res.json({success: "Player successfully saved to the database!"});
        }
    });
  },

  deletePlayer: function(req, res){
    Player.findByIdAndRemove(req.body._id, (err, player) => {
        if(err){
            res.json({error: err});
        }
        else{
            res.json(player);
        }       
    });
  },

  editStatus: function(req, res){
      Player.findOne({_id: req.body._id}, (err, player) => {
        // console.log(player.statuses[parseInt(req.body.game)-1]);
        player.statuses.set(parseInt(req.body.game)-1, req.body.status);
        player.save((err, response) => {
          if(err){
              console.log(err);
              res.json({error: err});
          }
          else{
              console.log(response);
              res.json(response);
          }       
        });     
      });
  }
}