import { NextFunction, Request, Response } from "express";

export const jsonParser = (req: Request, res: Response, next: NextFunction) => {
  req.body = JSON.parse(req.body.data);
  next();
};
