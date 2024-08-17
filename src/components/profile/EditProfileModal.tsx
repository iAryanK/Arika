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

export function EditProfileModal() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialvalues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    contact: "",
    bio: "",
    location: "",
    institute: "",
    degree: "",
    yearOfCompletion: "",
    resume: "",
    portfolio: "",
    github: "",
    linkedin: "",
    twitter: "",
  };

  const [data, setData] = useState(initialvalues);

  return (
    <div className="max-sm:w-full">
      <Modal>
        <ModalTrigger className="w-full">
          <Button variant={"secondary"} className="w-full">
            <UserPen className="pr-1" size={20} />
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
            <Button className="mx-5 mb-20 sm:hidden">Save</Button>
          </ModalContent>
          <ModalFooter className="max-sm:hidden">
            {/* <Button 
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            data={data}
            setData={setData}
            /> */}
            <Button>Save</Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
