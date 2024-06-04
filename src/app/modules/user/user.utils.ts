import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { Student } from "../student/student.model";
import { User } from "./user.model";

const getLastStudenId = async (semesteId: string) => {
  const lastStudent = await Student.findOne(
    { admissionSemester: semesteId },
    {
      _id: 0,
      id: 1,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStudent?.id || "";
};

export const generateStudentId = async (
  payload: IAcademicSemester,
  semesterId: string
) => {
  const lastStudentId = await getLastStudenId(semesterId);
  let studentId = "0".padStart(4, "0");
  if (lastStudentId) {
    const last4Digit = lastStudentId.slice(-4);
    const incrementId = (Number(last4Digit) + 1).toString().padStart(4, "0");
    studentId = incrementId;
  }
  const studentActiveId = payload.year + payload.code + studentId;
  console.log(studentActiveId, "yo yo");

  return studentActiveId;
};

// Faculty ID
export const findLastFacultyId = async () => {
  const lastFaculty = await User.findOne(
    {
      role: "faculty",
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateFacultyId = async () => {
  let currentId = (0).toString();
  const lastFacultyId = await findLastFacultyId();

  if (lastFacultyId) {
    currentId = lastFacultyId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `F-${incrementId}`;

  return incrementId;
};

// Admin ID
export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: "admin",
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
  let currentId = (0).toString();
  const lastAdminId = await findLastAdminId();

  if (lastAdminId) {
    currentId = lastAdminId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `A-${incrementId}`;
  return incrementId;
};
