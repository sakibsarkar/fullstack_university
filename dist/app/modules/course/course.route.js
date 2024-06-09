"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middleweres/validator");
const course_controller_1 = require("./course.controller");
const course_validation_1 = require("./course.validation");
const router = express_1.default.Router();
router.post("/create", (0, validator_1.validSchema)(course_validation_1.createCourseValidationSchema), course_controller_1.createCourse);
router.get("/:id", course_controller_1.getSingleCourse);
router.patch("/:id", (0, validator_1.validSchema)(course_validation_1.updateCourseValidationSchema), course_controller_1.updateCourse);
router.delete("/:id", course_controller_1.deleteCourse);
router.put("/:courseId/assign-faculties", (0, validator_1.validSchema)(course_validation_1.facultiesWithCourseValidationSchema), course_controller_1.assignFacultiesWithCourse);
router.delete("/:courseId/remove-faculties", (0, validator_1.validSchema)(course_validation_1.facultiesWithCourseValidationSchema), course_controller_1.removeFacultiesFromCourse);
router.get("/", course_controller_1.getAllCourses);
exports.default = router;
