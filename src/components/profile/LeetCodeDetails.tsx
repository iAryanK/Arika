import React from "react";
import { Banner } from "./SmallComponents";
import { TbBrandLeetcode } from "react-icons/tb";
import { Badge } from "../ui/badge";
import Image from "next/image";

type Props = {
  leetcodeData: any;
};

const LeetCodeDetails = ({ leetcodeData }: Props) => {
  console.log("[leetcodeData]", leetcodeData.upcomingBadges);

  return (
    <div className="relative mx-auto mt-2 flex h-fit w-full flex-col space-y-2 rounded-md border p-5">
      <Banner>
        <TbBrandLeetcode />
        <p className="text-xs font-light">Leetcode</p>
      </Banner>

      <Badge>Upcoming badges</Badge>
      <div className="flex flex-wrap pt-2">
        {leetcodeData.upcomingBadges.map((badge: any, index: number) => (
          <div key={index} className="flex items-center">
            <Image
              src={
                badge.icon.startsWith("http")
                  ? badge.icon
                  : "https://assets.leetcode.com/static_assets/public/images/badges/" +
                    badge.icon.slice(badge.icon.lastIndexOf("/") + 1)
              }
              alt={badge.displayName}
              width={50}
              height={50}
            />
            <Badge variant={"secondary"} className="mr-0 rounded-l-none">
              {badge.displayName}
            </Badge>
          </div>
        ))}
      </div>

      {leetcodeData.badges.length > 0 && (
        <div className="mt-5 rounded-md bg-zinc-900/[0.5] p-2">
          <Badge>Won badges</Badge>
          <div className="flex flex-wrap gap-1 pt-2">
            {leetcodeData.badges.map((badge: any, index: number) => (
              <div key={index} className="flex items-center">
                <Image
                  src={
                    badge.icon.startsWith("http")
                      ? badge.icon
                      : "https://assets.leetcode.com/static_assets/public/images/badges/" +
                        badge.icon.slice(badge.icon.lastIndexOf("/") + 1)
                  }
                  alt={badge.displayName}
                  width={50}
                  height={50}
                />
                <Badge variant={"secondary"} className="mr-0 rounded-l-none">
                  {badge.displayName}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeetCodeDetails;
