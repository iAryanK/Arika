import { model, models, Schema, Document } from "mongoose";

export interface ICode extends Document {
  leetcode_username: string;
  birthday?: string;
  ranking?: number;
  reputation?: number;
  skillTags?: string[];
  owner: Schema.Types.ObjectId;
  updatedAt: Date;
}

const CodeSchema = new Schema({
  leetcode_username: { type: String, required: true },
  birthday: { type: String },
  ranking: { type: Number },
  reputation: { type: Number },
  skillTags: [{ type: String }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  updatedAt: { type: Date, default: Date.now },
});

export const Code = models?.Code || model<ICode>("Code", CodeSchema);
