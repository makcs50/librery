const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  name: { 
    type: String,
    required: true },
  isBlocked: { 
    type: Boolean,
    default: false },
  rentedBooks: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book' }],
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

