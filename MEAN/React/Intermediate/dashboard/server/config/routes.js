const users = require('../controllers/users');
const path = require('path');
const jwt = require('jsonwebtoken');

// lightweight middleware function to protect certain routes by JWT
const hasJWT = function (req, res, next) {
    //let token = req.headers.authorization.substring(7); // removes Bearer: 
    let token = req.headers.authorization;
    jwt.verify(token, "hoogity911boogity", (err, decoded) => { 
        if(err){
            return res.status(403).json({error: "JWT authentication is required to access this route!"});
        }
        req.body.jwt_user_id = jwt.decode(token).sub; // save id for server side operations
        return next();
    });
}

module.exports = function(app) {
    app.post("/api/login", (req, res) =>{
        users.login(req, res);
    });
    app.post("/api/register", (req, res) => {
        users.register(req, res);
    });
    app.get("/api/users", hasJWT, (req, res) => {
        users.users(req, res);
    });
}