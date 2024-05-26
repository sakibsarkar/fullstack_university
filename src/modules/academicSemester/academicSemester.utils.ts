import { academicSemesterNameCodeMapper } from "./academicSemester.constant";

export const isValidSemesterCode = (name: string, code: string): boolean => {
  const semester = academicSemesterNameCodeMapper;
  return semester[name] === code;
};
