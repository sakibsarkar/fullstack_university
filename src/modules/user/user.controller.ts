import { Request, Response } from "express";
import { catchAsyncError } from "../../utils/catchAsyncError";
import sendResponse from "../../utils/sendResponse";
import userService from "./user.service";

const { createStudentService } = userService;
export const createStudent = catchAsyncError(
  async (req: Request, res: Response) => {
    const body = req.body;

    if (!body) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: "Invalid credentials",
        data: null,
      });
    }

    const result = await createStudentService(body.password || "", req.body);

    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  }
);
