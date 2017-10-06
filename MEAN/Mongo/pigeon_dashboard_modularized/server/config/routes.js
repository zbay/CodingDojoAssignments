var mongoose = require('mongoose');
var Pigeon = mongoose.model('Pigeon');
var pigeons = require('../controllers/pigeons');
module.exports = function(app) {
    app.get("/", function(req, res){
        pigeons.getAll(req, res);
    });
    
    app.get("/pigeon/:id", function(req, res){
        pigeons.getOne(req, res);
    });
    
    app.get("/pigeons/new", function(req, res){
        pigeons.newForm(req, res);
    });
    
    app.get("/pigeons/edit/:id", function(req, res){
        pigeons.editForm(req, res);
    });
    
    app.post("/new_pigeon", function(req, res){ // new pigeon
        pigeons.newPigeon(req, res);
    });
    
    app.post("/pigeons/edit/:id", function(req, res){ // edit pigeon
        pigeons.update(req, res);
    });
    
    app.post("/pigeons/destroy/:id", function(req, res){ // delete pigeon
        pigeons.delete(req, res);
    });
}