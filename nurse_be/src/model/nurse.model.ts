import mongoose from "mongoose";
import { UserDocument } from "./user.model";

enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAYS,
}

export interface NurseDocument extends mongoose.Document {
  name: string;
  email: string;
  contact: string;
  createdAt: Date;
  updatedAt: Date;
  workingDays: WeekDays[];
  dutyStartTime: string;
  dutyEndTime: string;
  createdBy: UserDocument["_id"];
}

const NurseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String },
    workingDays: { type: Array<WeekDays> },
    dutyStartTime: { type: String },
    dutyEndTime: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Nurse = mongoose.model<NurseDocument>("NurseDocument", NurseSchema);

export default Nurse;
