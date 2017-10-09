// Import express and path modules.
const express = require( "express");
const path = require( "path");
// Create the express app.
const app = express();
// Define the static folder.
app.use(express.static(path.join(__dirname, "./client/static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.

const routes_setter = require('./server/routes.js');
routes_setter(app);

// Start Node server listening on port 8000.
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

const io = require('socket.io').listen(server);
const chat_room_manager = require('./server/socket.js');
chat_room_manager(io);