"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = require("./user.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// update user
router.patch('/:id', user_controller_1.UserController.updateUser);
// delete user
router.delete('/:id', user_controller_1.UserController.deleteUser);
router.get('/:id/wishlist', user_controller_1.UserController.getUserWishlist);
router.get('/:id/readinglist', user_controller_1.UserController.getUserReadingList);
router.get('/', user_controller_1.UserController.getAllUsers);
exports.UserRoutes = router;
