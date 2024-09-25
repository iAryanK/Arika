"use client";

import { FlipWords } from "@/components/aceternity/flip-words";
import { VanishInput } from "@/components/aceternity/vanish-input";
import { Globe, Goal, Play } from "lucide-react";
import AllAptitude from "@/components/home/AllAptitude";
import {
  Leaderboard,
  LeaderboardDialog,
} from "@/components/shared/Leaderboard";
import TrendingAptitude from "@/components/aptitude/TrendingAptitude";
import Image from "next/image";

export default function Home() {
  const placeholders = [
    "Search for a subject",
    "Network Security",
    "Blockchain",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures",
    "Operating Systems",
  ];

  const words = ["knowledge", "focus", "logic", "reasoning"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="custom-scrollbar h-full w-full overflow-y-scroll">
      <div className="flex h-full w-full flex-row p-2 md:gap-4">
        {/* left side div */}
        <div className="md:custom-scrollbar max-md:my-16 md:overflow-y-scroll">
          <div className="relative flex h-1/2 w-full flex-col items-center justify-center rounded-lg bg-violet-700 dark:bg-violet-800">
            <Image
              src="/cloud.gif"
              alt="cloud"
              width={800}
              height={800}
              className="absolute right-5 top-5 h-20 w-20 animate-pulse-slow rounded-lg opacity-50 sm:h-40 sm:w-40"
            />
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <div className="mb-3 font-mono text-4xl text-neutral-100 max-sm:text-xl">
                Boost
                <FlipWords
                  words={words}
                  className="font-semibold text-amber-500 dark:text-amber-500"
                />{" "}
                <br />
                with Arika Aptitude.
              </div>

              <div className="w-full px-5">
                <VanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-5 pb-16">
            <TrendingAptitude />
            <AllAptitude />
          </div>
        </div>

        {/* LEADERBOARD */}
        <div className="relative flex h-full w-[30%] flex-col items-center max-md:hidden">
          <div className="absolute z-10 h-10 w-[80%] rounded-lg border-2 border-zinc-100 bg-background p-2 px-5 text-center text-xs uppercase tracking-widest dark:border-zinc-900 lg:text-sm xl:w-1/2">
            Leaderboard
          </div>
          <div className="custom-scrollbar mt-5 h-full w-full overflow-y-scroll rounded-lg bg-zinc-100 px-5 pb-5 pt-10 dark:bg-zinc-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] max-sm:px-10">
            <Leaderboard />
          </div>
        </div>

        <LeaderboardDialog />
      </div>
    </section>
  );
}
