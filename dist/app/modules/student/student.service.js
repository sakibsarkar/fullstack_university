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
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const student_constant_1 = require("./student.constant");
const student_model_1 = require("./student.model");
const getAllStudentService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const student = student_model_1.Student.find()
        .populate("admissionSemester")
        .populate({
        path: "academicDepartment",
        populate: {
            path: "academicFaculty",
        },
    });
    const studentQuery = new QueryBuilder_1.default(student, query)
        .search(student_constant_1.studentSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield studentQuery.modelQuery;
    return result;
});
const getSingleStudentService = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.Student.findById(studentId)
        .populate("admissionSemester")
        .populate("academicDepartment");
    return result;
});
const deleteSingleStudentService = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.Student.updateOne({ id: studentId }, {
        $set: {
            isDeleted: true,
        },
    });
    return result;
});
const updateSingleStudentService = (studentId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.Student.updateOne({ id: studentId }, { $set: updateData }, { runValidators: true, new: true });
    return result;
});
const studentService = {
    getAllStudentService,
    getSingleStudentService,
    deleteSingleStudentService,
    updateSingleStudentService,
};
exports.default = studentService;
