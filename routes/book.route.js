const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');


router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.createBook);
router.patch('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);
router.patch('/books/rent/:bookId/user/:userId', bookController.rentBook);
router.patch('/books/return/:bookId/user/:userId', bookController.returnBook);


module.exports = router;