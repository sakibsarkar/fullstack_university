"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/Auth/auth.route");
const OfferedCourse_route_1 = __importDefault(require("../modules/OfferedCourse/OfferedCourse.route"));
const academicDepartment_route_1 = __importDefault(require("../modules/academicDepartment/academicDepartment.route"));
const academicFaculty_route_1 = __importDefault(require("../modules/academicFaculty/academicFaculty.route"));
const academicSemester_route_1 = __importDefault(require("../modules/academicSemester/academicSemester.route"));
const admin_route_1 = __importDefault(require("../modules/admin/admin.route"));
const course_route_1 = __importDefault(require("../modules/course/course.route"));
const faculty_route_1 = __importDefault(require("../modules/faculty/faculty.route"));
const semesterRegistration_route_1 = __importDefault(require("../modules/semesterRegistration/semesterRegistration.route"));
const studen_route_1 = __importDefault(require("../modules/student/studen.route"));
const user_route_1 = __importDefault(require("../modules/user/user.route"));
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: "/student",
        route: studen_route_1.default,
    },
    {
        path: "/user",
        route: user_route_1.default,
    },
    {
        path: "/faculties",
        route: faculty_route_1.default,
    },
    {
        path: "/admins",
        route: admin_route_1.default,
    },
    {
        path: "/academicSemester",
        route: academicSemester_route_1.default,
    },
    {
        path: "/academicFaculty",
        route: academicFaculty_route_1.default,
    },
    {
        path: "/academicDepertments",
        route: academicDepartment_route_1.default,
    },
    {
        path: "/courses",
        route: course_route_1.default,
    },
    {
        path: "/semester-registrations",
        route: semesterRegistration_route_1.default,
    },
    {
        path: "/offered-courses",
        route: OfferedCourse_route_1.default,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
