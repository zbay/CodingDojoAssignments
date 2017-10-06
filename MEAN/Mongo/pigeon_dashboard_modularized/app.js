const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session_mgmt = require('./server/controllers/session_mgmt');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(session({secret: 'jfdlsaflksaj', resave: true, saveUninitialized: true}));
app.use(session_mgmt.init_session);

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.listen(7654, function(){
    console.log("listening on port 7654");
});