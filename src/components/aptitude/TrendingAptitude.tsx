import { TrendingAptitudeItems } from "@/constants";
import { InfiniteMovingCards } from "../aceternity/infinite-moving-cards";
import { Badge } from "../ui/badge";

const TrendingAptitude = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Badge className="ml-2 font-space_grotesk text-sm font-light tracking-wide">
          Trending Topics
        </Badge>
      </div>

      <div className="relative h-24">
        <InfiniteMovingCards
          items={TrendingAptitudeItems}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
};

export default TrendingAptitude;
