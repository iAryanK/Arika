"use client";

import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { toast } from "../ui/use-toast";
import { Check, Copy } from "lucide-react";

type Props = {
  username: string;
};

const CopyUserButton = ({ username }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUserLink = () => {
    if (navigator.clipboard) {
      setCopied(true);
      navigator.clipboard.writeText(
        `https://arika.iaryan.tech/profile/${username}`,
      );
      setTimeout(() => setCopied(false), 3000);
    } else {
      return toast({
        title: "Sorry!",
        description: "Unable to copy the legacy profile link.",
      });
    }
  };

  return (
    username && (
      <div onClick={handleCopyUserLink}>
        <Badge className="cursor-pointer select-none text-sm font-light">
          <span className="pr-2">@{username}</span>{" "}
          {copied ? <Check size={12} /> : <Copy size={12} />}
        </Badge>
      </div>
    )
  );
};

export default CopyUserButton;
