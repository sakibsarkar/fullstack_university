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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSingleAcamdemicSemesterController = exports.getAcademicSemesterController = exports.getSingleAcamdemicSemesterController = exports.createAcademicSemesterController = void 0;
const catchAsyncError_1 = require("../../../utils/catchAsyncError");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const academicSemester_service_1 = require("./academicSemester.service");
const academicSemester_utils_1 = require("./academicSemester.utils");
const { createAcademicSemesterService, getSingleAcamdemicSemesterService, getAllAcademicSemesterService, updateSingleAcademicSemesterService, } = academicSemester_service_1.academicService;
exports.createAcademicSemesterController = (0, catchAsyncError_1.catchAsyncError)((req, res, nex) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    // validate semester code
    const isvalidCode = (0, academicSemester_utils_1.isValidSemesterCode)(data.name, data.code);
    if (isvalidCode) {
        return (0, sendResponse_1.default)(res, {
            success: true,
            message: "Invalid semester code",
            data: null,
            statusCode: 400,
        });
    }
    const result = yield createAcademicSemesterService(data);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "successfully create academic semester",
        data: result,
        statusCode: 200,
    });
}));
exports.getSingleAcamdemicSemesterController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield getSingleAcamdemicSemesterService(id);
    if (result) {
        return (0, sendResponse_1.default)(res, {
            success: true,
            message: `successfully find academic semester for ${id}`,
            data: result,
            statusCode: 200,
        });
    }
    (0, sendResponse_1.default)(res, {
        success: false,
        message: `No academic semester found for ${id}`,
        data: null,
        statusCode: 200,
    });
}));
exports.getAcademicSemesterController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAllAcademicSemesterService();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Successfuly get all academic service",
        data: result,
        statusCode: 200,
    });
}));
exports.updateSingleAcamdemicSemesterController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const noCode = body.name && !body.code;
    const noName = !body.name && body.code;
    if (noCode) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            message: "You must have to send semester code to update the semester name",
            data: null,
            statusCode: 400,
        });
    }
    if (noName) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            message: "You must have to send semester name to update the semester Code",
            data: null,
            statusCode: 400,
        });
    }
    const isvalidCode = (0, academicSemester_utils_1.isValidSemesterCode)(body.name, body.code);
    if (!isvalidCode) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            message: "invalid semester code",
            data: null,
            statusCode: 400,
        });
    }
    const result = yield updateSingleAcademicSemesterService(id, body);
}));
