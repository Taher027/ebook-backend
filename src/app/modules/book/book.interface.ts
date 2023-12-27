import { Model, Types } from "mongoose";

export type IBook = {
    title: string;
    thumbnail: string;
    author: string;
    genre: string;
    description: string;
    publicationDate: string;
    addedBy: Types.ObjectId
}

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
    searchTerm?: string;
    genre?: string;
    publicationDate?: string;
  };