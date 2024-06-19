import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { offeredCourseRoutes } from "../modules/OfferedCourse/OfferedCourse.route";
import academicDepertmentRoutes from "../modules/academicDepartment/academicDepartment.route";
import academicFacultyRoutes from "../modules/academicFaculty/academicFaculty.route";
import academicSemesterRoutes from "../modules/academicSemester/academicSemester.route";
import adminRoutes from "../modules/admin/admin.route";
import courseRoutes from "../modules/course/course.route";
import { EnrolledCourseRoutes } from "../modules/enrolledCourse/enrolledCourse.route";
import facultyRoutes from "../modules/faculty/faculty.route";
import semesterRegistrationRoutes from "../modules/semesterRegistration/semesterRegistration.route";
import studentRoutes from "../modules/student/studen.route";
import userRoutes from "../modules/user/user.route";
const router = express.Router();

const moduleRoute = [
  {
    path: "/student",
    route: studentRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },

  {
    path: "/faculties",
    route: facultyRoutes,
  },
  {
    path: "/admins",
    route: adminRoutes,
  },
  {
    path: "/academicSemester",
    route: academicSemesterRoutes,
  },
  {
    path: "/academicFaculty",
    route: academicFacultyRoutes,
  },
  {
    path: "/academicDepertments",
    route: academicDepertmentRoutes,
  },
  {
    path: "/courses",
    route: courseRoutes,
  },
  {
    path: "/semester-registrations",
    route: semesterRegistrationRoutes,
  },
  {
    path: "/offered-courses",
    route: offeredCourseRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/enrolled-courses",
    route: EnrolledCourseRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
