module.exports = function Models(mongoose){
    var QuoteSchema = new mongoose.Schema({
        name: String,
        quote: String
    });
    mongoose.model('Quote', QuoteSchema);
}