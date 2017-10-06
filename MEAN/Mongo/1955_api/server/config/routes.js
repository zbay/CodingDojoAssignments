var persons = require('../controllers/persons');
module.exports = function(app) {
    app.get("/", function(req, res){
        persons.getAll(req, res);
    });
    
    app.get("/new/:name", function(req, res){
        persons.addPerson(req, res);
    });
    
    app.get("/remove/:name", function(req, res){
        persons.removePerson(req, res);
    });
    
    app.get("/:name", function(req, res){
        persons.getOne(req, res);
    });
}