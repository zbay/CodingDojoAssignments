const players = require('../controllers/players');
const path = require('path');
module.exports = function(app) {
    app.post("/player", function(req, res){
        players.newPlayer(req, res);
    });
    app.get("/players", function(req, res){
        players.getAll(req, res);
    });
    app.post("/playerUpdate", function(req, res){
        players.update(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}