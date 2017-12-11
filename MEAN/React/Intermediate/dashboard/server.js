const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(function (req, res, next) {
    // Website I wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods I wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    /*// Request headers I wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);*/

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(7654, function(){
    console.log("API listening on port 7654");
});