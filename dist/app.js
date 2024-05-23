"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// middlewere
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
var s = 1;
app.get("/", (_, res) => {
    res.send("Helloo from the server");
});
// 404
app.use((err, req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        requestedPath: req.originalUrl,
    });
});
// global error handeler
/* eslint-disable @typescript-eslint/no-explicit-any */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
});
exports.default = app;
