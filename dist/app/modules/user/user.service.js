"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(payload);
    console.log(result);
    return result;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find();
    return result;
});
const getSingleUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne({ userId: payload });
    return result;
});
const getUserWishlist = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne({ userId: payload }, { wishlist: 1 }).populate('wishlist');
    return result;
});
const getUserReadingList = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne({ userId: payload }, { readingList: 1 }).populate('readingList');
    return result;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findByIdAndDelete(payload);
    return result;
});
exports.UserService = {
    createUser,
    getAllUsers,
    getSingleUser,
    getUserWishlist,
    getUserReadingList,
    updateUser,
    deleteUser
};
