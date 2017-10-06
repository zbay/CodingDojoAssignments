const mongoose = require('mongoose');
const Person = mongoose.model('Person');
const self = module.exports = {
    getAll: function(req, res){
        Person.find({}).exec(function(err, persons){
            if(err){
                res.json({error: err});
            }
            else{
                res.json(persons);
            }
        });
    },
    getOne: function(req, res){
        Person.find({name: req.params.name}).exec(function(err, person){
            if(err){
                res.json({error: err});
            }
            else{
                res.json(person);
            }
        });
    },
    removePerson: function(req, res){
        Person.remove({name: req.params.name}).exec(function(err){
            self.getAll(req, res);
        });
    },
    addPerson: function(req, res){
        let newPerson = new Person();
        newPerson.name = req.params.name;
        newPerson.save(function(err, person){
            if(err){
                res.json({error: err});
            }
            else{
                self.getAll(req, res);
            }
        });
    }
}