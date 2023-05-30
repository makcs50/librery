const express = require('express');
const router = express.Router();

const genreController = require('../controllers/review.controller');


router.get('/review', genreController.getAllReview);
router.post('/review', genreController.createReview);
router.delete('/review/:id', genreController.deleteReview);


module.exports = router;