var tasks = require('../controllers/tasks');
module.exports = function(app) {
    app.get("/", function(req, res){
        tasks.getAll(req, res);
    });
    app.get("/task/:id", function(req, res){
        tasks.getOne(req, res);
    });
    app.post("/task", function(req, res){
        tasks.newTask(req, res);
    });
    app.put("/task/:id", function(req, res){
        tasks.updateTask(req, res);
    });
    app.delete("/task/:id", function(req, res){
        tasks.deleteTask(req, res);
    });
}