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
    response.render("index");
});

app.post("/result", function(request, response){
    request.session.recent_request = request.body;
    response.redirect("/results"); // increments the second time after the redirect
});

app.get("/results", function(request, response){
    response.render("results", request.session.recent_request);
});

app.listen(7654);