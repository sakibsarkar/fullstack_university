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
exports.updateSingleStudentController = exports.deleteSingleStudentController = exports.getsingleStudentController = exports.getAllStudent = void 0;
const catchAsyncError_1 = require("../../../utils/catchAsyncError");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const student_service_1 = __importDefault(require("./student.service"));
exports.getAllStudent = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield student_service_1.default.getAllStudentService(query);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Successfully get all student data",
        data: result,
    });
}));
exports.getsingleStudentController = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const result = yield student_service_1.default.getSingleStudentService(studentId);
    if (result) {
        return (0, sendResponse_1.default)(res, {
            success: true,
            message: `Successfuly find data for studentId ${studentId} `,
            data: result,
        });
    }
    (0, sendResponse_1.default)(res, {
        success: false,
        message: `no student data found for student id ${studentId}`,
        data: null,
    });
}));
exports.deleteSingleStudentController = (0, catchAsyncError_1.catchAsyncError)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const result = yield student_service_1.default.deleteSingleStudentService(studentId);
    if (result.modifiedCount) {
        return (0, sendResponse_1.default)(res, {
            success: true,
            message: `${studentId} student Deleted successfull`,
            data: result,
        });
    }
    if (result.matchedCount) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            message: `${studentId} student is already deleted`,
            data: result,
        });
    }
    (0, sendResponse_1.default)(res, {
        success: false,
        message: `${studentId} student not found`,
        data: result,
    });
}));
exports.updateSingleStudentController = (0, catchAsyncError_1.catchAsyncError)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { name, guardian, localGuardian } = body, rest = __rest(body, ["name", "guardian", "localGuardian"]);
    const updateData = Object.assign({}, rest);
    const studentId = req.params.studentId;
    if (name && Object.keys(name).length) {
        for (const [key, value] of Object.entries(name)) {
            updateData[`name.${key}`] = value;
        }
    }
    if (guardian && Object.keys(guardian).length) {
        for (const [key, value] of Object.entries(guardian)) {
            updateData[`guardian.${key}`] = value;
        }
    }
    if (localGuardian && Object.keys(localGuardian).length) {
        for (const [key, value] of Object.entries(localGuardian)) {
            updateData[`localGuardian.${key}`] = value;
        }
    }
    console.log(updateData);
    const result = yield student_service_1.default.updateSingleStudentService(studentId, updateData);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Student updated successfull",
        data: result,
        statusCode: 200,
    });
}));
