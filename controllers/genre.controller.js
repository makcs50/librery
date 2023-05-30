const Genre = require('../models/Genre.model');

const genreController = {
getAllGenres: async (req, res) => {
    const genres = await Genre.find();
    res.json(genres);
},



createGenre: async (req, res) => {
    const { name } = req.body;
    await Genre.create({
      name
    })
    res.json("add genry")
},

deleteGenre: async (req, res) => {
  await Genre.findByIdAndDelete(req.params.id);
  res.json("delete genre")
},

updateGenre: async (req, res) => {
  const { name } = req.body;
  const Genre = await Genre.findByIdAndUpdate(req.params.id, { name })
  res.json(Genre);
}
}


module.exports = genreController;