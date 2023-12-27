import  express  from "express";
import { BookController } from "./book.controller";
import validateRequest from "../../middleware/validateRequest";
import { BookValidation } from "./book.validation";
const router = express.Router();


router.post('/add-book',BookController.addNewBook);
router.get('/',BookController.getAllBooks);
router.get('/:id', BookController.getSingleBook);
router.patch(
    '/edit-book/:id',
    BookController.updateBook
  );

router.delete('/:id', BookController.deleteBook);


export const BookRoutes = router;