import { catchAsyncError } from "../../utils/catchAsyncError";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyService } from "./academicFaculty.service";

const { createAcademicFacultyService } = academicFacultyService;

export const createAcademicFacultyController = catchAsyncError(
  async (req, res, next) => {
    const { body } = req;
    const result = await createAcademicFacultyService(body);
    sendResponse(res, {
      success: true,
      message: "Academic faculty created successfully",
      data: result,
    });
  }
);
