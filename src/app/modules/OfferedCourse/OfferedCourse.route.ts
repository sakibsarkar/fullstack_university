import express from "express";
import { validBodySchema } from "../../middleweres/validator";
import {
  createOfferedCourse,
  deleteOfferedCourseFromDB,
  getAllOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourse,
} from "./OfferedCourse.controller";
import {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
} from "./OfferedCourse.validation";

const router = express.Router();

router.get("/", getAllOfferedCourses);

router.get("/:id", getSingleOfferedCourses);

router.post(
  "/create-offered-course",
  validBodySchema(createOfferedCourseValidationSchema),
  createOfferedCourse
);

router.patch(
  "/:id",
  validBodySchema(updateOfferedCourseValidationSchema),
  updateOfferedCourse
);

router.delete("/:id", deleteOfferedCourseFromDB);

export default router;
