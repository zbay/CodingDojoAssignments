var express = require("express");
var session = require('express-session');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, './views')); 
app.set('view engine', 'ejs');
app.use(session({secret: 'jfdlsaflksaj', resave: true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true }));

var route = require('./routes/index.js')(app);

app.listen(7654, function(){
    console.log("listening on port 7654");
});