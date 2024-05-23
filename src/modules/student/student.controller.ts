import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import studentService from "./student.service";

export const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentService.getAllStudentService();
    sendResponse(res, {
      success: true,
      message: "Successfully get all student data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getsingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentId = req.params;
    sendResponse(res, {
      success: true,
      message: `Successfuly find data for studentId ${studentId} `,
      data: "result",
    });
  } catch (error) {}
};
