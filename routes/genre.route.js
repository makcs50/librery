const express = require('express');
const router = express.Router();

const genreController = require('../controllers/genre.controller');


router.get('/genres', genreController.getAllGenres);
router.post('/genres', genreController.createGenre);
router.patch('/genres/:id', genreController.updateGenre);
router.delete('/genres/:id', genreController.deleteGenre);


module.exports = router;