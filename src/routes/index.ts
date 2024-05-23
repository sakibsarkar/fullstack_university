import express from "express";
import studentRoute from "../modules/student/studen.route";
import userRoute from "../modules/user/user.route";
const router = express.Router();

const moduleRoute = [
  {
    path: "/student",
    route: studentRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
