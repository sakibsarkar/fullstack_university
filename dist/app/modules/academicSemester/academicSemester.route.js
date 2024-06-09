"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middleweres/validator");
const academicSemester_controller_1 = require("./academicSemester.controller");
const academicSemester_validaion_1 = require("./academicSemester.validaion");
const router = express_1.default.Router();
// geta all academic semester
router.get("/get/g/all", academicSemester_controller_1.getAcademicSemesterController);
// geta _id based single academic semester
router.get("/get/:id", academicSemester_controller_1.getSingleAcamdemicSemesterController);
// create new academic semster
router.post("/create", (0, validator_1.validSchema)(academicSemester_validaion_1.createAcdemicSemesterValidationSchema), academicSemester_controller_1.createAcademicSemesterController);
// update single academic semester
router.put("/update/:id");
exports.default = router;
