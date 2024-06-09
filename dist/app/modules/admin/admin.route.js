"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = require("../../middleweres/validator");
const admin_controller_1 = require("./admin.controller");
const admin_validation_1 = require("./admin.validation");
const router = express_1.default.Router();
router.get("/", admin_controller_1.AdminControllers.getAllAdmins);
router.get("/:id", admin_controller_1.AdminControllers.getSingleAdmin);
router.patch("/:id", (0, validator_1.validSchema)(admin_validation_1.updateAdminValidationSchema), admin_controller_1.AdminControllers.updateAdmin);
router.delete("/:adminId", admin_controller_1.AdminControllers.deleteAdmin);
exports.default = router;
