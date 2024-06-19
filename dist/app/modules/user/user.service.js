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
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../../config"));
const uploadImg_1 = require("../../../utils/uploadImg");
const academicDepartment_model_1 = require("../academicDepartment/academicDepartment.model");
const academicSemester_service_1 = require("../academicSemester/academicSemester.service");
const admin_model_1 = require("../admin/admin.model");
const faculty_model_1 = require("../faculty/faculty.model");
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const createStudentService = (file, password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    // create a user object
    const userData = {};
    //if password is not given , use deafult password
    userData.password = password || config_1.default.default_password;
    //set student role
    userData.role = "student";
    //set generated it
    const semester = yield academicSemester_service_1.academicService.getSingleAcamdemicSemesterService(((_a = studentData.admissionSemester) === null || _a === void 0 ? void 0 : _a.toString()) || "");
    const semesterData = semester === null || semester === void 0 ? void 0 : semester.toObject();
    userData.id = yield (0, user_utils_1.generateStudentId)(semesterData, ((_b = studentData.admissionSemester) === null || _b === void 0 ? void 0 : _b.toString()) || "");
    // create transaction session
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const imageName = `${userData.id}${(_c = studentData === null || studentData === void 0 ? void 0 : studentData.name) === null || _c === void 0 ? void 0 : _c.firstName}`;
        const path = file === null || file === void 0 ? void 0 : file.path;
        const uploadRes = yield (0, uploadImg_1.sendImageToCloudinary)(imageName, path);
        // create a user
        const newUser = yield user_model_1.User.create([userData], { session });
        if (!newUser.length) {
            throw new Error("Something went wrong, unable to create user");
        }
        //create a student
        // set id , _id as user
        studentData.id = newUser[0].id;
        studentData.user = newUser[0]._id; //reference _id
        studentData.profileImg = uploadRes.secure_url;
        const newStudent = yield student_model_1.Student.create([studentData], { session });
        if (!newStudent.length) {
            throw new Error("Something went wrong, unable to create student");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newStudent;
    }
    catch (_d) {
        yield session.abortTransaction();
        yield session.endSession();
    }
});
const createAdminService = (file, password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    // create a user object
    const userData = {};
    //if password is not given , use deafult password
    userData.password = password || config_1.default.default_password;
    //set student role
    userData.role = "admin";
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const imageName = `${userData.id}${(_e = payload === null || payload === void 0 ? void 0 : payload.name) === null || _e === void 0 ? void 0 : _e.firstName}`;
        const path = file === null || file === void 0 ? void 0 : file.path;
        const uploadRes = yield (0, uploadImg_1.sendImageToCloudinary)(imageName, path);
        //set  generated id
        userData.id = yield (0, user_utils_1.generateAdminId)();
        // create a user (transaction-1)
        const newUser = yield user_model_1.User.create([userData], { session });
        console.log(newUser);
        //create a admin
        if (!newUser.length) {
            throw new Error("Failed to create admin");
        }
        // set id , _id as user
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        payload.profileImg = uploadRes.secure_url; //reference _id
        // create a admin (transaction-2)
        const newAdmin = yield admin_model_1.Admin.create([payload], { session });
        if (!newAdmin.length) {
            throw new Error("Failed to create admin");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newAdmin;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        console.log(err);
        throw new Error(err);
    }
});
const createFacaltyService = (file, password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    // create a user object
    const userData = {};
    //if password is not given , use deafult password
    userData.password = password || config_1.default.default_password;
    //set student role
    userData.role = "faculty";
    // find academic department info
    const academicDepartment = yield academicDepartment_model_1.AcademicDepartment.findById(payload.academicDepartment);
    if (!academicDepartment) {
        throw new Error("Academic department not found");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const imageName = `${userData.id}${(_f = payload === null || payload === void 0 ? void 0 : payload.name) === null || _f === void 0 ? void 0 : _f.firstName}`;
        const path = file === null || file === void 0 ? void 0 : file.path;
        const uploadRes = yield (0, uploadImg_1.sendImageToCloudinary)(imageName, path);
        //set  generated id
        userData.id = yield (0, user_utils_1.generateFacultyId)();
        // create a user (transaction-1)
        const newUser = yield user_model_1.User.create([userData], { session }); // array
        //create a faculty
        if (!newUser.length) {
            throw new Error("Failed to create user");
        }
        // set id , _id as user
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id; //reference _id
        payload.profileImg = uploadRes.secure_url; //reference _id
        // create a faculty (transaction-2)
        const newFaculty = yield faculty_model_1.Faculty.create([payload], { session });
        if (!newFaculty.length) {
            throw new Error("Failed to create faculty");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newFaculty;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err);
    }
});
const changeStatusService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const userService = {
    createStudentService,
    createAdminService,
    createFacaltyService,
    changeStatusService,
};
exports.default = userService;
