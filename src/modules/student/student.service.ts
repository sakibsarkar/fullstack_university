import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const getAllStudentService = async () => {
  const result = await Student.find()
    .populate("admissionSemester")
    .populate("academicDepartment");
  return result;
};

const getSingleStudentService = async (studentId: string) => {
  const result = await Student.findById(studentId)
    .populate("admissionSemester")
    .populate("academicDepartment");
  return result;
};

const deleteSingleStudentService = async (studentId: string) => {
  const result = await Student.updateOne(
    { id: studentId },
    {
      $set: {
        isDeleted: true,
      },
    }
  );
  return result;
};

const updateSingleStudentService = async (
  studentId: string,
  updateData: Partial<IStudent>
) => {
  const result = await Student.updateOne(
    { id: studentId },
    { $set: updateData },
    { runValidators: true, new: true }
  );

  return result;
};

const studentService = {
  getAllStudentService,
  getSingleStudentService,
  deleteSingleStudentService,
  updateSingleStudentService,
};

export default studentService;
