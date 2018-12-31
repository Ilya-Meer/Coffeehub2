const mongoose = require('mongoose');

// SCHEMA SETUP
const commentSchema = new mongoose.Schema({
  text: String,
  coffeeshopID: String,
  author: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment; 