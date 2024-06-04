import { z } from "zod";

export const AcademicFacultyValidationSchema = z.object({
  name: z.string(),
});

