import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import UserDialog from "./UserDialog";

type Props = {
  user: any;
};

const UserCard = ({ user }: Props) => {
  return (
    <Card className="flex items-center justify-between border-none px-4 py-2 shadow-sm hover:shadow-input dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <div className="flex items-center gap-2">
        <Image
          src={user.image ? user.image : "/boyface.png"}
          alt={user.username}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-muted-foreground">@{user.username}</p>
        </div>
      </div>
      <UserDialog data={user}>
        <div className="rounded-lg bg-primary px-2 py-1 font-light text-white">
          view
        </div>
      </UserDialog>
    </Card>
  );
};

export default UserCard;
