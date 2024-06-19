"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middleweres/validator");
const admin_validation_1 = require("../admin/admin.validation");
const faculty_validation_1 = require("../faculty/faculty.validation");
const student_validation_1 = __importDefault(require("../student/student.validation"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleweres/auth"));
const router = express_1.default.Router();
router.post("/create/student", (0, validator_1.validSchema)(student_validation_1.default), user_controller_1.createStudent);
router.post("/create/admin", (0, validator_1.validSchema)(admin_validation_1.createAdminValidationSchema), user_controller_1.createAdmin);
router.post("/create/faclty", (0, validator_1.validSchema)(faculty_validation_1.createFacultyValidationSchema), user_controller_1.createFaculty);
router.post("/change/status/id", (0, auth_1.default)("admin"));
exports.default = router;
