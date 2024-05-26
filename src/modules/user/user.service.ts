import Config from "../../config";
import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { academicService } from "../academicSemester/academicSemester.service";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentService = async (
  password: string,
  studentData: Partial<IStudent>
) => {
  // create a user object
  const userData: Partial<IUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (Config.default_password as string);

  //set student role
  userData.role = "student";

  //set generated it
  const semester = await academicService.getSingleAcamdemicSemesterService(
    studentData.admissionSemester?.toString() || ""
  );
  const semesterData = semester?.toObject();
  userData.id = await generateStudentId(semesterData as IAcademicSemester);

  // create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

const userService = {
  createStudentService,
};

export default userService;
