import { model, models, Schema, Document } from "mongoose";

export interface ICode extends Document {
  leetcode_username: string;
  name?: string;
  birthday?: string;
  avatar?: string;
  ranking?: number;
  reputation?: number;
  gitHub?: string;
  twitter?: string;
  linkedIN?: string;
  website?: string;
  country?: string;
  company?: string;
  school?: string;
  skillTags?: string[];
  about?: string;
  owner: Schema.Types.ObjectId;
  updatedAt: Date;
}

const CodeSchema = new Schema({
  leetcode_username: { type: String, required: true, unique: true },
  name: { type: String },
  birthday: { type: String },
  avatar: { type: String },
  ranking: { type: Number },
  reputation: { type: Number },
  gitHub: { type: String },
  twitter: { type: String },
  linkedIN: { type: String },
  website: { type: String },
  country: { type: String },
  company: { type: String },
  school: { type: String },
  skillTags: [{ type: String }],
  about: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  updatedAt: { type: Date, default: Date.now },
});

export const Code = models?.Code || model<ICode>("Code", CodeSchema);
