import express from "express";
import { validSchema } from "../../utils/validator";
import studentValidationSchema from "../student/student.validation";
import { createStudent } from "./user.controller";
const router = express.Router();

router.post(
  "/create/student",
  validSchema(studentValidationSchema),
  createStudent
);
export default router;
