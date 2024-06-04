import QueryBuilder from "../../builder/QueryBuilder";
import { studentSearchableFields } from "./student.constant";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const getAllStudentService = async (query: Record<string, unknown>) => {
  const student = Student.find()
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });

  const studentQuery = new QueryBuilder(student, query)
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
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
