import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterService = async (payload: IAcademicSemester) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

const getSingleAcamdemicSemesterService = async (semesterId: string) => {
  const result = await AcademicSemester.findOne({ _id: semesterId });
  return result;
};

const getAllAcademicSemesterService = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const updateSingleAcademicSemesterService = async (
  id: string,
  payload: Partial<IAcademicSemester>
) => {
  const find = {
    _id: id,
  };
  const updateData = {
    $set: {
      ...payload,
    },
  };
  const result = await AcademicSemester.updateOne(find, updateData);
  return result;
};

export const academicService = {
  createAcademicSemesterService,
  getSingleAcamdemicSemesterService,
  getAllAcademicSemesterService,
  updateSingleAcademicSemesterService,
};
