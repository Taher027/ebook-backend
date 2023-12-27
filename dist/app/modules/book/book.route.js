"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
// create book
router.post('/add-book', book_controller_1.BookController.addNewBook);
// get single book
router.get('/:id', book_controller_1.BookController.getSingleBook);
// update book
router.patch('/edit-book/:id', book_controller_1.BookController.updateBook);
// delete book
router.delete('/:id', book_controller_1.BookController.deleteBook);
// get all book data
router.get('/', book_controller_1.BookController.getAllBooks);
exports.BookRoutes = router;
