module.exports = function(io){
    io.sockets.on('connection', function (socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        socket.on( "button_clicked", function (data){
            console.log('Someone clicked a button!  Reason: '  + data.reason);
            socket.emit( 'server_response', {response:  "sockets are the best!"});
        })
    });
}