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
exports.deleteSemesterRegistration = exports.updateSemesterRegistration = exports.getSingleSemesterRegistration = exports.getAllSemesterRegistrations = exports.createSemesterRegistration = void 0;
const catchAsyncError_1 = require("../../../utils/catchAsyncError");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const semesterRegistration_service_1 = require("./semesterRegistration.service");
exports.createSemesterRegistration = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield semesterRegistration_service_1.SemesterRegistrationService.createSemesterRegistrationIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Semester Registration is created successfully!",
        data: result,
    });
}));
exports.getAllSemesterRegistrations = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield semesterRegistration_service_1.SemesterRegistrationService.getAllSemesterRegistrationsFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Semester Registration is retrieved successfully !",
        data: result,
    });
}));
exports.getSingleSemesterRegistration = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield semesterRegistration_service_1.SemesterRegistrationService.getSingleSemesterRegistrationsFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Semester Registration is retrieved successfully",
        data: result,
    });
}));
exports.updateSemesterRegistration = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield semesterRegistration_service_1.SemesterRegistrationService.updateSemesterRegistrationIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Semester Registration is updated successfully",
        data: result,
    });
}));
exports.deleteSemesterRegistration = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield semesterRegistration_service_1.SemesterRegistrationService.deleteSemesterRegistrationFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Semester Registration is updated successfully",
        data: result,
    });
}));
