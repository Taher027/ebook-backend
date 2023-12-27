import { Request, Response } from 'express';
import { bookFilterableFields } from './book.constants';
import catchAsync from '../../../shared/catchAsync';
import { BookService } from './book.service';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import pick from '../../../shared/pick';
import httpStatus from 'http-status';

const addNewBook = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const user = req.body;

    const result = await BookService.addNewBook(user);

    sendResponse<IBook>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book created successfully',
      data: result,
    });
  }
);
const getAllBooks = catchAsync(
  async (req: Request, res: Response): Promise<void> => {

    const filters = pick(req.query, bookFilterableFields);

    const result = await BookService.getAllBooks(filters);
   
    sendResponse<IBook[]>(res, {
      success: true,
      statusCode: 200,
      message: 'Books retrieved successfully',
      data: result,
    });
  }
);
const getSingleBook = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const result = await BookService.getSingleBook(id);

    sendResponse<IBook>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book retrieved successfully',
      data: result,
    });
  }
);

const updateBook = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const { id } = req.params;

    const result = await BookService.updateBook(id, data);

    sendResponse<IBook>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book updated successfully',
      data: result,
    });
  }
);

const deleteBook = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    
    const { userId } = req.query
    console.log('id:',id, 'userId from query',userId);

    const result = await BookService.deleteBook(id, userId as string);
    console.log(result,'controller');

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book deleted successfully',
      data: result,
    });
  }
);

export const BookController = {
  addNewBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
