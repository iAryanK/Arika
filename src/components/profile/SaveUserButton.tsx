"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { useModal } from "../aceternity/animated-modal";
import { Button } from "../ui/button";
import { BottomGradient } from "../forms/EditProfileForm";
import { UpdateUserData } from "@/lib/actions/user.action";
import { usePathname } from "next/navigation";

type Props = {
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    contact: string;
    bio: string;
    location: string;
    institute: string;
    degree: string;
    yearOfCompletion: string;
    resume: string;
    portfolio: string;
    github: string;
    twitter: string;
    linkedin: string;
  };
};

const SaveUserButton = ({ isSubmitting, setIsSubmitting, data }: Props) => {
  const { setOpen } = useModal();
  const { toast } = useToast();
  const pathname = usePathname();

  const handleUpdateProfile = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (data.username == "" || data.email == "" || data.firstName == "") {
      setIsSubmitting(false);
      return toast({
        title: "Please enter the required fields.",
        description: "Username, email and firstname can't be empty.",
      });
    }

    if (
      !data.email.endsWith("@gmail.com") &&
      !data.email.endsWith("@hotmail.com") &&
      !data.email.endsWith("@outlook.com")
    ) {
      setIsSubmitting(false);
      return toast({
        title: "Sorry!",
        description: "Only gmail, hotmail and outlook Mail IDs are accepted.",
      });
    }

    const res = await UpdateUserData(data, { path: pathname });
    setIsSubmitting(false);
    console.log("[RES]", res);

    if (res) {
      setOpen(false);
      return toast({
        title: "Success!",
        description: "Your profile has been updated.",
      });
    } else {
      return toast({
        title: "Apologies!",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row">
      <Button variant={"ghost"} onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-700 to-blue-900 px-6 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
        onClick={handleUpdateProfile}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            Updating <Loader2 size={18} className="animate-spin" />
          </div>
        ) : (
          <>Update Profile &rarr;</>
        )}
        <BottomGradient />
      </Button>
    </div>
  );
};

export default SaveUserButton;
