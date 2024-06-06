import express from "express";

import { validSchema } from "../../middleweres/validator";
import {
  createSemesterRegistration,
  deleteSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
} from "./semesterRegistration.controller";
import {
  createSemesterRegistrationValidationSchema,
  upadateSemesterRegistrationValidationSchema,
} from "./semesterRegistration.validation";

const router = express.Router();

router.post(
  "/create-semester-registration",
  validSchema(createSemesterRegistrationValidationSchema),
  createSemesterRegistration
);

router.get("/:id", getSingleSemesterRegistration);

router.patch(
  "/:id",
  validSchema(upadateSemesterRegistrationValidationSchema),
  updateSemesterRegistration
);

router.get("/:id", getSingleSemesterRegistration);

router.delete("/:id", deleteSemesterRegistration);

router.get("/", getAllSemesterRegistrations);

export default router;
