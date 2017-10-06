const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: {type: String, minlength: 1, required: true},
    description: {type: String, default: "", required: true},
    completed: {type: Boolean, default: false, required: true}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});
mongoose.model('Task', TaskSchema);