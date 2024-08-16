import { signIn, signOut } from "@/auth";
import { Highlight } from "@/components/shared/Highlight";
import NoResult from "@/components/shared/NoResult";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/getSession";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  // code to protect this route
  const session = await getSession();
  const user = session?.user;

  if (!user)
    return (
      <NoResult
        title="You're not logged in."
        description={
          <p>
            {" "}
            Login to view and share <br />
            <Highlight>Your Arika legacy profile 🚀</Highlight> <br /> We
            maintain your profile across various platforms at a single place, so
            that you can showcase your consistency better. 💡
          </p>
        }
        link="/login"
        linkTitle="Log In"
      />
    );

  return <>Coming soon...</>;
};

export default Page;

const RequestLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-5">
      <Image
        src="/logo.png"
        alt="logo"
        width={48}
        height={48}
        className="opacity-50"
      />
      <p className="max-w-sm text-center">
        Login to view and share your Arika Legacy Profile.
      </p>

      <Button type="submit" asChild className="max-sm:w-full">
        <Link href={"/login"}>Log In</Link>
      </Button>
    </div>
  );
};
