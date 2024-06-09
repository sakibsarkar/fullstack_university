import express from "express";
import auth from "../../middleweres/auth";
import { validSchema } from "../../middleweres/validator";
import { USER_ROLE } from "../user/user.constants";
import { AuthControllers } from "./auth.controller";
import {
  changePasswordValidationSchema,
  loginValidationSchema,
  refreshTokenValidationSchema,
} from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validSchema(loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  "/change-password",
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validSchema(changePasswordValidationSchema),
  AuthControllers.changePassword
);

router.post(
  "/refresh-token",
  validSchema(refreshTokenValidationSchema),
  AuthControllers.refreshToken
);

export const AuthRoutes = router;
