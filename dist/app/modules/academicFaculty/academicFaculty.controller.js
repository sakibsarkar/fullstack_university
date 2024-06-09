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
exports.updateaAcademicFacultyByIdController = exports.getAllFacunltyController = exports.getFacultyByIdController = exports.createAcademicFacultyController = void 0;
const catchAsyncError_1 = require("../../../utils/catchAsyncError");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const academicFaculty_service_1 = require("./academicFaculty.service");
const { createAcademicFacultyService, getSingleAcademicFcultyByIdService, updateAcademicFacultyByIdService, getAllAcademicFacultyService, } = academicFaculty_service_1.academicFacultyService;
exports.createAcademicFacultyController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const result = yield createAcademicFacultyService(body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Academic faculty created successfully",
        data: result,
    });
}));
exports.getFacultyByIdController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const result = yield getSingleAcademicFcultyByIdService(facultyId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Academic faculty is retrieved succesfully",
        data: result,
    });
}));
exports.getAllFacunltyController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAllAcademicFacultyService();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Academic faculties are retrieved successfully",
        data: result,
    });
}));
exports.updateaAcademicFacultyByIdController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const result = yield updateAcademicFacultyByIdService(facultyId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 20,
        success: true,
        message: "Academic faculty is updated succesfully",
        data: result,
    });
}));
