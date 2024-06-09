"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middleweres/validator");
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const router = express_1.default.Router();
router.post("/create", (0, validator_1.validSchema)(academicFaculty_validation_1.AcademicFacultyValidationSchema), academicFaculty_controller_1.createAcademicFacultyController);
router.get("/get");
router.get("/get/:facultyId", academicFaculty_controller_1.getFacultyByIdController);
router.patch("/u/:facultyId", (0, validator_1.validSchema)(academicFaculty_validation_1.AcademicFacultyValidationSchema), academicFaculty_controller_1.updateaAcademicFacultyByIdController);
exports.default = router;
