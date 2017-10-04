module.exports = function Route(app){
    app.get("/", function(request, response){
        response.render("index", {name: "", quote: ""});
    });
    
    app.post("/quotes", function(request, response){
        var newQuote = new Quote();
        newQuote.name = request.body.name;
        newQuote.quote = request.body.quote;
        newQuote.save(function(err){
            if(err){
                response.render("index", {name: request.body.name, quote: request.body.quote, errors: newQuote.errors});
            }
            else{
                response.redirect("/quotes");
            }
        }); 
    });

    app.get("/quotes", function(request, response){
        var error = undefined;
        Quote.find({}, function(err, quotes){
            if(err){
                error = "Could not load quotes from database!"
            }
            response.render("quotes", {quotes: quotes, error: error});
        });
    });
}