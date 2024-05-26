import { z } from "zod";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constant";

const createAcdemicSemesterValidationSchema = z.object({
  name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
  year: z.string(),
  code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
  startMonth: z.enum([...Months] as [string, ...string[]]),
  endMonth: z.enum([...Months] as [string, ...string[]]),
});

const updateAcademicSemesterValidationSchema = z
  .object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  })
  .optional();

export const AcademicSemesterValidations = {
  createAcdemicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
