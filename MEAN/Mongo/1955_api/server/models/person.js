const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name: {type: String, minlength: 1}
});
mongoose.model('Person', PersonSchema);