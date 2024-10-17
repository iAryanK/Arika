"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useRef, useState } from "react";
import { TbBulb } from "react-icons/tb";
import { CircleCheckBig, CircleX, Terminal } from "lucide-react";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
import { useSessionUser } from "@/hooks/useSessionUser";
import { getSession } from "@/lib/getSession";
import { getPOTD } from "@/lib/actions/code.action";
import parse from "html-react-parser";
import { getAptitudeOfTheDay } from "@/lib/actions/aptitude.action";

const AptitudeOfTheDay = () => {
  const { toast } = useToast();
  const [userAns, setUserAns] = useState<string | boolean>("");
  const [data, setData] = useState<any>({});
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getAptitudeOfTheDay();
      setData(data);
    };
    getData();
  }, []);

  const handleSubmit = () => {
    setShowExplanation(true);
    if (userAns === data.answer) {
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
        <h3 className="text-sm">{data.question}</h3>

        <RadioGroup className="mt-5 flex flex-col gap-5">
          {data.options &&
            data.options.map((option: string, index: number) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 rounded-lg border border-zinc-300 p-2 hover:border-zinc-400 dark:border-muted"
              >
                <div className="flex w-fit items-center">
                  <input
                    type="radio"
                    value={option}
                    name={`option_${index}`}
                    id={`option_${index}`}
                    className="size-4 border-amber-500 bg-none text-amber-500 dark:border-white dark:text-white"
                    checked={userAns === option}
                    onChange={(e) => setUserAns(e.target.value)}
                    disabled={showExplanation}
                  />
                </div>
                <Label htmlFor={`option_${index}`} className="w-full text-sm">
                  {option}
                </Label>
              </div>
            ))}
        </RadioGroup>

        <Button
          className="mt-4 bg-amber-600 font-space_grotesk text-sm font-light tracking-wide text-white hover:bg-amber-600/80"
          variant={"secondary"}
          size={"sm"}
          onClick={handleSubmit}
          disabled={showExplanation}
        >
          Submit
        </Button>

        {showExplanation && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-100 p-2 dark:border-red-300 dark:bg-red-200">
            <p className="flex items-center gap-1 pb-1 text-sm">
              {userAns === data.answer ? (
                <>
                  <CircleCheckBig size={18} color="green" />
                  <p className="text-green-600">Correct Answer !</p>
                </>
              ) : (
                <>
                  <CircleX size={18} color="red" />{" "}
                  <p className="text-red-700">Wrong Answer !</p>
                </>
              )}
            </p>
            <p
              className={`text-xs ${userAns === data.answer ? "text-black" : "text-red-600 dark:text-red-700"}`}
            >
              {data.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const CodeOfTheDay = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const data = await getPOTD();
      setData(data);
    };
    getData();
  }, []);

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
        <div className="my-2 flex justify-between">
          <Badge>{data.difficulty}</Badge>
          <p className="font-mono text-sm">{data.date}</p>
        </div>
        <h3 className="text-sm font-semibold underline-offset-4">
          {data.title}
        </h3>
        <h3 className="overflow-hidden text-wrap max-sm:max-w-xs">
          {data.question && parse(data.question)}
        </h3>

        {data.link && (
          <Button
            className="mt-4 bg-amber-600 font-space_grotesk text-sm font-light tracking-wide text-white hover:bg-amber-600/80"
            variant={"secondary"}
            size={"sm"}
            asChild
          >
            <Link href={data.link}>Solve</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export { AptitudeOfTheDay, CodeOfTheDay };
