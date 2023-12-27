import { Model, Types } from 'mongoose';
import { IBook } from '../book/book.interface';


export type IUser = {
  email: string;
  userId: string;
  username: string;
  wishlist: Array<Types.ObjectId | IBook>;
  readingList: Array<Types.ObjectId | IBook>;
  finished: Array<Types.ObjectId | IBook>;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
