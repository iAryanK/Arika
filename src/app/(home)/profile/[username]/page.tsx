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
  const res = await getUserData({ email: usermail });
  const data = JSON.parse(res);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-5">
      <div className="flex flex-col items-center justify-center space-y-5">
        <Image
          src={data.image ? data.image : "/boyface.png"}
          alt="profile"
          width={100}
          height={100}
          className="h-20 w-20 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold">{data.firstName}</h1>
        <p className="text-sm text-gray-500">{data.email}</p>
      </div>
    </div>
  );
};
