import express from "express";
import { validSchema } from "../../middleweres/validator";
import {
  createAcademicSemesterController,
  getAcademicSemesterController,
  getSingleAcamdemicSemesterController,
} from "./academicSemester.controller";
import { createAcdemicSemesterValidationSchema } from "./academicSemester.validaion";
const router = express.Router();

// geta all academic semester
router.get("/get/g/all", getAcademicSemesterController);
// geta _id based single academic semester
router.get("/get/:id", getSingleAcamdemicSemesterController);
// create new academic semster
router.post(
  "/create",
  validSchema(createAcdemicSemesterValidationSchema),
  createAcademicSemesterController
);
// update single academic semester
router.put("/update/:id");

export default router;
