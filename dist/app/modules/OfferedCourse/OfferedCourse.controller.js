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
exports.deleteOfferedCourseFromDB = exports.updateOfferedCourse = exports.getSingleOfferedCourses = exports.getAllOfferedCourses = exports.createOfferedCourse = void 0;
const OfferedCourse_service_1 = require("./OfferedCourse.service");
const catchAsyncError_1 = require("../../../utils/catchAsyncError");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
exports.createOfferedCourse = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OfferedCourse_service_1.OfferedCourseServices.createOfferedCourseIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Offered Course is created successfully !',
        data: result,
    });
}));
exports.getAllOfferedCourses = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const result =
    //   sendResponse(res, {
    //     statusCode: 200,
    //     success: true,
    //     message: 'OfferedCourses retrieved successfully !',
    //     data: result,
    //   });
}));
exports.getSingleOfferedCourses = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //   const result =
    //   sendResponse(res, {
    //     statusCode: 200,
    //     success: true,
    //     message: 'OfferedCourse fetched successfully',
    //     data: result,
    //   });
}));
exports.updateOfferedCourse = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield OfferedCourse_service_1.OfferedCourseServices.updateOfferedCourseIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'OfferedCourse updated successfully',
        data: result,
    });
}));
exports.deleteOfferedCourseFromDB = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield OfferedCourse_service_1.OfferedCourseServices.deleteOfferedCourseFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'OfferedCourse deleted successfully',
        data: result,
    });
}));
