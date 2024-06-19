import { Request, Response } from "express";
import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";
import userService from "./user.service";

const {
  createStudentService,
  createAdminService,
  createFacaltyService,
  changeStatusService,
} = userService;
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

export const createAdmin = catchAsyncError(async (req, res) => {
  const { password, ...adminData } = req.body;

  const result = await createAdminService(password, adminData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Admin is created succesfully",
    data: result,
  });
});

export const createFaculty = catchAsyncError(async (req, res) => {
  const { body } = req;

  const result = await createFacaltyService(body.password, body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculty is created succesfully",
    data: result,
  });
});

export const changeStatus = catchAsyncError(async (req, res) => {
  const id = req.params.id;

  const result = await changeStatusService(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Status is updated succesfully",
    data: result,
  });
});
