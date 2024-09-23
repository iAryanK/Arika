"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAptitudeDataFromGemini } from "@/lib/actions/aptitude.action";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import useCountdown from "@/hooks/useCountdown";
import { FaStopwatch } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheckBig, CircleX, Smile } from "lucide-react";
import router from "next/router";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    subject: string;
  };
};

type QuestionType = {
  question: string;
  options: string[];
  answer: string;
  companiesAsked: string[];
  explanation: string;
}[];

const Page = ({ params }: Props) => {
  const router = useRouter();
  const [qno, setQno] = useState(0);
  const [res, setRes] = useState<QuestionType>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [marksScored, setMarksScored] = useState(0);
  const [userResponse, setUserResponse] = useState<string[]>([]);

  const { secondsLeft, start } = useCountdown();

  useEffect(() => {
    const getData = async () => {
      const data = await getAptitudeDataFromGemini(params.subject);
      setRes(data);
      setUserResponse(Array(res.length).fill(""));
      start(15 * 60);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.subject]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log(userResponse);
    userResponse.forEach((response, index) => {
      if (response === res[index].answer) setMarksScored((prev) => prev + 2);
    });
  };

  if (res.length > 0 && !isSubmitted)
    return (
      <section className="flex h-full w-full overflow-y-scroll">
        <div className="custom-scrollbar top-0 flex h-full w-full flex-col gap-2 overflow-y-scroll p-2 pb-20 max-md:pt-16 md:w-[70%] md:pl-5 lg:justify-between">
          {/* horizontal scrolling Question numbers with links to that question, as visible on small device  */}
          <div className="custom-scrollbar mt-2 flex w-[95vw] gap-3 overflow-x-scroll md:hidden">
            {res.map((_, index) => (
              <div
                key={index}
                className={`flex h-8 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg font-semibold hover:bg-primary ${qno === index ? "bg-primary text-white" : "bg-secondary"}`}
                onClick={() => setQno(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Company names badges */}
          <div className="mt-5 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              {res[qno].companiesAsked.map((company, index) => (
                <Badge
                  key={index}
                  className="flex items-center justify-center rounded-lg bg-secondary px-3 py-1 font-semibold text-black dark:text-white"
                >
                  {company}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaStopwatch color="violet" />
              {~~(secondsLeft / 60).toString().padStart(2, "0")}:
              {(secondsLeft % 60).toString().padStart(2, "0")}
            </div>
          </div>

          {/* Question */}
          <div className="mt-5">
            <p className="text-lg font-semibold">{res[qno].question}</p>
          </div>

          {/* Options */}
          <RadioGroup className="mt-5 flex flex-col gap-5">
            {res[qno].options.map((option: string, index: number) => (
              <div
                key={index}
                className="flex cursor-pointer items-center justify-start gap-2 rounded-lg p-2 shadow-[2px_4px_16px_0px_rgba(0,0,0,0.06)_inset] hover:bg-secondary dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
              >
                <div className="flex w-fit items-center">
                  <input
                    type="radio"
                    name={`option_${index}`}
                    value={option}
                    id={`option_${index}`}
                    className="size-4 appearance-none rounded-full border border-secondary checked:border-transparent checked:bg-primary"
                    checked={userResponse[qno] === option}
                    onChange={(e) => {
                      const temp = [...userResponse];
                      temp[qno] = e.target.value;
                      setUserResponse(temp);
                    }}
                  />
                </div>
                <Label htmlFor={`option_${index}`} className="w-full text-sm">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* next and prev buttons */}
          <div className="mt-5 flex items-center justify-between">
            <Button
              variant={"secondary"}
              onClick={() => setQno(qno - 1)}
              disabled={qno === 0}
              className="select-none"
            >
              Back
            </Button>
            <Button
              onClick={() => setQno(qno + 1)}
              className={`select-none ${qno === res.length - 1 && "hidden"}`}
            >
              Next
            </Button>
            <Button
              onClick={handleSubmit}
              className={`select-none bg-amber-600 hover:bg-amber-500 ${qno !== res.length - 1 && "hidden"}`}
            >
              Submit
            </Button>
          </div>
        </div>

        {/* Question numbers with links to that question, as visible on large device */}
        <div className="h-full w-[30%] space-y-5 p-2 max-md:hidden">
          <div className="h-[30%] rounded-lg p-5 shadow-[2px_4px_16px_0px_rgba(0,0,0,0.06)_inset] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <Badge>Operating System</Badge>
            <div className="pt-2">
              <p className="pt-1 text-xs text-muted-foreground">
                Total Questions: {res.length}
              </p>
              <p className="pt-1 text-xs text-muted-foreground">
                Total Marks: {res.length * 2}
              </p>
              <p className="pt-1 text-xs text-muted-foreground">
                Duration: 15 minutes
              </p>
            </div>
          </div>

          <div className="h-[65%] rounded-lg p-5 shadow-[2px_4px_16px_0px_rgba(0,0,0,0.06)_inset] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
            <Badge variant={"secondary"}>Navigator</Badge>
            <p className="pt-1 text-xs text-muted-foreground">
              Use the navigator to navigate between questions and track their
              status.
            </p>
            <div className="flex flex-wrap gap-2 pt-5">
              {res.map((_, index) => (
                <div
                  key={index}
                  className={`flex h-8 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg font-semibold hover:bg-primary ${qno === index ? "bg-primary" : "bg-secondary"}`}
                  onClick={() => setQno(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );

  if (isSubmitted) {
    return (
      <div className="custom-scrollbar flex h-full w-full items-center justify-center gap-2 overflow-y-scroll max-md:py-16">
        <div className="h-full w-full p-2 md:w-[70%] md:p-5">
          <Smile
            size={48}
            strokeWidth={1}
            color="orange"
            className="transition-all duration-500 ease-in-out hover:-rotate-12 hover:scale-105"
          />
          <div className="space-y-2 pb-16 pt-2">
            <div className="flex items-start justify-between gap-2 pb-2 max-md:flex-col">
              <p className="font-space_grotesk text-lg">
                <span className="tracking-wide">
                  Thank you for submitting !
                </span>{" "}
                <br />{" "}
                <span className="text-amber-600">
                  You have scored {marksScored}/{res.length * 2}.
                </span>
              </p>
              <Button
                onClick={() => {
                  setQno(0);
                  setUserResponse(Array(res.length).fill(""));
                  setIsSubmitted(false);
                  router.refresh();
                }}
                size={"sm"}
                className="bg-amber-600 text-sm hover:bg-amber-500"
              >
                Re-attempt
              </Button>
            </div>

            <p className="rounded-lg bg-secondary p-2 text-xs md:text-sm">
              Upsolving is the most crucial part of learning! Don&apos;t skip
              taking a look at the detailed report below.
            </p>

            <div className="pt-5">
              <Accordion type="single" collapsible>
                {res.map((item, index) => (
                  <AccordionItem
                    value={"item-" + index}
                    key={index}
                    className="mb-4 border-b-0"
                  >
                    <AccordionTrigger className="rounded-lg p-2 shadow-[2px_4px_16px_0px_rgba(0,0,0,0.1)_inset] hover:no-underline dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.1)_inset]">
                      <div className="flex items-start justify-start gap-2">
                        <div>
                          {item.answer === userResponse[index] ? (
                            <CircleCheckBig color="green" />
                          ) : (
                            <CircleX color="red" />
                          )}
                        </div>
                        <div className="text-start text-sm md:text-base">
                          {item.question}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mt-1 rounded-lg border-b p-2">
                      <p>
                        <span className="text-amber-800 dark:text-amber-600">
                          correct answer:
                        </span>{" "}
                        {item.answer}
                      </p>
                      <p>
                        <span className="text-amber-700 dark:text-amber-500">
                          Explanation:{" "}
                        </span>
                        {item.explanation}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="h-full w-[30%] max-md:hidden"></div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      Preparing your dashboard...
    </div>
  );
};

export default Page;
