import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
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
   wishlist:  [{ type: Schema.Types.ObjectId, ref: 'Book' }],
   readingList: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
   finished: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
  {
    timestamps: true,
  }
);

const User = model<IUser, UserModel>('User', userSchema);

export default User;
