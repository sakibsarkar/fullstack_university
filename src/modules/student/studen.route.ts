import expres from "express";
import {
  getAllStudent,
  getsingleStudentController,
} from "./student.controller";
const router = expres.Router();

// get single student
router.get("/:student", getsingleStudentController);
// get all  student
router.get("/g/all", getAllStudent);

export default router;
