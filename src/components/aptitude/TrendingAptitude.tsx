import { TrendingAptitudeItems } from "@/constants";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "../motion-primitives/InfiniteSlider";
import { Play } from "lucide-react";
import Link from "next/link";

const TrendingAptitude = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Badge className="mb-5 ml-2 font-space_grotesk text-sm font-light tracking-wide">
          Trending Topics
        </Badge>
      </div>

      <div className="relative h-24">
        <div
          className={cn(
            "scroller absolute z-0 w-[99%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          )}
        >
          <InfiniteSlider durationOnHover={75} gap={24}>
            {TrendingAptitudeItems.map((item, index) => (
              <TrendingAptitudeCard
                key={index}
                icon={item.icon}
                bgColor={item.bgColor}
                subject={item.subject}
                link={item.link}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
};

export default TrendingAptitude;

export function TrendingAptitudeCard({
  icon,
  bgColor,
  subject,
  link,
}: {
  icon: React.ReactNode | string;
  bgColor: string;
  subject: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="flex h-fit w-fit gap-2 rounded-xl bg-zinc-100 p-2 dark:bg-zinc-900">
        <div
          className={`flex items-center justify-center rounded-md px-5 py-2 text-xl shadow-[2px_4px_16px_0px_rgba(0,200,0,0.1)_inset] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.1)_inset] ${bgColor}`}
        >
          {icon}
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-nowrap font-semibold">{subject}</p>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1 text-nowrap pr-1 text-xs text-muted-foreground">
              AI Powered
            </div>

            <div className="rounded-full bg-violet-600 p-1">
              <Play fill="white" size={18} color="white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
