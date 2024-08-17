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

export function EditProfileModal(user: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const userdata = user.user ? JSON.parse(user.user) : null;

  const initialvalues = {
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
    <div className="max-sm:w-full">
      <Modal>
        <ModalTrigger className="w-full">
          <Button variant={"secondary"} className="w-full">
            <UserPen className="mr-2" size={20} />
            Edit
          </Button>
        </ModalTrigger>

        <ModalBody className="mx-2 sm:mx-5">
          <ModalContent className="overflow-auto px-2">
            <h4 className="mb-8 text-center text-lg font-bold text-neutral-600 dark:text-neutral-100 md:text-2xl">
              Edit your profile details to make your <br />
              <Highlight>Arika Legacy Profile</Highlight> the best.
            </h4>

            <EditProfileForm
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
              data={data}
              setData={setData}
            />
            <div className="mx-5 mb-20 sm:hidden">
              <SaveUserButton
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
                data={data}
              />
            </div>
          </ModalContent>
          <ModalFooter className="max-sm:hidden">
            <SaveUserButton
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
