import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: any;
  link: string;
  linkTitle: string;
}
const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center p-5 max-sm:mt-20 sm:justify-center">
      <Image
        src="/logo.png"
        alt="No result illustration"
        width={200}
        height={200}
        className="object-contain brightness-50"
      />

      <h2 className="font-space_grotesk mt-8 font-bold">{title}</h2>
      <div className="my-3.5 max-w-md text-center text-muted-foreground">
        {description}
      </div>

      <Button
        className="mt-5 min-h-[46px] rounded-lg px-4 py-3 font-medium max-sm:w-full"
        asChild
      >
        <Link href={link}>{linkTitle}</Link>
      </Button>
    </div>
  );
};

export default NoResult;
