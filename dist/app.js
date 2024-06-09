"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const globalError_1 = __importDefault(require("./app/middleweres/globalError"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// middlewere
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.get("/", (_, res) => {
    res.send("Hello from the server");
});
app.use("/api/v1", routes_1.default);
// 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        requestedPath: req.originalUrl,
        method: req.method,
    });
});
// global error handeler
/* eslint-disable @typescript-eslint/no-explicit-any */
app.use(globalError_1.default);
exports.default = app;
