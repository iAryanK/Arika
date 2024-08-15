import { model, models, Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  password?: string;
  role: string;
  image?: string;
  authProviderId?: string;
}

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
  image: { type: String },
  authProviderId: { type: String },
});

export const User = models?.User || model<IUser>("User", userSchema);
