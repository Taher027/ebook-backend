import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { IBook } from "./book.interface";
import { BookService } from "./book.service";
import httpStatus from "http-status";
import pick from "../../shared/pick";
import { bookFilterableFields } from "./book.constant";

const addNewBook = catchAsync(async(req:Request, res:Response)=>{
    const book = req.body;
    const result = await BookService.addNewBook(book);
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:'Book Created successfully',
        data:result,
    })
})
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
        statusCode: 200,
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
        statusCode: 200,
        message: 'Book updated successfully',
        data: result,
      });
    }
);
const deleteBook = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const { userId } = req.query
  
      const result = await BookService.deleteBook(id, userId as string);
  
      sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Book deleted successfully',
        data: "result",
      });
    }
  );

  export const BookController = {
    addNewBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
  }