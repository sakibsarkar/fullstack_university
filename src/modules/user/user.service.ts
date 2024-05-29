import mongoose from "mongoose";
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
  userData.id = await generateStudentId(
    semesterData as IAcademicSemester,
    studentData.admissionSemester?.toString() || ""
  );

  // create transaction session
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // create a user
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new Error("Something went wrong, unable to create user");
    }

    //create a student

    // set id , _id as user
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id; //reference _id

    const newStudent = await Student.create([studentData], { session });
    if (!newStudent.length) {
      throw new Error("Something went wrong, unable to create student");
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

const userService = {
  createStudentService,
};

export default userService;
