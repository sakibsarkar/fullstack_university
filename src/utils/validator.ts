import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { catchAsyncError } from "./catchAsyncError";

// my way
export const validSchema = (schema: AnyZodObject) => {
  return catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const x = await schema.parseAsync(req.body);
      console.log(x, "mr x");

      return next();
    }
  );
};

// module way
const validStudent2 = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({ body: req.body });
    next();
  };
};
