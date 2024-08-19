import UserCard from "@/components/community/UserCard";
import { getAllUsers } from "@/lib/actions/user.action";
import React from "react";

const Page = async () => {
  const res = await getAllUsers();

  return (
    <div className="mt-20 scroll-m-20 space-y-2 px-5 md:w-1/2">
      {res.map((user: any, index: number) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Page;
