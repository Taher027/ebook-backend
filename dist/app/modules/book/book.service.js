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
exports.BookService = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const book_constants_1 = require("./book.constants");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const addNewBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.create(payload);
    return result;
});
const getAllBooks = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, genre, publicationDate } = filters;
    const andConditions = [];
    if (searchTerm !== undefined) {
        andConditions.push({
            $or: book_constants_1.bookSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (genre != undefined || genre != null) {
        console.log("I am here: " + genre);
        andConditions.push({
            genre: {
                $eq: genre,
            },
        });
    }
    if (publicationDate !== undefined && genre !== null) {
        andConditions.push({
            publicationDate: {
                $regex: publicationDate.toString(),
            },
        });
    }
    const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield book_model_1.default.find(whereCondition).sort({ createdAt: -1 });
    return result;
});
const getSingleBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.default.findById(payload);
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bookInfo = yield book_model_1.default.findById(id);
    if ((bookInfo === null || bookInfo === void 0 ? void 0 : bookInfo.addedBy.toString()) !== payload.addedBy) {
        throw new ApiError_1.default(401, "Unauthorized Access");
    }
    const result = yield book_model_1.default.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteBook = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const bookInfo = yield book_model_1.default.findById(id);
    console.log(bookInfo);
    if ((bookInfo === null || bookInfo === void 0 ? void 0 : bookInfo.addedBy.toString()) !== userId) {
        throw new ApiError_1.default(401, "Unauthorized Access");
    }
    const result = yield book_model_1.default.findByIdAndDelete(id);
    console.log(result, 'from bookservice reulst');
    return result;
});
exports.BookService = {
    addNewBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
