import { Highlight } from "@/components/shared/Highlight";
import NoResult from "@/components/shared/NoResult";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/getSession";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getUserData } from "@/lib/actions/user.action";

type Props = {};

const Page = async (props: Props) => {
  const session = await getSession();
  const user = session?.user;

  if (user)
    return (
      <section className="relative h-full w-full">
        <BackgroundCircles />
        <div className="absolute top-0 h-full w-full backdrop-blur-3xl">
          <UserDetails usermail={user.email as string} />
        </div>
      </section>
    );

  return (
    <NoResult
      title="You're not logged in."
      description={
        <p>
          {" "}
          Login to view and share <br />
          <Highlight>Your Arika legacy profile 🚀</Highlight> <br /> We maintain
          your profile across various platforms at a single place, so that you
          can showcase your consistency better. 💡
        </p>
      }
      link="/login"
      linkTitle="Log In"
    />
  );
};

export default Page;

const BackgroundCircles = () => {
  return (
    <div className="h-full w-full">
      <div className="animate-pulse-slow absolute left-0 top-0 h-60 w-60 bg-gradient-to-tl from-background to-violet-900 blur-3xl" />
      <div className="animate-pulse-slow absolute bottom-0 right-0 h-60 w-60 bg-gradient-to-br from-background to-violet-900 blur-3xl" />
    </div>
  );
};

const UserDetails = async ({ usermail }: { usermail: string }) => {
  const res = await getUserData(usermail);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-5">
      <div className="flex flex-col items-center justify-center space-y-5">
        <Image
          src={res.image ? res.image : "/logo.png"}
          alt="profile"
          width={96}
          height={96}
          className="rounded-full object-contain p-2"
        />
        <h1 className="text-2xl font-bold">{res.firstName}</h1>
        <p className="text-sm text-gray-500">{res.email}</p>
      </div>
    </div>
  );
};
