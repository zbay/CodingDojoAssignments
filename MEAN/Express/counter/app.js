var express = require("express");
var session = require('express-session');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, './views')); 
app.set('view engine', 'ejs');
app.use(session({secret: 'jfdlsaflksaj', resave: true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(request, response){
    if(request.session.count === undefined){
        request.session.count = 1;
    } 
    else{
        request.session.count += 1;
    }
    response.render("index", {count: request.session.count});
});

app.get("/double", function(request, response){
    if(request.session.count === undefined){
        request.session.count = 1;
    } 
    else{
        request.session.count += 1;
    }
    response.redirect("/"); // increments the second time after the redirect
});

app.get("/reset", function(request, response){
    request.session.count = 0;
    response.redirect("/");
});

app.listen(7654);