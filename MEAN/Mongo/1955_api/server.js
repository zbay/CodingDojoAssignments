const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(7654, function(){
    console.log("listening on port 7654");
});