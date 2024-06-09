import { NextFunction, Request, Response } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";
import { catchAsyncError } from "../../utils/catchAsyncError";
import AppError from "../errors/AppError";
import { TUserRole } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import Config from "../../config";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;

      // checking if the token is missing
      if (!token) {
        throw new AppError(401, "You are not authorized!");
      }

      // checking if the given token is valid
      const decoded = jwt.verify(
        token,
        Config.jwt_access_secret as string
      ) as JwtPayload;

      const { role, userId, iat } = decoded;

      // checking if the user is exist
      const user = await User.isUserExistsByCustomId(userId);

      if (!user) {
        throw new AppError(400, "This user is not found !");
      }
      // checking if the user is already deleted

      const isDeleted = user?.isDeleted;

      if (isDeleted) {
        throw new AppError(403, "This user is deleted !");
      }

      // checking if the user is blocked
      const userStatus = user?.status;

      if (userStatus === "blocked") {
        throw new AppError(403, "This user is blocked ! !");
      }

      if (
        user.passwordChangedAt &&
        User.isJWTIssuedBeforePasswordChanged(
          user.passwordChangedAt,
          iat as number
        )
      ) {
        throw new AppError(401, "You are not authorized !");
      }

      if (requiredRoles && !requiredRoles.includes(role)) {
        throw new AppError(
          401,
          "You are not authorized  hi!"
        );
      }

      req.user = decoded as JwtPayload;
      next();
    }
  );
};

export default auth;
