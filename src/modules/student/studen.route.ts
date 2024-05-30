import expres from "express";
import {
  deleteSingleStudentController,
  getAllStudent,
  getsingleStudentController,
  updateSingleStudentController,
} from "./student.controller";
const router = expres.Router();

// get single student
router.get("/:studentId", getsingleStudentController);
// get all  student
router.get("/g/all", getAllStudent);
// delete a student
router.delete("/d/:studentId", deleteSingleStudentController);
// update a studnet
router.patch("/u/:studentId", updateSingleStudentController);

export default router;
