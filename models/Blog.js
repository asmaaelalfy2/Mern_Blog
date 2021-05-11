const mongoose = require('mongoose');
const _ = require('lodash');

const BlogSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      required: false,
    },
  },
 
);

module.exports = mongoose.model('Blog', BlogSchema);
