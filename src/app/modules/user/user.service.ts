import mongoose from "mongoose";
import Config from "../../../config";
import { AcademicDepartment } from "../academicDepartment/academicDepartment.model";
import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { academicService } from "../academicSemester/academicSemester.service";
import { IAdmin } from "../admin/admin.interface";
import { Admin } from "../admin/admin.model";
import { IFaculty } from "../faculty/faculty.interface";
import { Faculty } from "../faculty/faculty.model";
import { IStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import {
  generateAdminId,
  generateFacultyId,
  generateStudentId,
} from "./user.utils";

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

const createAdminService = async (password: string, payload: IAdmin) => {
  // create a user object
  const userData: Partial<IUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (Config.default_password as string);

  //set student role
  userData.role = "admin";

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });
    console.log(newUser);

    //create a admin
    if (!newUser.length) {
      throw new Error("Failed to create admin");
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new Error("Failed to create admin");
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    console.log(err);

    throw new Error(err);
  }
};

const createFacaltyService = async (password: string, payload: IFaculty) => {
  // create a user object
  const userData: Partial<IUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (Config.default_password as string);

  //set student role
  userData.role = "faculty";

  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment
  );

  if (!academicDepartment) {
    throw new Error("Academic department not found");
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new Error("Failed to create user");
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new Error("Failed to create faculty");
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const userService = {
  createStudentService,
  createAdminService,
  createFacaltyService,
};

export default userService;
