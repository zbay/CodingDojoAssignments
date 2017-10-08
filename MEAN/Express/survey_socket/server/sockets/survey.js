module.exports = function(io){
    io.sockets.on('connection', function (socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        socket.on("form_submit", function(data){
            let dataObj = {};
            let luckyNum = Math.floor(Math.random()*1000) + 1;
            for(let i = 0; i < data.data.length; i++){
                dataObj[data.data[i].name] = data.data[i].value;
            }
            socket.emit('server_response', {formData: dataObj, luckyNumber: luckyNum});
        });
        /*socket.on( "button_clicked", function (data){
            console.log('Someone clicked a button!  Reason: '  + data.reason);
            socket.emit( 'server_response', {response:  "sockets are the best!"});
        })*/
    });
}