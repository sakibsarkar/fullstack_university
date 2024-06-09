"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSemesterCode = void 0;
const academicSemester_constant_1 = require("./academicSemester.constant");
const isValidSemesterCode = (name, code) => {
    const semester = academicSemester_constant_1.academicSemesterNameCodeMapper;
    return semester[name] === code;
};
exports.isValidSemesterCode = isValidSemesterCode;
