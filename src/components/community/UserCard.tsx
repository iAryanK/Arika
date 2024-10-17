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
    <Card className="flex flex-col items-center justify-between gap-2 border px-4 py-4 shadow-md dark:border-none dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
      <div className="flex w-full flex-col items-center gap-2 text-center">
        <Image
          src={user.image ? user.image : "/boyface.png"}
          alt={user.username}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="w-4/5">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p className="w-full overflow-hidden text-ellipsis text-xs text-muted-foreground">
            @{user.username}
          </p>
        </div>
      </div>
      <UserDialog data={user}>
        <Button
          className="w-full font-space_grotesk text-sm font-thin"
          variant={"secondary"}
          size={"sm"}
        >
          View Profile
        </Button>
      </UserDialog>
    </Card>
  );
};

export default UserCard;
