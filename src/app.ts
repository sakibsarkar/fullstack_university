import expres, { NextFunction, Request, Response } from "express";
import morgan from "morgan";

const app = expres();

// middlewere
app.use(expres.json());
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Helloo from the server");
});

// 404
app.use((err: any, req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    requestedPath: req.originalUrl,
  });
});

// global error handeler

/* eslint-disable @typescript-eslint/no-explicit-any */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
