const users = require('../controllers/users');
const bikes = require('../controllers/bikes');
const path = require('path');
// need to add a route for searching by title
module.exports = function(app) {
    app.post("/api/bike", (req, res) =>{ // add a new bike
        bikes.newBike(req, res);
    });
    app.get("/api/bikes", (req, res) => { // get all bikes
        bikes.getAll(req, res);
    });
    app.get("/api/myBikes", (req, res) => { // get just my bikes
        bikes.getMine(req, res);
    });
    app.get("/api/randomBike", (req, res) => { // get one random bike
        bikes.getRandom(req, res);
    });
    app.post("/api/bikeSearch", (req, res) => {
        bikes.getByTitle(req, res);
    });
    app.post("/api/editBike", (req, res) => {
        bikes.editBike(req, res);
    });
    app.post("/api/deleteBike", (req, res) => {
        bikes.deleteBike(req, res);
    });
    app.post("/api/user", (req, res) => { // add a new user
        users.newUser(req, res);
    });
    app.post("/api/login", (req, res) => { // login attempt
        users.login(req, res);
    });
    app.get("/api/logout", (req, res) => { // log out
        users.logout(req, res);
    });
    app.all("*", (req, res, next) => { // front-end views
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}