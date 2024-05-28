import express from "express";
import { validSchema } from "../../utils/validator";
import { createAcademicFacultyController } from "./academicFaculty.controller";
import { AcademicFacultyValidationSchema } from "./academicFaculty.validation";
const router = express.Router();
router.post(
  "/create",
  validSchema(AcademicFacultyValidationSchema),
  createAcademicFacultyController
);
export default router;
