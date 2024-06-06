import { Request, Response } from 'express';

import { OfferedCourseServices } from './OfferedCourse.service';
import { catchAsyncError } from '../../../utils/catchAsyncError';
import sendResponse from '../../../utils/sendResponse';

export const createOfferedCourse = catchAsyncError(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Offered Course is created successfully !',
    data: result,
  });
});

export const getAllOfferedCourses = catchAsyncError(async (req: Request, res: Response) => {
  //   const result =
  //   sendResponse(res, {
  //     statusCode: 200,
  //     success: true,
  //     message: 'OfferedCourses retrieved successfully !',
  //     data: result,
  //   });
});

export const getSingleOfferedCourses = catchAsyncError(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    //   const result =
    //   sendResponse(res, {
    //     statusCode: 200,
    //     success: true,
    //     message: 'OfferedCourse fetched successfully',
    //     data: result,
    //   });
  },
);

export const updateOfferedCourse = catchAsyncError(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await OfferedCourseServices.updateOfferedCourseIntoDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'OfferedCourse updated successfully',
    data: result,
  });
});

export const deleteOfferedCourseFromDB = catchAsyncError(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.deleteOfferedCourseFromDB(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'OfferedCourse deleted successfully',
      data: result,
    });
  },
);


