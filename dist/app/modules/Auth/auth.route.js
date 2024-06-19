"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleweres/auth"));
const validator_1 = require("../../middleweres/validator");
const user_constants_1 = require("../user/user.constants");
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post("/login", (0, validator_1.validSchema)(auth_validation_1.loginValidationSchema), auth_controller_1.AuthControllers.loginUser);
router.post("/change-password", (0, auth_1.default)(user_constants_1.USER_ROLE.admin, user_constants_1.USER_ROLE.faculty, user_constants_1.USER_ROLE.student), (0, validator_1.validSchema)(auth_validation_1.changePasswordValidationSchema), auth_controller_1.AuthControllers.changePassword);
router.post("/refresh-token", (0, validator_1.validSchema)(auth_validation_1.refreshTokenValidationSchema), auth_controller_1.AuthControllers.refreshToken);
router.post("/change-password", (0, validator_1.validSchema)(auth_validation_1.refreshTokenValidationSchema), auth_controller_1.AuthControllers.forgetPassword);
router.post("/reset-password", (0, validator_1.validSchema)(auth_validation_1.forgetPasswordValidationSchema), auth_controller_1.AuthControllers.resetPassword);
exports.AuthRoutes = router;
