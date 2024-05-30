import { z } from "zod";

export const AcademicFacultyValidationSchema = z.object({
  name: z.string(),
});
export const updateAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Academic faculty must be string",
  }),
});
