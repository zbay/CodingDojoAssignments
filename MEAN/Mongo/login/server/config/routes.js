const users = require('../controllers/users');
module.exports = function(app) {
    app.get("/", function(req, res){
        if(req.session.logged_in){
            res.redirect("/success");
        }
        else{
            console.log(req.session);
            res.render("start", req.session);
        }
    });
    
    app.get("/success", function(req, res){
        if(req.session.logged_in){
            res.render("success", req.session);
        }
        else{
            res.redirect("/");
        }
    });
    
    app.post("/register", function(req, res){
        users.register(req, res);
    });
    
    app.post("/login", function(req, res){
        users.login(req, res);
    });
    
    app.get("/logout", function(req, res){ // new pigeon
        users.logout(req, res);
    });
}