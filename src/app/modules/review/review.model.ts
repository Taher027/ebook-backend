import { Schema, model } from "mongoose";
import { IReview, ReviewModel } from "./review.interface";

const reviewSchema = new Schema<IReview>({
    user: {
        username: { type: String, required: true},
        avatar: { type: String, required: true},
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
      },
    message: { type: String, required: true}
},{
    timestamps: true
})

const Review = model<IReview, ReviewModel>("Review", reviewSchema);

export default Review;