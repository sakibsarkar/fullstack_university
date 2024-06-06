import express from "express";
import {
  createAcademicDepartmemt,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDeartment,
} from "./academicDepartment.controller";
import { createAcademicDepartmentValidationSchema } from "./academicDepartment.validation";
import { validSchema } from "../../middleweres/validator";

const router = express.Router();

router.post(
  "/create",
  validSchema(createAcademicDepartmentValidationSchema),
  createAcademicDepartmemt
);

router.get("/get", getAllAcademicDepartments);
router.get("/get/:departmentId", getSingleAcademicDepartment);

router.patch(
  "/u/:departmentId",
  validSchema(createAcademicDepartmentValidationSchema.partial()),
  updateAcademicDeartment
);

export default router;
