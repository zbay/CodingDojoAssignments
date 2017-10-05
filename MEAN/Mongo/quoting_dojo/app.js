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

//const models = require('./models/models.js')(mongoose);
const QuoteSchema = new mongoose.Schema({
    name: {type: String, minlength: 1},
    quote: {type: String, minlength: 1},
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');

app.get("/", function(request, response){
    if(!request.session.name){
        request.session.name = "";
        request.session.quote = "";
    }
    response.render("index", {name: request.session.name, quote: request.session.quote, errors: request.session.errors});
});

app.post("/quotes", function(request, response){
    var newQuote = new Quote();
    newQuote.name = request.body.name;
    newQuote.quote = request.body.quote;
    newQuote.save(function(err){
        if(err){
            request.session.name = request.body.name;
            request.session.quote = request.body.quote;
            request.session.errors = newQuote.errors;
            response.redirect("/");
        }
        else{
            request.session.name = "";
            request.session.quote = "";
            request.session.errors = undefined;
            response.redirect("/quotes");
        }
    }); 
});

app.get("/quotes", function(request, response){
    var error = undefined;
    Quote.find({}).sort({ createdAt: -1}).exec(function(err, quotes){
        if(err){
            error = "Could not load quotes from database!"
        }
        response.render("quotes", {quotes: quotes, error: error});
    });
});

mongoose.connect('mongodb://localhost/quoting_dojo');

app.listen(7654, function(){
    console.log("listening on port 7654");
});