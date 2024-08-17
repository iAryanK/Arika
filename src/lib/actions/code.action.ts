"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../db";
import { createLeetcodeParams } from "./shared.types";
import { User } from "@/models/user.model";
import { Code } from "@/models/code.model";

const LeetCodeDataAPI = async (leetcode_username: string) => {
  try {
    const res = await fetch(
      `https://alfa-leetcode-api.onrender.com/${leetcode_username}/`,
    );

    const data = await res.json();

    if (data.errors) {
      return Error(data.errors[0].message);
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(
      "Unable to fetch data right now. please try after an hour.",
    );
  }
};

const createLeetcodeData = async (params: createLeetcodeParams) => {
  try {
    const { email, leetcode_username, owner, path } = params;

    const leetcodeData: any = await LeetCodeDataAPI(leetcode_username);

    await connectToDB();

    const code = await Code.create({
      owner,
      leetcode_username,
      ranking: leetcodeData.ranking,
      reputation: leetcodeData.reputation,
    });

    // update code in user with the id of above code
    await User.findOneAndUpdate({ owner }, { code: code._id });

    const user = await User.findById({ _id: owner });

    if (!user.image && leetcodeData.avatar) user.image = leetcodeData.avatar;

    if (!user.location && leetcodeData.country)
      user.location = leetcodeData.country;

    if (!user.portfolio && leetcodeData.website)
      user.portfolio = leetcodeData.website[0];

    if (!user.github && leetcodeData.github) user.github = leetcodeData.github;

    if (!user.linkedin && leetcodeData.linkedIN)
      user.linkedin = leetcodeData.linkedIN;

    if (!user.twitter && leetcodeData.twitter)
      user.twitter = leetcodeData.twitter;

    if (!user.institute && leetcodeData.school)
      user.institute = leetcodeData.school;

    if (!user.bio && leetcodeData.about) user.bio = leetcodeData.about;

    await user.save();

    revalidatePath(path);
  } catch (error: any) {
    return error.message;
  }
};

export { LeetCodeDataAPI, createLeetcodeData };
