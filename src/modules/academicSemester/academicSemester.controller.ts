import { catchAsyncError } from "../../utils/catchAsyncError";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { academicService } from "./academicSemester.service";

const { createAcademicSemesterService } = academicService;

export const createAcademicSemesterController = catchAsyncError(
  async (req, res, nex) => {
    const data = req.body;

    // validate semester code
    const semester = academicSemesterNameCodeMapper;
    if (semester[data.name] !== data.code) {
      return sendResponse(res, {
        success: true,
        message: "Invalid semester code",
        data: null,
        statusCode: 400,
      });
    }
    const result = await createAcademicSemesterService(data);
    sendResponse(res, {
      success: true,
      message: "successfully create academic semester",
      data: result,
      statusCode: 200,
    });
  }
);
