const mongoose = require('mongoose');
const Note = mongoose.model('Note');
module.exports = {
  getAll: function(req, res) {
    Note.find({}).sort('-created_at').exec((err, notes) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(notes);
        }
    });
  },

  newNote: function(req, res){
    let newNote = new Note(req.body);
    newNote.save((err) => {
        if(err){
            res.json({error: err});
        }
        else{
            res.json({success: "Note successfully saved to the database!"});
        }
    });
  }
}