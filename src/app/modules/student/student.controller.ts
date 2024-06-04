import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";
import studentService from "./student.service";

export const getAllStudent = catchAsyncError(async (req, res) => {
  const query = req.query;
  const result = await studentService.getAllStudentService(query);
  sendResponse(res, {
    success: true,
    message: "Successfully get all student data",
    data: result,
  });
});

export const getsingleStudentController = catchAsyncError(async (req, res) => {
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
});
export const deleteSingleStudentController = catchAsyncError(
  async (req, res) => {
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
  }
);

export const updateSingleStudentController = catchAsyncError(
  async (req, res, next) => {
    const { body } = req;
    const { name, guardian, localGuardian, ...rest } = body;
    const updateData: { [key: string]: any } = { ...rest };
    const studentId = req.params.studentId;

    if (name && Object.keys(name).length) {
      for (const [key, value] of Object.entries(name)) {
        updateData[`name.${key}`] = value;
      }
    }
    if (guardian && Object.keys(guardian).length) {
      for (const [key, value] of Object.entries(guardian)) {
        updateData[`guardian.${key}`] = value;
      }
    }
    if (localGuardian && Object.keys(localGuardian).length) {
      for (const [key, value] of Object.entries(localGuardian)) {
        updateData[`localGuardian.${key}`] = value;
      }
    }
    console.log(updateData);

    const result = await studentService.updateSingleStudentService(
      studentId,
      updateData
    );

    sendResponse(res, {
      success: true,
      message: "Student updated successfull",
      data: result,
      statusCode: 200,
    });
  }
);
