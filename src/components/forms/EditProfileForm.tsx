"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../aceternity/label";
import { Input } from "../aceternity/input";
import { TextArea } from "../aceternity/textarea";

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
  setData: (data: any) => void;
};

export function EditProfileForm({
  isSubmitting,
  setIsSubmitting,
  data,
  setData,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-md p-4 md:p-8">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Update Profile
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Fill the form below to update your profile.
      </p>

      <form className="my-8">
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Your first name here"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              placeholder="Your last name here"
              type="text"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            value={data.username}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your username here"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            value={data.email}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your Gmail or Outlook mail here"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="contact">Contact</Label>
          <Input
            id="contact"
            name="contact"
            value={data.contact}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your Email or Phone number"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="bio">Your Bio</Label>
          <TextArea
            id="bio"
            name="bio"
            value={data.bio}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Write about yourself..."
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={data.location}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your city or state"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="institute">Institute</Label>
          <Input
            id="institute"
            name="institute"
            value={data.institute}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your college or alma mater"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            name="degree"
            value={data.degree}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="B.tech, B.Sc, etc."
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="yearOfCompletion">Year Of Completion of degree</Label>
          <Input
            id="yearOfCompletion"
            name="yearOfCompletion"
            value={data.yearOfCompletion}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="B.tech, B.Sc, etc."
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="resume">Resume Link</Label>
          <Input
            id="resume"
            name="resume"
            value={data.resume}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="B.tech, B.Sc, etc."
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="portfolio">Portfolio Link</Label>
          <Input
            id="portfolio"
            name="portfolio"
            value={data.portfolio}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your portfolio website"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="github">Github</Label>
          <Input
            id="github"
            name="github"
            value={data.github}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your github profile"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={data.linkedin}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your linkedin profile"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="twitter">X Link Formerly Twitter</Label>
          <Input
            id="twitter"
            name="twitter"
            value={data.twitter}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="Your X handle"
            type="text"
          />
        </LabelInputContainer>

        <BottomGradient />

        <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
