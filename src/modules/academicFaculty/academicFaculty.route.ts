import express from "express";
import { validSchema } from "../../utils/validator";
import {
  createAcademicFacultyController,
  getFacultyByIdController,
  updateaAcademicFacultyByIdController,
} from "./academicFaculty.controller";
import {
  AcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
} from "./academicFaculty.validation";
const router = express.Router();
router.post(
  "/create",
  validSchema(AcademicFacultyValidationSchema),
  createAcademicFacultyController
);

router.get("/get/:facultyId", getFacultyByIdController);
router.patch(
  "/u/:facultyId",
  validSchema(updateAcademicFacultyValidationSchema),
  updateaAcademicFacultyByIdController
);
export default router;
