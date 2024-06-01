import { catchAsyncError } from "../../utils/catchAsyncError";
import sendResponse from "../../utils/sendResponse";
import { FacultyServices } from "./faculty.service";

const {
  deleteFacultyFromDB,
  getAllFacultiesFromDB,
  getSingleFacultyFromDB,
  updateFacultyIntoDB,
} = FacultyServices;

const getSingleFaculty = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleFacultyFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculty is retrieved succesfully",
    data: result,
  });
});

const getAllFaculties = catchAsyncError(async (req, res) => {
  const result = await getAllFacultiesFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculties are retrieved succesfully",
    data: result,
  });
});

const updateFaculty = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const { faculty } = req.body;
  const result = await updateFacultyIntoDB(id, faculty);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculty is updated succesfully",
    data: result,
  });
});

const deleteFaculty = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const result = await deleteFacultyFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculty is deleted succesfully",
    data: result,
  });
});

export const FacultyControllers = {
  getAllFaculties,
  getSingleFaculty,
  deleteFaculty,
  updateFaculty,
};
