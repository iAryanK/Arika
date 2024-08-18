import { getAllUsers } from "@/lib/actions/user.action";
import React from "react";

const Page = async () => {
  const res = await getAllUsers();
  //   console.log("[res]", res);

  // map over the users array 'res' and display the user's card
  return (
    <div className="m-5">
      {res.map((user: any, index: number) => (
        // each user card
        <div key={index} className="border-2">
          <h1>{user.firstName}</h1>
          <p>@{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
