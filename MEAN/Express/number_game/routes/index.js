module.exports = function Route(app){
    app.get("/", function(request, response){
        if(!request.session.actual){
            request.session.actual = Math.floor(Math.random()*100)+1;
        }
        console.log(request.session.actual);
        response.render("index", {guess: request.session.guess, actual: request.session.actual});
    });
    
    app.post("/guess", function(request, response){
        request.session.guess = request.body.guess;
        response.redirect("/"); // increments the second time after the redirect
    });

    app.get("/reset", function(request, response){
        request.session.actual = Math.floor(Math.random()*100)+1;
        request.session.guess = undefined;
        response.redirect("/");
    });
}