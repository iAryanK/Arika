"use client";

import { FlipWords } from "@/components/aceternity/flip-words";

import { VanishInput } from "@/components/aceternity/vanish-input";

import { Globe, Goal, Play } from "lucide-react";

import AllAptitude from "@/components/home/AllAptitude";
import {
  Leaderboard,
  LeaderboardDialog,
} from "@/components/shared/Leaderboard";

export default function Home() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const words = [
    "creativity",
    "focus",
    "problem-solving",
    "logic",
    "precision",
    "critical-thinking",
    "decision-making",
  ];

  return (
    <section className="custom-scrollbar h-full w-full overflow-y-scroll pt-2 max-md:py-16">
      <div className="flex h-full w-full flex-row p-2 max-md:pb-20 md:gap-4">
        {/* left side div */}
        <div className="custom-scrollbar md:overflow-y-scroll">
          <div className="h-1/2 w-full rounded-lg bg-violet-700 p-16 dark:bg-violet-900">
            <div className="flex flex-col items-center justify-center">
              {/* <div className="mb-3 font-mono text-4xl text-neutral-100 max-sm:text-xl">
                Boost
                <FlipWords
                  words={words}
                  className="font-semibold text-amber-500 dark:text-amber-500"
                />{" "}
                <br />
                now with Arika Aptitude.
              </div> */}

              <div className="w-full">
                <VanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <AllAptitude />
          </div>
        </div>

        {/* LEADERBOARD */}
        <div className="relative flex h-full w-[30%] flex-col items-center max-sm:hidden">
          <div className="absolute z-10 h-10 w-1/2 rounded-lg border-2 border-zinc-100 bg-background p-2 px-5 text-center text-sm uppercase tracking-widest dark:border-zinc-900">
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

function QuizCardByAryan() {
  return (
    <div className="m-5 h-fit w-fit rounded-xl border bg-zinc-100 p-2 shadow-md dark:bg-zinc-900">
      <div className="flex h-24 w-40 items-center justify-center rounded-md bg-purple-700">
        <Globe color="white" />
      </div>

      <p className="pt-2 font-semibold">React Quiz</p>
      <p className="pt-2 text-muted-foreground">5 Question(s)</p>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1 text-sm">
          <Goal size={18} color="violet" />
          80%
        </div>

        <div className="rounded-full bg-violet-600 p-1">
          <Play fill="white" color="white" />
        </div>
      </div>
    </div>
  );
}
