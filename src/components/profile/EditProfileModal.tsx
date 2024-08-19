"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../aceternity/animated-modal";
import { Highlight } from "../shared/Highlight";
import { EditProfileForm } from "../forms/EditProfileForm";
import { Button } from "../ui/button";
import { UserPen } from "lucide-react";
import SaveUserButton from "./SaveUserButton";
import { updateUserParams } from "@/lib/actions/shared.types";

export function EditProfileModal({
  user,
  mongoUser,
}: {
  user: string;
  mongoUser: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const userdata = user ? JSON.parse(user) : null;

  const initialvalues: updateUserParams = {
    firstName: userdata?.firstName || "",
    lastName: userdata?.lastName || "",
    username: userdata?.username || "",
    email: userdata?.email || "",
    contact: userdata?.contact || "",
    bio: userdata?.bio || "",
    location: userdata?.location || "",
    institute: userdata?.institute || "",
    degree: userdata?.degree || "",
    yearOfCompletion: userdata?.yearOfCompletion || "",
    resume: userdata?.resume || "",
    portfolio: userdata?.portfolio || "",
    github: userdata?.github || "",
    linkedin: userdata?.linkedin || "",
    twitter: userdata?.twitter || "",
  };

  const [data, setData] = useState(initialvalues);

  return (
    <div className="w-full">
      <Modal>
        <ModalTrigger className="w-full">
          <Button className="w-full bg-zinc-300 text-black shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] hover:bg-secondary/80 dark:bg-secondary dark:text-white">
            <UserPen className="mr-2" size={20} />
            Edit
          </Button>
        </ModalTrigger>

        <ModalBody className="mx-2 mt-20 sm:mx-5">
          <ModalContent className="overflow-auto px-2">
            <h4 className="mb-8 text-center text-lg font-bold text-neutral-600 dark:text-neutral-100 md:text-xl">
              Edit your profile details to make your <br />
              <Highlight>Arika Legacy Profile</Highlight> the best. 🌟
            </h4>

            <EditProfileForm
              setIsSubmitting={setIsSubmitting}
              data={data}
              setData={setData}
            />
            <div className="mx-5 mb-20 sm:hidden">
              <SaveUserButton
                sessionUsername={userdata?.username}
                mongoUser={mongoUser}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
                data={data}
              />
            </div>
          </ModalContent>
          <ModalFooter className="max-sm:hidden">
            <SaveUserButton
              sessionUsername={userdata?.username}
              mongoUser={mongoUser}
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
              data={data}
            />
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
