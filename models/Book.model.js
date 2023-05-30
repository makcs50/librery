const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String },
  genre: { type: mongoose.Schema.Types.ObjectId,
  ref: 'Genre'},
  rentedBy: { type: mongoose.Schema.Types.ObjectId, 
  ref: 'Client',
  default: null
}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;