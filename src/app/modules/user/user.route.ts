import express from "express";
import { validSchema } from "../../middleweres/validator";
import { createAdminValidationSchema } from "../admin/admin.validation";
import { createFacultyValidationSchema } from "../faculty/faculty.validation";
import studentValidationSchema from "../student/student.validation";
import { createAdmin, createFaculty, createStudent } from "./user.controller";
import auth from "../../middleweres/auth";
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

router.post("/change/status/id",auth("admin"))

export default router;
