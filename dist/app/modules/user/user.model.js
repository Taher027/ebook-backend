"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    wishlist: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Book' }],
    readingList: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Book' }],
    finished: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Book' }],
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
