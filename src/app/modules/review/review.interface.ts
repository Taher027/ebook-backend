import { Model, Types } from "mongoose";

export type IReview = {
    user: {
        username: string,
        avatar: string,
    },
    bookId: Types.ObjectId
    message: string
}

export type ReviewModel = Model<IReview, Record<string, unknown>>