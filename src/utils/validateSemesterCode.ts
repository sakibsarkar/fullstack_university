import { academicSemesterNameCodeMapper } from "../modules/academicSemester/academicSemester.constant";

export const isValidSemesterCode = (name: string, code: string): boolean => {
  const semester = academicSemesterNameCodeMapper;
  return semester[name] === code;
};
