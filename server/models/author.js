const mongoose = require('mongoose');

// SCHEMA SETUP
const authorSchema = new mongoose.Schema({
  fbid: String,
  displayName: String,
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
