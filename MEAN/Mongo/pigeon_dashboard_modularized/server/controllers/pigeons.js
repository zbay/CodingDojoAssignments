"use strict";
var mongoose = require('mongoose');
var Pigeon = mongoose.model('Pigeon');
let self = module.exports = {
  getAll: function(req, res) {
    Pigeon.find({}).sort({ createdAt: -1}).exec(function(err, pigeons){
        if(err){
            error = "Could not load pigeons from the database!"
        }
        if(!pigeons){
            pigeons = [];
        }
        res.render("home", {pigeons: pigeons, error: err});
    });
  },
  update: function(req, res){
    Pigeon.update({_id: req.params.id}, {name: req.body.name, weight: req.body.weight}, {runValidators: true}, function(err, updated){
        if(err){
            req.session.errors = err.errors;
            res.redirect("/pigeons/edit/" + req.params.id);
        }
        else{
            self.reset_session(req);
            res.redirect("/pigeon/" + req.params.id);
        }
    });
  },
  newPigeon: function(req, res){
    let newPigeon = new Pigeon();
    newPigeon.name = req.body.name;
    newPigeon.weight = req.body.weight;
    newPigeon.save(function(err){
        if(err){
            req.session.name = req.body.name;
            req.session.weight = req.body.weight;
            req.session.errors = newPigeon.errors;
            res.redirect("/pigeons/new");
        }
        else{
            self.reset_session(req);
            res.redirect("/");
        }
    });
  },
  delete: function(req, res){
    Pigeon.remove({_id: req.params.id}, function(err){
        res.redirect("/");
    });
  },
  editForm: function(req, res){
    Pigeon.findOne({_id: req.params.id}).exec(function(err, pigeon){
        if(err){
            res.redirect("/");
        }
        res.render("edit_pigeon", {pigeon: pigeon, errors: req.session.errors});
    });    
  },
  getOne: function(req, res){
    Pigeon.findOne({_id: req.params.id}).exec(function(err, pigeon){
        if(err){
            error = "This pigeon does not exist!"
        }
        res.render("pigeon", {pigeon: pigeon, error: err});
    });
  },
  newForm: function(req, res){
    res.render("new_pigeon", {name: req.session.name, errors: req.session.errors, weight: req.session.weight});
  },
  reset_session: function(req){
    req.session.name = "";
    req.session.weight = 0;
    req.session.errors = undefined;
}
}