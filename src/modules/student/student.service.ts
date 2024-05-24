import { Student } from "./student.model";

const getAllStudentService = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentService = async (studentId: string) => {
  const result = await Student.findById(studentId);
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
  return result
};

const studentService = {
  getAllStudentService,
  getSingleStudentService,
  deleteSingleStudentService,
};

export default studentService;
