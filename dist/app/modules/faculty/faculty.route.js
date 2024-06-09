"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const faculty_controller_1 = require("./faculty.controller");
const faculty_validation_1 = require("./faculty.validation");
const validator_1 = require("../../middleweres/validator");
const router = express_1.default.Router();
router.get("/:id", faculty_controller_1.FacultyControllers.getSingleFaculty);
router.patch("/u/:id", (0, validator_1.validSchema)(faculty_validation_1.updateFacultyValidationSchema), faculty_controller_1.FacultyControllers.updateFaculty);
router.delete("/d/:id", faculty_controller_1.FacultyControllers.deleteFaculty);
router.get("/g/all", faculty_controller_1.FacultyControllers.getAllFaculties);
exports.default = router;
