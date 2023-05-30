const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, 
  ref: 'Book'},
  client: { type: mongoose.Schema.Types.ObjectId, 
  ref: 'Client'},
  text: { type: String }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
