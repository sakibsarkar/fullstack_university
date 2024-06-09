"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAcademicDepartmentValidationSchema = void 0;
const zod_1 = require("zod");
exports.createAcademicDepartmentValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        invalid_type_error: "Academic department must be string",
        required_error: "Name is required",
    }),
    academicFaculty: zod_1.z.string({
        invalid_type_error: "Academic faculty must be string",
        required_error: "Faculty is required",
    }),
});
