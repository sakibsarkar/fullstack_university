"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = exports.createFaculty = exports.createAdmin = exports.createStudent = void 0;
const catchAsyncError_1 = require("../../../utils/catchAsyncError");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const user_service_1 = __importDefault(require("./user.service"));
const { createStudentService, createAdminService, createFacaltyService, changeStatusService, } = user_service_1.default;
exports.createStudent = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return (0, sendResponse_1.default)(res, {
            statusCode: 400,
            success: false,
            message: "Invalid credentials",
            data: null,
        });
    }
    const result = yield createStudentService(req.file, body.password || "", req.body);
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Student created successfully",
        data: result,
    });
}));
exports.createAdmin = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { password } = _a, adminData = __rest(_a, ["password"]);
    const result = yield createAdminService(req.file, password, adminData);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Admin is created succesfully",
        data: result,
    });
}));
exports.createFaculty = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const result = yield createFacaltyService(req.file, body.password, body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Faculty is created succesfully",
        data: result,
    });
}));
exports.changeStatus = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield changeStatusService(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Status is updated succesfully",
        data: result,
    });
}));
