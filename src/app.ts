import expres, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import routes from "./app/routes";
const app = expres();

// middlewere
app.use(expres.json());
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Helloo from the server");
});

app.use("/api/v1", routes);

// 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    requestedPath: req.originalUrl,
  });
});

// global error handeler

/* eslint-disable @typescript-eslint/no-explicit-any */
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error,
  });
});

export default app;
