import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

// create book
router.post(
  '/add-book',
 BookController.addNewBook
);

// get single book
router.get('/:id', BookController.getSingleBook);

// update book
router.patch(
  '/edit-book/:id',
  BookController.updateBook
);

// delete book
router.delete('/:id', BookController.deleteBook);

// get all book data
router.get('/', BookController.getAllBooks);

export const BookRoutes = router;
