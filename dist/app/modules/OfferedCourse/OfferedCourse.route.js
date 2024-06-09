"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middleweres/validator");
const OfferedCourse_controller_1 = require("./OfferedCourse.controller");
const OfferedCourse_validation_1 = require("./OfferedCourse.validation");
const router = express_1.default.Router();
router.get("/", OfferedCourse_controller_1.getAllOfferedCourses);
router.get("/:id", OfferedCourse_controller_1.getSingleOfferedCourses);
router.post("/create", (0, validator_1.validBodySchema)(OfferedCourse_validation_1.createOfferedCourseValidationSchema), OfferedCourse_controller_1.createOfferedCourse);
router.patch("/:id", (0, validator_1.validBodySchema)(OfferedCourse_validation_1.updateOfferedCourseValidationSchema), OfferedCourse_controller_1.updateOfferedCourse);
router.delete("/:id", OfferedCourse_controller_1.deleteOfferedCourseFromDB);
exports.default = router;
