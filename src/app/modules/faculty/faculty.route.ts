import express from "express";
import { validSchema } from "../../../utils/validator";
import { FacultyControllers } from "./faculty.controller";
import { updateFacultyValidationSchema } from "./faculty.validation";

const router = express.Router();

router.get("/:id", FacultyControllers.getSingleFaculty);

router.patch(
  "/u/:id",
  validSchema(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty
);

router.delete("/d/:id", FacultyControllers.deleteFaculty);

router.get("/g/all", FacultyControllers.getAllFaculties);

export default router;
