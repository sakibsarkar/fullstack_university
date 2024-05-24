import { Student } from "./student.model";

const getAllStudentService = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentService = async (studentId: string) => {
  const result = await Student.findById(studentId);
  return result;
};

const studentService = {
  getAllStudentService,
  getSingleStudentService,
};

export default studentService;
