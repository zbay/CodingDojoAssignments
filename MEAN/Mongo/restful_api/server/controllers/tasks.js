const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const self = module.exports = {
    getAll: function(req, res){
        Task.find({}).sort({updated_at: -1}).exec(function(err, tasks){
            if(err){
                res.json({err});
            }
            else{
                res.json(tasks);
            }
        });
    },
    getOne: function(req, res){
        Task.find({_id: req.params.id}).exec(function(err, task){
            if(err){
                res.json({err});
            }
            else{
                res.json(task);
            }
        });
    },
    newTask: function(req, res){
        let newTask = new Task();
        console.log(req.body);
        newTask.title = req.body.title;
        newTask.description = req.body.description;
        newTask.completed = !!req.body.completed;
        newTask.save(function(err, task){
            if(err){
                res.json({err});
            }
            else{
                res.json(task);
            }
        });
    },
    deleteTask: function(req, res){
        Task.remove({_id: req.params.id}).exec(function(err, msg){
            if(err){
                res.json(err);
            }
            else{
                res.json(msg);
            }
        });    
    },
    updateTask: function(req, res){
        Task.update({_id: req.params.id}, {title: req.body.title, description: req.body.description, completed: req.body.completed == "true"}).exec(function(err, msg){
            if(err){
                res.json(err);
            }
            else{
                res.json(msg);
            }          
        });
    }
}