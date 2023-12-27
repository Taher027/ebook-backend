import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
   author: {
    type: String,
    required: true
   },
   description: {
    type: String,
    required: true
   },
   genre: {
    type: String,
    required: true
   },
   publicationDate: {
    type: String,
    required: true
   },
   addedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
  },
  {
    timestamps: true,
  }
);

const Book = model<IBook, BookModel>('Book', bookSchema);

export default Book;
