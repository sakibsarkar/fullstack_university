import { Model, Types } from "mongoose";

export type TGender = "male" | "female" | "other";
export type TBloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export type IUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type IFaculty = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  name: IUserName;
  gender: TGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: TBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};

export interface FacultyModel extends Model<IFaculty> {
  isUserExists(id: string): Promise<IFaculty | null>;
}
