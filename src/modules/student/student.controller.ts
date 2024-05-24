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

export const getsingleStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentService(studentId);
    if (result) {
      return sendResponse(res, {
        success: true,
        message: `Successfuly find data for studentId ${studentId} `,
        data: result,
      });
    }

    sendResponse(res, {
      success: false,
      message: `no student data found for student id ${studentId}`,
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSingleStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.deleteSingleStudentService(studentId);

    if (result.modifiedCount) {
      return sendResponse(res, {
        success: true,
        message: `${studentId} student Deleted successfull`,
        data: result,
      });
    }
    if (result.matchedCount) {
      return sendResponse(res, {
        success: false,
        message: `${studentId} student is already deleted`,
        data: result,
      });
    }
    sendResponse(res, {
      success: false,
      message: `${studentId} student not found`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
