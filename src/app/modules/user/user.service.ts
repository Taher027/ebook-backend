import { IUser } from "./user.interface";
import User from "./user.model";

const createUser = async (payload: IUser): Promise<IUser | null> => {
    const result = await User.create(payload);
    console.log(result)
    return result;
  };
  const getAllUsers = async (): Promise<IUser[] | null> => {
    const result = await User.find();
    return result;
  };
  const getSingleUser = async (payload: string) => {
    const result = await User.findOne({userId: payload});
    return result;
  };

  const getUserWishlist = async (payload: string) => {
    const result = await User.findOne({userId: payload},{wishlist: 1}).populate('wishlist');
    return result;
  };
  const getUserReadingList = async (payload: string) => {
    const result = await User.findOne({userId: payload},{readingList:1}).populate('readingList');
    return result;
  };
  export const UserService = {
    createUser,
    getAllUsers,
    getSingleUser,
    getUserWishlist,
    getUserReadingList
  }