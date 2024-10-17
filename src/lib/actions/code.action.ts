"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../db";
import { createLeetcodeParams } from "./shared.types";
import { User } from "@/models/user.model";
import { Code } from "@/models/code.model";

const LeetCodeDataAPI = async (leetcode_username: string) => {
  try {
    const res = await fetch(
      `${process.env.LEETCODE_API_BASE_URL}/${leetcode_username}/`,
    );

    const data = await res.json();

    if (data.errors) {
      return Error(data.errors[0].message);
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(
      "Unable to fetch data right now. please try after a minute.",
    );
  }
};

const LeetCodeBadgesAPI = async (leetcode_username: string) => {
  try {
    const res = await fetch(
      `${process.env.LEETCODE_API_BASE_URL}/${leetcode_username}/badges`,
    );

    const data = await res.json();

    if (data.errors) {
      return Error(data.errors[0].message);
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(
      "Unable to fetch data right now. please try after a minute.",
    );
  }
};

const createLeetcodeData = async (params: createLeetcodeParams) => {
  try {
    const { leetcode_username, owner, path } = params;

    const leetcodeData: any = await LeetCodeDataAPI(leetcode_username);
    const leetcodeBadges: any = await LeetCodeBadgesAPI(leetcode_username);

    await connectToDB();

    const code = await Code.create({
      leetcode: {
        username: leetcode_username,
        ranking: leetcodeData.ranking,
        reputation: leetcodeData.reputation,
      },
    });

    for (let index = 0; index < leetcodeBadges.badges.length; index++) {
      const badge = leetcodeBadges.badges[index];
      code.leetcode.badges.push({
        displayName: badge.displayName,
        icon: badge.icon,
        creationDate: badge.creationDate,
      });
    }

    for (let index = 0; index < leetcodeBadges.upcomingBadges.length; index++) {
      const badge = leetcodeBadges.upcomingBadges[index];
      code.leetcode.upcomingBadges.push({
        displayName: badge.name,
        icon: badge.icon,
      });
    }

    await code.save();

    const user = await User.findById({ _id: owner });
    user.code = code._id;

    if (!user.birthday && leetcodeData.birthday)
      user.birthday = leetcodeData.birthday;

    if (!user.bio && leetcodeData.about) user.bio = leetcodeData.about;

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

    if (!user.skillTags && leetcodeData.skillTags)
      user.skillTags = leetcodeData.skillTags;

    await user.save();

    revalidatePath(path);
  } catch (error: any) {
    console.log("[CREATE LEETCODE DATA ERROR]: ", error);

    return error.message;
  }
};

const getPOTD = async () => {
  const res = await fetch(`${process.env.LEETCODE_API_BASE_URL}/dailyQuestion`);

  const data = await res.json();

  const date = data.data.activeDailyCodingChallengeQuestion.date;
  const link = data.data.activeDailyCodingChallengeQuestion.link;
  const title = data.data.activeDailyCodingChallengeQuestion.question.title;
  const question =
    data.data.activeDailyCodingChallengeQuestion.question.content;
  const difficulty =
    data.data.activeDailyCodingChallengeQuestion.question.difficulty;

  return { date, link, title, question, difficulty };
};

export { LeetCodeDataAPI, createLeetcodeData, getPOTD };
