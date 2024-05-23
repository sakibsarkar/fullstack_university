import expres from "express";
import { getAllStudent } from "./student.controller";
const router = expres.Router();

// get single student
router.get("/:student", (req, res) => res.send("to tot"));
// get all  student
router.get("/g/all", getAllStudent);

export default router;
