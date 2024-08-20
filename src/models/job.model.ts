import { model, models, Schema, Document } from "mongoose";
import { Code } from "./code.model";

export interface IJob extends Document {
  jiw: [
    {
      companyName: string;
      jobType: string;
      experience: string;
      location: string;
      category: string;
    },
  ];
}

const jobSchema = new Schema(
  {
    jiw: [
      {
        companyName: { type: String },
        jobType: { type: String },
        experience: { type: String },
        location: { type: String },
        category: { type: String },
      },
    ],
  },
  { timestamps: true },
);

export const Job = models?.Job || model<IJob>("Job", jobSchema);
