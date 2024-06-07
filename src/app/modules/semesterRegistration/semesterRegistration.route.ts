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
  "/create",
  validSchema(createSemesterRegistrationValidationSchema),
  createSemesterRegistration
);

router.get("/get/:id", getSingleSemesterRegistration);
router.get("/all", getAllSemesterRegistrations);

router.patch(
  "/u/:id",
  validSchema(upadateSemesterRegistrationValidationSchema),
  updateSemesterRegistration
);
router.delete("/:id", deleteSemesterRegistration);

// router.get("/:id", getSingleSemesterRegistration);



export default router;
