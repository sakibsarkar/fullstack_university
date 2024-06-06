import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";
import { SemesterRegistrationService } from "./semesterRegistration.service";

export const createSemesterRegistration = catchAsyncError(async (req, res) => {
  const result =
    await SemesterRegistrationService.createSemesterRegistrationIntoDB(
      req.body
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration is created successfully!",
    data: result,
  });
});

export const getAllSemesterRegistrations = catchAsyncError(async (req, res) => {
  const result =
    await SemesterRegistrationService.getAllSemesterRegistrationsFromDB(
      req.query
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration is retrieved successfully !",
    data: result,
  });
});

export const getSingleSemesterRegistration = catchAsyncError(async (req, res) => {
  const { id } = req.params;

  const result =
    await SemesterRegistrationService.getSingleSemesterRegistrationsFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration is retrieved successfully",
    data: result,
  });
});

export const updateSemesterRegistration = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationService.updateSemesterRegistrationIntoDB(
      id,
      req.body
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration is updated successfully",
    data: result,
  });
});

export const deleteSemesterRegistration = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationService.deleteSemesterRegistrationFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Semester Registration is updated successfully",
    data: result,
  });
});

