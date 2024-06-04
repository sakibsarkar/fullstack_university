import { Schema, model } from "mongoose";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";

const acdemicSemesterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  }
);

// validation for duplicate semester creation
acdemicSemesterSchema.pre("save", async function (next) {
  const name = this.name;
  const year = this.year;
  const isEsixtSemster = await AcademicSemester.findOne({ name, year });
  if (isEsixtSemster) {
    throw new Error("Semester already exist");
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester>(
  "AcademicSemester",
  acdemicSemesterSchema
);

// Autumn 01
// Summar 02
// Fall 03
