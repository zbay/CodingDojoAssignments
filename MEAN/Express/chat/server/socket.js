module.exports = function(io){
    messages = [];
    io.sockets.on('connection', function (socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        socket.emit('load_previous_messages', {messages: messages});
        socket.on('message', function(msg){
            let newMsg = {author: msg.author, message: msg.message};
            messages.push(newMsg);
            io.emit('new_message',newMsg);
        });
        socket.on( "button_clicked", function (data){
            console.log('Someone clicked a button!  Reason: '  + data.reason);
            socket.emit( 'server_response', {response:  "sockets are the best!"});
        })
    });
}