import Config from "../../../config";
import { catchAsyncError } from "../../../utils/catchAsyncError";
import sendResponse from "../../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsyncError(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken, needsPasswordChange } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: Config.nodeEnv === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User is logged in succesfully!",
    data: {
      accessToken,
      needsPasswordChange,
    },
  });
});

const changePassword = catchAsyncError(async (req, res) => {
  const { ...passwordData } = req.body;

  const result = await AuthServices.changePassword(req.user, passwordData);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password is updated succesfully!",
    data: result,
  });
});

const refreshToken = catchAsyncError(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthServices.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Access token is retrieved succesfully!",
    data: result,
  });
});

const forgetPassword = catchAsyncError(async (req, res) => {
  const userId = req.body.id;
  const result = await AuthServices.forgetPasswordService(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Reset link is generated succesfully!",
    data: result,
  });
});

const resetPassword = catchAsyncError(async (req, res) => {
  const token = req.headers.authorization;

  const result = await AuthServices.resetPassword(req.body, token as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password reset succesful!",
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
};
