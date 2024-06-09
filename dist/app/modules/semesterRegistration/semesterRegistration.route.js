"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middleweres/validator");
const semesterRegistration_controller_1 = require("./semesterRegistration.controller");
const semesterRegistration_validation_1 = require("./semesterRegistration.validation");
const router = express_1.default.Router();
router.post("/create", (0, validator_1.validSchema)(semesterRegistration_validation_1.createSemesterRegistrationValidationSchema), semesterRegistration_controller_1.createSemesterRegistration);
router.get("/get/:id", semesterRegistration_controller_1.getSingleSemesterRegistration);
router.get("/all", semesterRegistration_controller_1.getAllSemesterRegistrations);
router.patch("/u/:id", (0, validator_1.validSchema)(semesterRegistration_validation_1.upadateSemesterRegistrationValidationSchema), semesterRegistration_controller_1.updateSemesterRegistration);
router.delete("/:id", semesterRegistration_controller_1.deleteSemesterRegistration);
// router.get("/:id", getSingleSemesterRegistration);
exports.default = router;
