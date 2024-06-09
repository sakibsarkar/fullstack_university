"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAcdemicSemesterValidationSchema = void 0;
const zod_1 = require("zod");
const academicSemester_constant_1 = require("./academicSemester.constant");
exports.createAcdemicSemesterValidationSchema = zod_1.z.object({
    name: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterName]),
    year: zod_1.z.string(),
    code: zod_1.z.enum([...academicSemester_constant_1.AcademicSemesterCode]),
    startMonth: zod_1.z.enum([...academicSemester_constant_1.Months]),
    endMonth: zod_1.z.enum([...academicSemester_constant_1.Months]),
});
