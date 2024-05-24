import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import studentValidationSchema from "../student/student.validation";
import userService from "./user.service";

export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    if (!body) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: "Invalid credentials",
        data: null,
      });
    }

    const { data, error, success } = studentValidationSchema.safeParse(body);
    if (!success) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: "Invalid credentials",
        data: null,
        error,
      });
    }

    const result = await userService.createStudentService(
      body.password || "",
      data
    );

    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
