"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidations = exports.updateAdminValidationSchema = exports.createAdminValidationSchema = void 0;
const zod_1 = require("zod");
const admin_constant_1 = require("./admin.constant");
const userNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(20),
    middleName: zod_1.z.string().max(20),
    lastName: zod_1.z.string().max(20),
});
exports.createAdminValidationSchema = zod_1.z.object({
    password: zod_1.z.string().max(20),
    designation: zod_1.z.string(),
    name: userNameValidationSchema,
    gender: zod_1.z.enum([...admin_constant_1.Gender]),
    dateOfBirth: zod_1.z.string().optional(),
    email: zod_1.z.string().email(),
    contactNo: zod_1.z.string(),
    emergencyContactNo: zod_1.z.string(),
    bloodGroup: zod_1.z.enum([...admin_constant_1.BloodGroup]),
    presentAddress: zod_1.z.string(),
    permanentAddress: zod_1.z.string(),
    profileImg: zod_1.z.string(),
});
exports.updateAdminValidationSchema = zod_1.z.object({
    name: userNameValidationSchema.partial(),
    designation: zod_1.z.string().max(30).optional(),
    gender: zod_1.z.enum([...admin_constant_1.Gender]).optional(),
    dateOfBirth: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    contactNo: zod_1.z.string().optional(),
    emergencyContactNo: zod_1.z.string().optional(),
    bloodGroup: zod_1.z.enum([...admin_constant_1.BloodGroup]).optional(),
    presentAddress: zod_1.z.string().optional(),
    permanentAddress: zod_1.z.string().optional(),
    profileImg: zod_1.z.string().optional(),
});
exports.AdminValidations = {
    createAdminValidationSchema: exports.createAdminValidationSchema,
    updateAdminValidationSchema: exports.updateAdminValidationSchema,
};
