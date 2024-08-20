import { model, models, Schema, Document } from "mongoose";
import { Code } from "./code.model";

export interface IUser extends Document {
  username: string;
  firstName: string;
  lastName?: string;
  birthday?: string;
  email: string;
  contact?: string;
  password?: string;
  role: string;
  image?: string;
  authProviderId?: string;
  bio?: string;
  location?: string;
  institute?: string;
  degree?: string;
  yearOfCompletion?: number;
  skillTags?: string[];
  resume?: string;
  portfolio?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  code: Schema.Types.ObjectId;
  joinedAt: Date;
}

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  birthday: { type: String },
  email: { type: String, required: true },
  contact: { type: String },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
  image: { type: String },
  authProviderId: { type: String },
  bio: { type: String },
  location: { type: String },
  portfolio: { type: String },
  github: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  institute: { type: String },
  degree: { type: String },
  yearOfCompletion: { type: Number },
  skillTags: [{ type: String }],
  resume: { type: String },
  code: { type: Schema.Types.ObjectId, ref: Code.modelName },
  joinedAt: { type: Date, default: Date.now },
});

export const User = models?.User || model<IUser>("User", userSchema);
