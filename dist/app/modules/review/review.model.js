"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    user: {
        username: { type: String, required: true },
        avatar: { type: String, required: true },
    },
    bookId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    message: { type: String, required: true }
}, {
    timestamps: true
});
const Review = (0, mongoose_1.model)("Review", reviewSchema);
exports.default = Review;
