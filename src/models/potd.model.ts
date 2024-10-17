import { model, models, Schema, Document } from "mongoose";

export interface IPotd extends Document {
  code: {
    difficulty: string;
    date: string;
    title: string;
    question: string;
    link: string;
  };
  aptitude: {
    question: string;
    options: string[];
    answer: string;
    companiesAsked: string[];
    explanation: string;
  };
}

const PotdSchema = new Schema(
  {
    code: {
      difficulty: { type: String },
      date: { type: String },
      title: { type: String },
      question: { type: String },
      link: { type: String },
    },
    aptitude: {
      question: { type: String },
      options: { type: [String] },
      answer: { type: String },
      companiesAsked: { type: [String] },
      explanation: { type: String },
    },
  },
  { timestamps: true },
);

export const Potd = models?.Potd || model<IPotd>("Potd", PotdSchema);
