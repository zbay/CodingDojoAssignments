module.exports = function(io){
    let counter = 0;
    io.sockets.on('connection', function (socket) {
        socket.emit('update_counter', {count: counter});
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        socket.on("increment", function (data){
            counter++;
            console.log("Counter: " + counter);
            io.emit('update_counter', {count: counter}); //io.emit does a full broadcast
            //socket.broadcast( 'update', {count: counter});
        });
        socket.on("reset", function (data){
            counter = 0;
            console.log("Counter: " + counter);
            io.emit('update_counter', {count: counter}); //io.emit does a full broadcast
        });    
    });
}