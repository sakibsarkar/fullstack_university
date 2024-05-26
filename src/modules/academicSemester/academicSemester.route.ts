import express from "express";
import { createAcademicSemesterController } from "./academicSemester.controller";
import { AcademicSemesterValidations } from "./academicSemester.validaion";
const router = express.Router();
const { createAcdemicSemesterValidationSchema } = AcademicSemesterValidations;

router.post("/create", createAcademicSemesterController);

export default router;
