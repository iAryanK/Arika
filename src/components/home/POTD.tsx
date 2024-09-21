"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { TbBulb } from "react-icons/tb";
import { CircleX, Terminal } from "lucide-react";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

const AptitudeOfTheDay = () => {
  const { toast } = useToast();
  const [userAns, setUserAns] = useState<string | boolean>("");
  const res = [
    {
      question:
        "In a certain code language, 'APPLE' is written as '51665' and 'GRAPE' is written as '79165'. How is 'ORANGE' written in the same code language?",
      options: ["615615", "516156", "156156", "651561"],
      answer: "615615",
      companiesAsked: ["Google", "Amazon", "Microsoft"],
      explanation:
        "The code seems to be based on the position of the letters in the alphabet. 'O' is the 15th letter, 'R' is the 18th, 'A' is the 1st, 'N' is the 14th, 'G' is the 7th, and 'E' is the 5th. So, 'ORANGE' is written as '615615'.",
    },
  ];

  const handleSubmit = () => {
    if (userAns === res[0].answer) {
      toast({
        title: "Correct Answer !",
        description: "Aptitude of the day solved successfully.",
      });
    } else {
      setUserAns(false);
    }
  };

  return (
    <div className="relative my-2 h-fit w-full rounded-xl shadow-[2px_4px_16px_0px_rgba(0,0,0,0.1)_inset] backdrop-blur-sm dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <Badge
        className="absolute -top-3 left-3 flex items-center gap-1 font-space_grotesk font-light"
        variant={"secondary"}
      >
        <TbBulb strokeWidth={1} size={18} /> Aptitude of the day
      </Badge>
      <div className="p-4">
        <h3 className="text-sm">{res[0].question}</h3>

        <RadioGroup className="mt-5 flex flex-col gap-5">
          {res[0].options.map((option: string, index: number) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 rounded-lg border border-zinc-300 p-2 hover:border-zinc-400 dark:border-muted"
            >
              <div className="w-fit">
                <input
                  type="radio"
                  value={option}
                  name={`option_${index}`}
                  id={`option_${index}`}
                  className="size-3 border-amber-500 bg-none text-amber-500 dark:border-white dark:text-white"
                  checked={userAns === option}
                  onChange={(e) => setUserAns(e.target.value)}
                />
              </div>
              <Label htmlFor={`option_${index}`} className="w-full text-sm">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          className="mt-4 bg-amber-600 font-space_grotesk text-base font-light tracking-wide text-white hover:bg-amber-600/80"
          variant={"secondary"}
          size={"sm"}
          onClick={handleSubmit}
          disabled={userAns === false}
        >
          Submit
        </Button>

        {userAns === false && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-100 p-2 dark:border-red-300 dark:bg-red-200">
            <p className="flex items-center gap-1 pb-1 text-sm text-red-700">
              <CircleX size={18} /> Wrong Answer !
            </p>
            <p className="text-xs text-red-600 dark:text-red-700">
              {res[0].explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const CodeOfTheDay = () => {
  const res = [
    {
      question:
        "Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.",
      answer: "To uniquely identify each row in a table.",
      companiesAsked: ["Adobe", "Amazon", "Microsoft"],
      link: "https://www.naukri.com/code360/problems/first-and-last-position-of-an-element-in-sorted-array_1082549",
    },
  ];

  return (
    <div className="relative my-2 h-fit w-full rounded-xl shadow-[2px_4px_16px_0px_rgba(0,0,0,0.1)_inset] backdrop-blur-sm dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <Badge
        className="absolute -top-3 left-3 flex items-center gap-1 font-space_grotesk font-light"
        variant={"secondary"}
      >
        <Terminal strokeWidth={1} size={18} />
        Problem of the day
      </Badge>
      <div className="p-4">
        <h3 className="text-sm">{res[0].question}</h3>

        <div className="flex gap-2 pt-2">
          {res[0].companiesAsked.map((company, index) => (
            <Badge
              key={index}
              className="flex items-center justify-center rounded-lg bg-secondary px-3 py-1 font-semibold text-black dark:text-white"
            >
              {company}
            </Badge>
          ))}
        </div>

        <Button
          className="mt-4 bg-amber-600 font-space_grotesk text-base font-light tracking-wide text-white hover:bg-amber-600/80"
          variant={"secondary"}
          size={"sm"}
          asChild
        >
          <Link href={res[0].link}>Solve</Link>
        </Button>
      </div>
    </div>
  );
};

export { AptitudeOfTheDay, CodeOfTheDay };
