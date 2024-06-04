import mongoose, { model } from "mongoose";
import { IAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new mongoose.Schema<IAcademicFaculty>({
  name: {
    type: String,
    required: true,
  },
});

export const AcademicFaculty = model<IAcademicFaculty>(
  "AcademicFaculty",
  academicFacultySchema
);
