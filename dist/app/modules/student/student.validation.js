"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentValidationSchema = exports.studentValidationSchema = void 0;
const zod_1 = require("zod");
const userNameSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(1)
        .max(20)
        .refine((value) => /^[A-Z]/.test(value), {
        message: "First Name must start with a capital letter",
    }),
    middleName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
const guardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
const localGuardianSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    address: zod_1.z.string(),
});
exports.studentValidationSchema = zod_1.z.object({
    name: userNameSchema,
    gender: zod_1.z.enum(["male", "female", "other"]),
    dateOfBirth: zod_1.z.string().optional(),
    email: zod_1.z.string().email(),
    contactNo: zod_1.z.string(),
    emergencyContactNo: zod_1.z.string(),
    bloodGroup: zod_1.z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
    presentAddress: zod_1.z.string(),
    permanentAddress: zod_1.z.string(),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    admissionSemester: zod_1.z.string(),
    profileImg: zod_1.z.string().optional().optional(),
    isActive: zod_1.z.enum(["active", "blocked"]).default("active"),
    isDeleted: zod_1.z.boolean().optional(),
    academicDepartment: zod_1.z.string(),
});
exports.updateStudentValidationSchema = zod_1.z
    .object({
    name: userNameSchema.partial(),
    gender: zod_1.z.enum(["male", "female", "other"]),
    dateOfBirth: zod_1.z.string().optional(),
    email: zod_1.z.string().email(),
    contactNo: zod_1.z.string(),
    emergencyContactNo: zod_1.z.string(),
    bloodGroup: zod_1.z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
    presentAddress: zod_1.z.string(),
    permanentAddress: zod_1.z.string(),
    guardian: guardianSchema.partial(),
    localGuardian: localGuardianSchema.partial(),
    admissionSemester: zod_1.z.string(),
    profileImg: zod_1.z.string().optional().optional(),
    isActive: zod_1.z.enum(["active", "blocked"]).default("active"),
    isDeleted: zod_1.z.boolean().optional(),
    academicDepartment: zod_1.z.string(),
})
    .partial();
exports.default = exports.studentValidationSchema;
