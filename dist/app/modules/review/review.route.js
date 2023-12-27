"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("./review.controller");
const router = express_1.default.Router();
// create book
router.post('/add-new', review_controller_1.ReviewController.addReview);
// get all reviews
router.get('/:bookId', review_controller_1.ReviewController.getAllReviews);
exports.ReviewRoutes = router;
