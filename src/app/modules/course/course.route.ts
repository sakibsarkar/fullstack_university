import express from "express";
import { validSchema } from "../../middleweres/validator";

import {
  assignFacultiesWithCourse,
  createCourse,
  deleteCourse,
  getAllCourses,
  getSingleCourse,
  removeFacultiesFromCourse,
  updateCourse,
} from "./course.controller";
import {
  createCourseValidationSchema,
  facultiesWithCourseValidationSchema,
  updateCourseValidationSchema,
} from "./course.validation";

const router = express.Router();

router.post("/create", validSchema(createCourseValidationSchema), createCourse);

router.get("/:id", getSingleCourse);

router.patch("/:id", validSchema(updateCourseValidationSchema), updateCourse);

router.delete("/:id", deleteCourse);

router.put(
  "/:courseId/assign-faculties",
  validSchema(facultiesWithCourseValidationSchema),
  assignFacultiesWithCourse
);

router.delete(
  "/:courseId/remove-faculties",
  validSchema(facultiesWithCourseValidationSchema),
  removeFacultiesFromCourse
);

router.get("/", getAllCourses);

export default router;
