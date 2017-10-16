const notes = require('../controllers/notes');
const path = require('path');
module.exports = function(app) {
    app.post("/note", function(req, res){
        notes.newNote(req, res);
    });
    app.get("/notes", function(req, res){
        notes.getAll(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}