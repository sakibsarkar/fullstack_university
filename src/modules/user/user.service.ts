import Config from "../../config";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";

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

  //set manually generated it
  userData.id = "2030100001";

  // create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id
    if (studentData.password) {
      delete studentData.password;
    }
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

const userService = {
  createStudentService,
};

export default userService;
