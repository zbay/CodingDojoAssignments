const players = require('../controllers/players');
const path = require('path');
module.exports = function(app) {
    app.post("/player", function(req, res){
        console.log("new player!!!");
        players.newPlayer(req, res);
    });
    app.get("/players", function(req, res){
        console.log("get player route...");
        players.getAll(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}