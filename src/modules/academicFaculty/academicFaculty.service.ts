import { IAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";

const createAcademicFacultyService = async (payload: IAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};
const getSingleAcademicFcultyByIdService = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const getAllAcademicFacultyService = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const updateAcademicFacultyByIdService = async (
  id: string,
  payload: Partial<IAcademicFaculty>
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const academicFacultyService = {
  createAcademicFacultyService,
  getSingleAcademicFcultyByIdService,
  updateAcademicFacultyByIdService,
  getAllAcademicFacultyService
};
