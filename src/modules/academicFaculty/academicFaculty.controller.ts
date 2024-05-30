import { catchAsyncError } from "../../utils/catchAsyncError";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyService } from "./academicFaculty.service";

const {
  createAcademicFacultyService,
  getSingleAcademicFcultyByIdService,
  updateAcademicFacultyByIdService,
  getAllAcademicFacultyService,
} = academicFacultyService;

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

export const getFacultyByIdController = catchAsyncError(
  async (req, res, next) => {
    const { facultyId } = req.params;
    const result = await getSingleAcademicFcultyByIdService(facultyId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Academic faculty is retrieved succesfully",
      data: result,
    });
  }
);

export const getAllFacunltyController = catchAsyncError(
  async (req, res, next) => {
    const result = await getAllAcademicFacultyService();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Academic faculties are retrieved successfully",
      data: result,
    });
  }
);

export const updateaAcademicFacultyByIdController = catchAsyncError(
  async (req, res, next) => {
    const { facultyId } = req.params;
    const result = await updateAcademicFacultyByIdService(facultyId, req.body);

    sendResponse(res, {
      statusCode: 20,
      success: true,
      message: "Academic faculty is updated succesfully",
      data: result,
    });
  }
);
