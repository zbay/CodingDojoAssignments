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

const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 4},
    content: {type: String, minlength: 1, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});
mongoose.model('Message', MessageSchema);
const Message = mongoose.model('Message');

const CommentSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 4},
    content: {type: String, minlength: 1, required: true},
    _message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true});
mongoose.model('Comment', CommentSchema);
const Comment = mongoose.model('Comment');

app.get("/", function(req, res){
    Message.find({}).sort({createdAt: -1}).populate('comments').exec(function(err, messages){
        res.render("wall", {messages: messages, message: req.session.message, author: req.session.author, errors: req.session.errors, comment: req.session.comment, parentId: req.session.parentId});
    });
});

app.post("/message", function(req, res){
    let newMessage = new Message();
    newMessage.author = req.body.author;
    newMessage.content = req.body.content;
    req.session.author = req.body.author;
    newMessage.save(function(err){
        if(err){
            req.session.message = req.body.content;
            req.session.errors = err.errors;
        }
        else{
            req.session.errors = undefined;
            req.session.message = "";
        }
        res.redirect("/");
    });
});

app.post("/comment", function(req, res){ // for comment errors, save parent message id and add client-side logic
    Message.findOne({_id: req.body.parentId}, function(msgErr, message){
        if(msgErr){
            req.session.errors = msgErr.errors;
            res.redirect("/");
        }
        req.session.errors = undefined;
        let comment = new Comment();
        comment.author = req.body.author;
        comment.content = req.body.content;
        comment._message = message._id;
        message.comments.push(comment);
        comment.save(function(commentErr){
            if(commentErr){ 
                req.session.author = req.body.author;
                req.session.errors = commentErr.errors;
            } 
            else{
                req.session.errors = undefined;
            }
            message.save(function(commentErr){
                res.redirect('/'); 
            });
        });
  });
});

function init_session(request, response, next){
    if(request.session.author === undefined){
        request.session.author = "";
        request.session.message = "";
        request.session.comment = "";
    }
    next();
}

mongoose.connect('mongodb://localhost/message_board');

app.listen(7654, function(){
    console.log("listening on port 7654");
});