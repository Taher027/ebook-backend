import { IBook } from "./book.interface";
import Book from "./book.model";
import { IBookFilters } from "./book.interface"
import { bookSearchableFields } from "./book.constants";
import ApiError from "../../../errors/ApiError";
import { ObjectId } from "mongoose";


const addNewBook = async (payload: IBook): Promise<IBook | null> => {
  const result = await Book.create(payload);
  return result;
};
const getAllBooks = async ( filters: IBookFilters): Promise<IBook[] | null> => {

    const { searchTerm, genre, publicationDate } = filters
    const andConditions = [];

    if (searchTerm !== undefined) {
        andConditions.push({
          $or: bookSearchableFields.map(field => ({
            [field]: {
              $regex: searchTerm,
              $options: 'i',
            },
          })),
        });
      }

      if (genre != undefined || genre != null) {
        console.log("I am here: " + genre)
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

      const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereCondition).sort({ createdAt: -1 });
  return result;
};
const getSingleBook = async (payload: string): Promise<IBook | null> => {
  const result = await Book.findById(payload);
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {

  const bookInfo = await Book.findById(id);

  if(bookInfo?.addedBy.toString() !== payload.addedBy){
    throw new ApiError(401, "Unauthorized request");
  }

  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (id:string, userId:string): Promise<IBook | null> => {

  const bookInfo = await Book.findById(id);

  if(bookInfo?.addedBy.toString() !== userId){
    throw new ApiError(401, "Unauthorized request");
  }

  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  addNewBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
