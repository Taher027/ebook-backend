import { IReview } from "./review.interface";
import Review from "./review.model";


const addReview = async (payload: IReview): Promise<IReview | null> => {
    const result = await Review.create(payload);
    return result;
  };
