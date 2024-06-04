import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";
import { academicService } from "./academicSemester.service";
import { isValidSemesterCode } from "./academicSemester.utils";

const {
  createAcademicSemesterService,
  getSingleAcamdemicSemesterService,
  getAllAcademicSemesterService,
  updateSingleAcademicSemesterService,
} = academicService;

export const createAcademicSemesterController = catchAsyncError(
  async (req, res, nex) => {
    const data = req.body;

    // validate semester code
    const isvalidCode = isValidSemesterCode(data.name, data.code);
    if (isvalidCode) {
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

export const getSingleAcamdemicSemesterController = catchAsyncError(
  async (req, res, next) => {
    const { id } = req.params;
    const result = await getSingleAcamdemicSemesterService(id);
    if (result) {
      return sendResponse(res, {
        success: true,
        message: `successfully find academic semester for ${id}`,
        data: result,
        statusCode: 200,
      });
    }

    sendResponse(res, {
      success: false,
      message: `No academic semester found for ${id}`,
      data: null,
      statusCode: 200,
    });
  }
);

export const getAcademicSemesterController = catchAsyncError(
  async (req, res, next) => {
    const result = await getAllAcademicSemesterService();
    sendResponse(res, {
      success: true,
      message: "Successfuly get all academic service",
      data: result,
      statusCode: 200,
    });
  }
);

export const updateSingleAcamdemicSemesterController = catchAsyncError(
  async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    const noCode = body.name && !body.code;
    const noName = !body.name && body.code;
    if (noCode) {
      return sendResponse(res, {
        success: false,
        message:
          "You must have to send semester code to update the semester name",
        data: null,
        statusCode: 400,
      });
    }
    if (noName) {
      return sendResponse(res, {
        success: false,
        message:
          "You must have to send semester name to update the semester Code",
        data: null,
        statusCode: 400,
      });
    }

    const isvalidCode = isValidSemesterCode(body.name, body.code);

    if (!isvalidCode) {
      return sendResponse(res, {
        success: false,
        message: "invalid semester code",
        data: null,
        statusCode: 400,
      });
    }
    const result = await updateSingleAcademicSemesterService(id, body);
  }
);
