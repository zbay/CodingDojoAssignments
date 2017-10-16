const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    content: {type: String, 
        minlength: [1, "A blank comment will not be saved!"],
        required: [true, "A blank comment will not be saved!"]
    },
}, {timestamps: {createdAt: 'created_at'}});

mongoose.model('Note', NoteSchema);