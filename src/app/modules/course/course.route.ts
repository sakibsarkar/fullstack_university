import express from "express";
import { validSchema } from "../../../utils/validator";
import { CourseControllers } from "./course.controller";
import { CourseValidations } from "./course.validation";

const router = express.Router();

router.post(
  "/create-course",
  validSchema(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse
);

router.get("/:id", CourseControllers.getSingleCourse);

router.patch(
  "/:id",
  validSchema(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse
);

router.delete("/:id", CourseControllers.deleteCourse);

router.put(
  "/:courseId/assign-faculties",
  validSchema(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse
);

router.delete(
  "/:courseId/remove-faculties",
  validSchema(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesFromCourse
);

router.get("/", CourseControllers.getAllCourses);

export default router;
