import { IReview } from "./review.interface";
import Review from "./review.model";


const addReview = async (payload: IReview): Promise<IReview | null> => {
    const result = await Review.create(payload);
    return result;
  };

  const getAllReviews = async (bookId:string): Promise<IReview[] | null> => {
    const result = await Review.find({ bookId }).sort({ createdAt: -1 });
    return result;
  };

export const ReviewService = {
    addReview,
    getAllReviews
}