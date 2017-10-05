const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret: 'jfdlsaflksaj', resave: true, saveUninitialized: true}));
app.use(init_session);

const PigeonSchema = new mongoose.Schema({
    name: {type: String, minlength: 1},
    weight: {type: Number, min: 0.1}
}, {timestamps: true});
mongoose.model('Pigeon', PigeonSchema);
const Pigeon = mongoose.model('Pigeon');

app.get("/", function(req, res){
    Pigeon.find({}).sort({ createdAt: -1}).exec(function(err, pigeons){
        if(err){
            error = "Could not load pigeons from the database!"
        }
        if(!pigeons){
            pigeons = [];
        }
        res.render("home", {pigeons: pigeons, error: err});
    });
});

app.get("/pigeon/:id", function(req, res){
    Pigeon.findOne({_id: req.params.id}).exec(function(err, pigeon){
        if(err){
            error = "This pigeon does not exist!"
        }
        res.render("pigeon", {pigeon: pigeon, error: err});
    });
});

app.get("/pigeons/new", function(req, res){
    res.render("new_pigeon", {name: req.session.name, errors: req.session.errors, weight: req.session.weight});
});

app.get("/pigeons/edit/:id", function(req, res){
    Pigeon.findOne({_id: req.params.id}).exec(function(err, pigeon){
        if(err){
            res.redirect("/");
        }
        res.render("edit_pigeon", {pigeon: pigeon, errors: req.session.errors});
    });    
});

app.post("/new_pigeon", function(req, res){ // new pigeon
    let newPigeon = new Pigeon();
    newPigeon.name = req.body.name;
    newPigeon.weight = req.body.weight;
    newPigeon.save(function(err){
        if(err){
            req.session.name = req.body.name;
            req.session.weight = req.body.weight;
            req.session.errors = newPigeon.errors;
            res.redirect("/pigeons/new");
        }
        else{
            reset_session(req);
            res.redirect("/");
        }
    });
});

app.post("/pigeons/edit/:id", function(req, res){ // edit pigeon
    Pigeon.update({_id: req.params.id}, {name: req.body.name, weight: req.body.weight}, {runValidators: true}, function(err, updated){
        if(err){
            console.log(err.errors);
            req.session.errors = err.errors;
            res.redirect("/pigeons/edit/" + req.params.id);
        }
        else{
            reset_session(req);
            res.redirect("/pigeon/" + req.params.id);
        }
    });
});

app.post("/pigeons/destroy/:id", function(req, res){ // delete pigeon
        Pigeon.remove({_id: req.params.id}, function(err){
            res.redirect("/");
        });
});

function init_session(req, res, next){
    if(req.session.name === undefined){
        reset_session(req);
    }
    next();
}

function reset_session(req){
    req.session.name = "";
    req.session.weight = 0;
    req.session.errors = undefined;
}

mongoose.connect('mongodb://localhost/pigeon_dashboard');

app.listen(7654, function(){
    console.log("listening on port 7654");
});