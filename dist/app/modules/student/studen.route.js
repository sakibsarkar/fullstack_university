"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const student_validation_1 = require("./student.validation");
const validator_1 = require("../../middleweres/validator");
const router = express_1.default.Router();
// get single student
router.get("/:studentId", student_controller_1.getsingleStudentController);
// get all  student
router.get("/g/all", student_controller_1.getAllStudent);
// delete a student
router.delete("/d/:studentId", student_controller_1.deleteSingleStudentController);
// update a studnet
router.patch("/u/:studentId", (0, validator_1.validSchema)(student_validation_1.updateStudentValidationSchema), student_controller_1.updateSingleStudentController);
exports.default = router;
