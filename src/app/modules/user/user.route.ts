import express from "express";
import { validSchema } from "../../../utils/validator";
import { createAdminValidationSchema } from "../admin/admin.validation";
import { createFacultyValidationSchema } from "../faculty/faculty.validation";
import studentValidationSchema from "../student/student.validation";
import { createAdmin, createFaculty, createStudent } from "./user.controller";
const router = express.Router();

router.post(
  "/create/student",
  validSchema(studentValidationSchema),
  createStudent
);

router.post(
  "/create/admin",
  validSchema(createAdminValidationSchema),
  createAdmin
);

router.post(
  "/create/faclty",
  validSchema(createFacultyValidationSchema),
  createFaculty
);

export default router;
