import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IReview } from "./review.interface";
import { ReviewService } from "./review.service";

const addReview = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const review = req.body;
  
      const result = await ReviewService.addReview(review);
  
      sendResponse<IReview>(res, {
        success: true,
        statusCode: 200,
        message: 'Review added successfully',
        data: result,
      });
    }
  );
  const getAllReviews = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
       const { bookId } = req.params;
        const result = await ReviewService.getAllReviews(bookId);

      sendResponse<IReview[]>(res, {
        success: true,
        statusCode: 200,
        message: 'Reviews retrieved successfully',
        data: result,
      });
    }
  );

  export const ReviewController = {
    addReview,
    getAllReviews
  }