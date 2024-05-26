import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { catchAsyncError } from "./catchAsyncError";

// my way
export const validSchema = (schema: AnyZodObject) => {
  return catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const { error } = await schema.safeParseAsync(req.body);

      return next(error);
    }
  );
};
