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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdminId = exports.findLastAdminId = exports.generateFacultyId = exports.findLastFacultyId = exports.generateStudentId = void 0;
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const getLastStudenId = (semesteId) => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield student_model_1.Student.findOne({ admissionSemester: semesteId }, {
        _id: 0,
        id: 1,
    })
        .sort({
        createdAt: -1,
    })
        .lean();
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) || "";
});
const generateStudentId = (payload, semesterId) => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudentId = yield getLastStudenId(semesterId);
    let studentId = "0".padStart(4, "0");
    if (lastStudentId) {
        const last4Digit = lastStudentId.slice(-4);
        const incrementId = (Number(last4Digit) + 1).toString().padStart(4, "0");
        studentId = incrementId;
    }
    const studentActiveId = payload.year + payload.code + studentId;
    return studentActiveId;
});
exports.generateStudentId = generateStudentId;
// Faculty ID
const findLastFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastFaculty = yield user_model_1.User.findOne({
        role: "faculty",
    }, {
        id: 1,
        _id: 0,
    })
        .sort({
        createdAt: -1,
    })
        .lean();
    return (lastFaculty === null || lastFaculty === void 0 ? void 0 : lastFaculty.id) ? lastFaculty.id.substring(2) : undefined;
});
exports.findLastFacultyId = findLastFacultyId;
const generateFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    const lastFacultyId = yield (0, exports.findLastFacultyId)();
    if (lastFacultyId) {
        currentId = lastFacultyId.substring(2);
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    incrementId = `F-${incrementId}`;
    return incrementId;
});
exports.generateFacultyId = generateFacultyId;
// Admin ID
const findLastAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastAdmin = yield user_model_1.User.findOne({
        role: "admin",
    }, {
        id: 1,
        _id: 0,
    })
        .sort({
        createdAt: -1,
    })
        .lean();
    return (lastAdmin === null || lastAdmin === void 0 ? void 0 : lastAdmin.id) ? lastAdmin.id.substring(2) : undefined;
});
exports.findLastAdminId = findLastAdminId;
const generateAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    const lastAdminId = yield (0, exports.findLastAdminId)();
    if (lastAdminId) {
        currentId = lastAdminId.substring(2);
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    incrementId = `A-${incrementId}`;
    return incrementId;
});
exports.generateAdminId = generateAdminId;
