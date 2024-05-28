import { IAcademicSemester } from "../academicSemester/academicSemester.interface";
import { Student } from "../student/student.model";

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
