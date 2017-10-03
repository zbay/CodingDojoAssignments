const http = require("http");
const fs = require("fs");
const server = http.createServer(function(request, response){
    if(request.url === "/cars"){
        fs.readFile("./views/cars.html", "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/cats"){
        fs.readFile("./views/cats.html", "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/cars/new"){
        fs.readFile("./views/new_car.html", "utf8", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/cat.jpg"){
        fs.readFile("./images/cat.jpg", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/car.jpg"){
        fs.readFile("./images/car.jpg", function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead(404);
        response.end("File not found!");
    }
});

server.listen(7077);