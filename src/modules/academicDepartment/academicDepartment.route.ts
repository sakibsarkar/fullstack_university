import express from "express";
import { validSchema } from "../../utils/validator";
import {
  createAcademicDepartmemt,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDeartment,
} from "./academicDepartment.controller";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";

const router = express.Router();

const {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
} = AcademicDepartmentValidation;
router.post(
  "/create",
  validSchema(createAcademicDepartmentValidationSchema),
  createAcademicDepartmemt
);

router.get("/get", getAllAcademicDepartments);
router.get("/get/:departmentId", getSingleAcademicDepartment);

router.patch(
  "/u/:departmentId",
  validSchema(updateAcademicDepartmentValidationSchema),
  updateAcademicDeartment
);

export default router;
