const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
  name: { type: String },
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
