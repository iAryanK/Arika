import { Plus } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { AIAptitudeItems } from "@/constants";

const AllAptitude = ({ home }: { home?: boolean }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Badge className="ml-2 font-space_grotesk text-sm font-light tracking-wide">
          Aptitude
        </Badge>
        {home && (
          <Badge
            variant={"outline"}
            className="font-space_grotesk font-light tracking-wider hover:cursor-pointer"
          >
            <Link href="/aptitude">View All &rarr;</Link>
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-evenly gap-6 py-5">
        {/* <CreateAptitude /> */}
        {AIAptitudeItems.map(({ image, link, title }, i) => (
          <Link
            href={link}
            key={i}
            className="flex h-40 w-40 flex-col items-center justify-between rounded-xl border pb-5 pt-10 shadow-lg transition-all duration-500 ease-in-out hover:scale-105 dark:bg-slate-800 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
          >
            {image}
            <div className="text-center">
              <p className="pb-1 text-sm tracking-wide">{title}</p>
              <p className="rounded-lg bg-gray-200 px-2 py-1 font-ibm-plex-mono text-xs text-muted-foreground dark:bg-gray-900">
                AI based Aptitude
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllAptitude;

const CreateAptitude = () => {
  return (
    <Link href="/create-aptitude" className="relative h-40 w-40">
      <div className="absolute h-40 w-40 rounded-xl border-2 border-dashed"></div>
      <div className="absolute flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-xl transition-all duration-500 ease-in-out hover:ml-2 hover:mt-2 hover:bg-slate-300 hover:opacity-80 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] hover:dark:bg-slate-800">
        <Plus
          strokeWidth={1}
          size={48}
          className="text-zinc-800 dark:text-zinc-200"
        />
        <p className="font-space_grotesk text-sm font-light tracking-wide">
          Create Aptitude
        </p>
      </div>
    </Link>
  );
};
