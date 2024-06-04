import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";

import { AcademicDepartmentServices } from "./academicDepartment.service";

export const createAcademicDepartmemt = catchAsyncError(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic department is created succesfully",
    data: result,
  });
});

export const getAllAcademicDepartments = catchAsyncError(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic departments are retrieved successfully",
    data: result,
  });
});

export const getSingleAcademicDepartment = catchAsyncError(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      departmentId
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic department is retrieved succesfully",
    data: result,
  });
});

export const updateAcademicDeartment = catchAsyncError(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      req.body
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic department is updated succesfully",
    data: result,
  });
});
