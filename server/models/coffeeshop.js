const mongoose = require('mongoose');

// SCHEMA SETUP
const coffeeshopSchema = new mongoose.Schema({
  name: String,
  image: String,
  author: String,
  description: String,
  pros: String,
  cons: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Coffeeshop = mongoose.model('Coffeeshop', coffeeshopSchema);

module.exports = Coffeeshop;
