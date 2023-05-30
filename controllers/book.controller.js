const Book = require('../models/Book.model');

const bookController = {
    getAllBooks: async (req, res) => {
        const books = await Book.find({})
        res.json(books)
      },
      
      createBook: async (req, res) => {
        const { title, genre, rentedBy } = req.body;
        await Book.create({
          title,
          genre,
          rentedBy
        })
        res.json("книга добавлена")
      },
      
      deleteBook: async (req, res) => {
        await Book.findByIdAndDelete(req.params.id);
        res.json("delete book")
      },
      
      updateBook: async (req, res) => {
        const { title, genry } = req.body;
        const book = await Book.findByIdAndUpdate(req.params.id, { title, genry })
        res.json(book);
      },

      rentBook: async (req, res) => {
        const { bookId } = req.params;
        const { userId } = req.params;
        const book = await Book.findById(bookId);
        const user = await Client.findById(userId);
      
        if (book.rentedBy){
          return res.json("уже в аренде")
        }
      
        if (user.isBlocked) {
          return res.json("вы заблокированы")
        }
      
        if (user.rentedBooks.length >= 3){
          return res.json("нельзя арендовать более 3-х дел")
        }
      
        await Book.findByIdAndUpdate(bookId, {rentedBy});
        await Client.findByIdAndUpdate(userId, {$push: {rentedBooks: bookId}});
        res.json("книга арендована")
      },

      returnBook: async (req, res) => {
        const { bookId } = req.params;
        const { userId } = req.params;
        await Book.findByIdAndUpdate(bookId, {rentedBy: null});
        await Client.findByIdAndUpdate(userId, {$pull: {rentedBooks: bookId}});
        res.json("return book")
      }
}

module.exports = bookController;