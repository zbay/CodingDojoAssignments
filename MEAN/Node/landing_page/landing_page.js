const http = require("http");
const fs = require("fs");
const server = http.createServer(function(request, response){
    if(request.url === "/"){
        fs.readFile("index.html", "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/ninjas"){
        fs.readFile("ninjas.html", "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/dojos/new"){
        fs.readFile("dojos.html", "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead(404);
        response.end("File not found!");
    }
});

server.listen(6789);