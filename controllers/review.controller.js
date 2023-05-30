const Review = require('../models/Review.model');

const reviewController = {
getAllReview: async (req, res) => {
    const review = await Review.find();
    res.json(review);
},



createReview: async (req, res) => {
    const { book, client, text } = req.body;
    await Review.create({
      book,
      client,
      text
    })
    res.json("add review")
},

deleteReview: async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json("delete review")
},
}


module.exports = reviewController;