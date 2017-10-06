const mongoose = require('mongoose');
const PigeonSchema = new mongoose.Schema({
    name: {type: String, minlength: 1},
    weight: {type: Number, min: 0.1}
}, {timestamps: true});
mongoose.model('Pigeon', PigeonSchema);