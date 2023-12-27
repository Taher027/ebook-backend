import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

const createUser = catchAsync(
    async (req: Request, res: Response) => {
      const user = req.body;
      const result = await UserService.createUser(user);
  
      sendResponse<IUser>(res, {
        success: true,
        statusCode: 200,
        message: "Users created successfully",
        data: result,
      });
    }
);
const getSingleUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const result = await UserService.getSingleUser(id);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User retrieved successfully",
      data: result,
    });
  }
);

  export const UserController = {
    createUser,
    getSingleUser
  }