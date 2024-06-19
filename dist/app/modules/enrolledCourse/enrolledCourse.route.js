"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrolledCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleweres/auth"));
const validator_1 = require("../../middleweres/validator");
const enrolledCourse_controller_1 = require("./enrolledCourse.controller");
const enrolledCourse_validaton_1 = require("./enrolledCourse.validaton");
const router = express_1.default.Router();
router.post("/create-enrolled-course", (0, auth_1.default)("student"), (0, validator_1.validSchema)(enrolledCourse_validaton_1.EnrolledCourseValidations.createEnrolledCourseValidationZodSchema), enrolledCourse_controller_1.EnrolledCourseControllers.createEnrolledCourse);
router.patch("/update-enrolled-course-marks", (0, auth_1.default)("faculty"), (0, validator_1.validSchema)(enrolledCourse_validaton_1.EnrolledCourseValidations.updateEnrolledCourseMarksValidationZodSchema), enrolledCourse_controller_1.EnrolledCourseControllers.updateEnrolledCourseMarks);
exports.EnrolledCourseRoutes = router;
