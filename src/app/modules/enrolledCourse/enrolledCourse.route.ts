import express from "express";

import auth from "../../middleweres/auth";
import { validSchema } from "../../middleweres/validator";
import { EnrolledCourseControllers } from "./enrolledCourse.controller";
import { EnrolledCourseValidations } from "./enrolledCourse.validaton";

const router = express.Router();

router.post(
  "/create-enrolled-course",
  auth("student"),
  validSchema(
    EnrolledCourseValidations.createEnrolledCourseValidationZodSchema
  ),
  EnrolledCourseControllers.createEnrolledCourse
);

router.patch(
  "/update-enrolled-course-marks",
  auth("faculty"),
  validSchema(
    EnrolledCourseValidations.updateEnrolledCourseMarksValidationZodSchema
  ),
  EnrolledCourseControllers.updateEnrolledCourseMarks
);

export const EnrolledCourseRoutes = router;
