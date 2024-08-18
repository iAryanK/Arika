import React from "react";
import { Banner, ParamValue } from "./SmallComponents";
import { TbBrandLeetcode } from "react-icons/tb";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Separator } from "../ui/separator";

type Props = {
  leetcodeData: any;
};

const LeetCodeDetails = ({ leetcodeData }: Props) => {
  return (
    <div className="relative mx-auto mt-2 flex h-fit w-full flex-col space-y-2 rounded-md border p-5 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <Banner>
        <TbBrandLeetcode />
        <p className="text-xs font-light">Leetcode</p>
      </Banner>

      <div className="py-2">
        <ParamValue
          parameter="Leetcode"
          value={leetcodeData.ranking}
          icon={<TbBrandLeetcode />}
        />
      </div>

      <Separator className="w-1/2" />

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
        <div className="mt-5 rounded-md bg-zinc-100/[0.5] p-2 dark:bg-zinc-900/[0.5]">
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
