const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    username: {type: String, 
        required: [true, "A username is required!"],
        unique: [true, "A username must be unique!"]
    },
    score: {type: Number,
        required: [true, "A score is required!"],
        default: 0
    },
    avatarURL: {type: String,
        required: [true, "Avatar URLs are required!"],
        default: ""
    }
});

mongoose.model('Player', PlayerSchema);