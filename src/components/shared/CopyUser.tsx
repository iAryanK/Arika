"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { toast } from "../ui/use-toast";

type Props = {
  children: React.ReactNode;
  username: string;
};

const CopyUserButton = ({ children, username }: Props) => {
  const handleCopyUserLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `https://arika.iaryan.tech/profile/${username}`,
      );
      return toast({
        title: "Profile link copied to clipboard!",
        description: "Share this Arika profile with others.",
      });
    }
  };

  return (
    username && (
      <div onClick={handleCopyUserLink}>
        <Badge className="cursor-pointer select-none text-sm font-light">
          {children}
        </Badge>
      </div>
    )
  );
};

export default CopyUserButton;
