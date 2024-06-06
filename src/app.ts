import expres, { Request, Response } from "express";
import morgan from "morgan";
import globalErrorHandler from "./app/middleweres/globalError";
import routes from "./app/routes";
const app = expres();

// middlewere
app.use(expres.json());
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Hello from the server");
});

app.use("/api/v1", routes);

// 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    requestedPath: req.originalUrl,
    method: req.method,
  });
});

// global error handeler

/* eslint-disable @typescript-eslint/no-explicit-any */
app.use(globalErrorHandler);

export default app;
