import express from "express";
import academicSemesterRoutes from "../modules/academicSemester/academicSemester.route";
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
    path: "/academicSemester",
    route: academicSemesterRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
