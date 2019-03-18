const mongoose = require('mongoose');

// SCHEMA SETUP
const commentSchema = new mongoose.Schema({
  text: String,
  coffeeshopID: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
