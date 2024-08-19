import { model, models, Schema, Document } from "mongoose";

export interface ICode extends Document {
  leetcode: {
    username: string;
    ranking?: number;
    reputation?: number;
    badges?: [
      {
        displayName: string;
        icon: string;
        creationDate: string;
      },
    ];
    upcomingBadges?: [
      {
        displayName: string;
        icon: string;
      },
    ];
  };
  owner: Schema.Types.ObjectId;
}

const CodeSchema = new Schema(
  {
    leetcode: {
      username: { type: String },
      ranking: { type: Number },
      reputation: { type: Number },
      badges: [
        {
          displayName: { type: String },
          icon: { type: String },
          creationDate: { type: String },
        },
      ],
      upcomingBadges: [
        {
          displayName: { type: String },
          icon: { type: String },
        },
      ],
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

export const Code = models?.Code || model<ICode>("Code", CodeSchema);
