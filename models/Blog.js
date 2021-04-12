const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
   title: {
        type: String,
        required: true
    },
   body: {
        type: String,
        required: true
    },
    
    tags: {
        type: [String],
        required: false
    },
   Date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Blog', BlogSchema);