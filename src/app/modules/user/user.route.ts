import express from "express";
import { upload } from "../../../utils/uploadImg";
import auth from "../../middleweres/auth";
import { jsonParser } from "../../middleweres/jsonParser";
import { validSchema } from "../../middleweres/validator";
import { createAdminValidationSchema } from "../admin/admin.validation";
import { createFacultyValidationSchema } from "../faculty/faculty.validation";
import studentValidationSchema from "../student/student.validation";
import { createAdmin, createFaculty, createStudent } from "./user.controller";
const router = express.Router();

router.post(
  "/create/student",
  upload.single("file"),
  jsonParser,
  validSchema(studentValidationSchema),
  createStudent
);

router.post(
  "/create/admin",
  upload.single("file"),
  jsonParser,
  validSchema(createAdminValidationSchema),
  createAdmin
);

router.post(
  "/create/faclty",
  upload.single("file"),
  jsonParser,
  validSchema(createFacultyValidationSchema),
  createFaculty
);

router.post("/change/status/id", auth("admin"));

export default router;
