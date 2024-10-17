import UserCard from "@/components/community/UserCard";
import { getAllUsers } from "@/lib/actions/user.action";
import React from "react";

const Page = async () => {
  const res = await getAllUsers();

  return (
    <div className="custom-scrollbar grid grid-cols-2 gap-5 overflow-y-scroll px-5 pb-20 pt-2 max-md:mt-16 md:w-3/5 md:grid-cols-2 md:pt-5 lg:grid-cols-3">
      {res.map((user: any, index: number) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Page;
