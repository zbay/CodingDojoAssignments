const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {type: String, 
        minlength: [2, "A name of two or more characters is required!"],
        required: [true, "A name is required!"]
    },
    position: {type: String},
    statuses: {type: [String],
        required: [true, "Statuses are required!"],
        default: ["Undecided", "Undecided", "Undecided"]
    }
});

mongoose.model('Player', PlayerSchema);