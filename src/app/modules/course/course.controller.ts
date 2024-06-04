import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";
import { CourseServices } from "./course.service";

const createCourse = catchAsyncError(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course is created succesfully",
    data: result,
  });
});

const getAllCourses = catchAsyncError(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course are retrieved successfully",
    data: result,
  });
});

const getSingleCourse = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course is retrieved succesfully",
    data: result,
  });
});

const updateCourse = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.updateCourseIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "course is updated succesfully",
    data: result,
  });
});

const deleteCourse = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCourseFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course is deleted succesfully",
    data: result,
  });
});

const assignFacultiesWithCourse = catchAsyncError(async (req, res) => {
  const { courseId } = req.params;
  const faculties  = req.body;

  const result = await CourseServices.assignFacultiesWithCourseIntoDB(
    courseId,
    faculties
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculties assigned  succesfully",
    data: result,
  });
});

const removeFacultiesFromCourse = catchAsyncError(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;

  const result = await CourseServices.removeFacultiesFromCourseFromDB(
    courseId,
    faculties
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Faculties removed  succesfully",
    data: result,
  });
});

export const CourseControllers = {
  createCourse,
  getSingleCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  assignFacultiesWithCourse,
  removeFacultiesFromCourse,
};
