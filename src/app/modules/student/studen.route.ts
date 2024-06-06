import expres from "express";
import {
  deleteSingleStudentController,
  getAllStudent,
  getsingleStudentController,
  updateSingleStudentController,
} from "./student.controller";
import { updateStudentValidationSchema } from "./student.validation";
import { validSchema } from "../../middleweres/validator";
const router = expres.Router();

// get single student
router.get("/:studentId", getsingleStudentController);
// get all  student
router.get("/g/all", getAllStudent);
// delete a student
router.delete("/d/:studentId", deleteSingleStudentController);
// update a studnet
router.patch(
  "/u/:studentId",
  validSchema(updateStudentValidationSchema),
  updateSingleStudentController
);

export default router;
