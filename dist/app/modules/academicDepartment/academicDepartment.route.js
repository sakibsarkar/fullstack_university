"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const validator_1 = require("../../middleweres/validator");
const router = express_1.default.Router();
router.post("/create", (0, validator_1.validSchema)(academicDepartment_validation_1.createAcademicDepartmentValidationSchema), academicDepartment_controller_1.createAcademicDepartmemt);
router.get("/get", academicDepartment_controller_1.getAllAcademicDepartments);
router.get("/get/:departmentId", academicDepartment_controller_1.getSingleAcademicDepartment);
router.patch("/u/:departmentId", (0, validator_1.validSchema)(academicDepartment_validation_1.createAcademicDepartmentValidationSchema.partial()), academicDepartment_controller_1.updateAcademicDeartment);
exports.default = router;
