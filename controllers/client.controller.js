const Book = require("../models/Book.model");
const Review = require("../models/Review.model");
const Client = require("../models/Client.model");

const clientController = {
  getAllClient: async (req, res) => {
    const client = await Client.find({});
    res.json(client);
  },

  addClient: async (req, res) => {
    const { name } = req.body;
    await Client.create({ name });
    res.json("add client");
  },

  createReview: async (req, res) => {
    const book = await Book.findById(req.params.bookId);

    if (!book) {
      return res.json({ error: 'Book not found' });
    }

    const review = await Review.create({
      text: req.body.text,
      book: book._id,
    });
    

    res.json({ message: 'comment add' });
},


  blockClient: async (req, res) => {
    const { bookId } = req.params;
    const { userId } = req.params;
    await Client.findByIdAndUpdate(userId, {
      $pull:{
        rentedBooks: bookId
      },
      isBlocked: true
    }
    
    ),
    await Book.findByIdAndUpdate(bookId, {rentedBy: null});
    res.json("you blocked")
  },

}

module.exports = clientController;