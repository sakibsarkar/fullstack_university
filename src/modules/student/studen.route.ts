import expres from "express";
import { validSchema } from "../../utils/validator";
import {
  deleteSingleStudentController,
  getAllStudent,
  getsingleStudentController,
  updateSingleStudentController,
} from "./student.controller";
import { updateStudentValidationSchema } from "./student.validation";
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
