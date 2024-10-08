"use server";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn, signOut } from "@/auth";
import { connectToDB } from "../db";
import { User } from "@/models/user.model";
import {
  LoginSchema,
  LoginValues,
  RegisterSchema,
  RegisterValues,
} from "../validations";
import { updateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import { Code } from "@/models/code.model";

const login = async (data: LoginValues) => {
  const { email, password } = LoginSchema.parse(data);

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;

    return someError.cause?.err?.message;
  }
  redirect("/");
};

const register = async (data: RegisterValues) => {
  const { firstName, lastName, username, email, password } =
    RegisterSchema.parse(data);

  if (!firstName || !email || !password || !username) {
    throw new Error("Please fill the necessary fields");
  }

  await connectToDB();

  // existing user
  let existingUser = await User.findOne({ email });
  if (existingUser) return "User already exists !";

  existingUser = await User.findOne({ username });
  if (existingUser) return "Username already exists !";

  const hashedPassword = await hash(password, 12);

  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    username,
  });
  redirect("/login");
};

const getAllUsers = async () => {
  await connectToDB();
  const users = await User.find({}).populate({ path: "code", model: Code });
  return users;
};

const getUserData = async ({ email }: { email: string }) => {
  await connectToDB();
  const user = await User.findOne({ email });

  return JSON.stringify(user);
};

const getUserDataByUsername = async ({ username }: { username: string }) => {
  await connectToDB();
  const user = await User.findOne({ username }).populate({
    path: "code",
    model: Code,
  });

  return user;
};

const handleSignOut = async () => {
  await signOut();
};

const UpdateUserData = async (
  data: updateUserParams,
  {
    path,
    mongoUserId,
    sessionUsername,
  }: {
    path: string;
    mongoUserId: any;
    sessionUsername: string;
  },
) => {
  try {
    await connectToDB();

    const { username } = data;

    // check if a user with the same email exists or same username exists
    if (username != sessionUsername) {
      let existing = await User.find({ username });

      if (existing.length > 0) {
        return "Username already exists!";
      }
    }

    if (
      data.yearOfCompletion &&
      (isNaN(data.yearOfCompletion) ||
        data.yearOfCompletion.toString().length != 4)
    )
      return "Year of completion of degree should be a valid year!";

    if (data.github) {
      if (data.github.includes("github.com/")) {
        if (data.github.charAt(data.github.length - 1) == "/")
          data.github = data.github.slice(0, -1);

        data.github = data.github.slice(data.github.lastIndexOf("/") + 1);
      }
    }

    if (data.linkedin) {
      if (data.linkedin.includes("linkedin.com/in/")) {
        if (data.linkedin.charAt(data.linkedin.length - 1) == "/")
          data.linkedin = data.linkedin.slice(0, -1);

        data.linkedin = data.linkedin.slice(data.linkedin.lastIndexOf("/") + 1);
      }
    }

    if (data.twitter) {
      if (data.twitter.includes("twitter.com/")) {
        if (data.twitter.charAt(data.twitter.length - 1) == "/")
          data.twitter = data.twitter.slice(0, -1);

        data.twitter = data.twitter.slice(data.twitter.lastIndexOf("/") + 1);
      }
    }

    // update anything other than the email
    await User.findByIdAndUpdate(mongoUserId, {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      contact: data.contact,
      bio: data.bio,
      location: data.location,
      institute: data.institute,
      degree: data.degree,
      yearOfCompletion: data.yearOfCompletion,
      resume: data.resume,
      portfolio: data.portfolio,
      github: data.github,
      twitter: data.twitter,
      linkedin: data.linkedin,
    });

    revalidatePath(path);
  } catch (error: any) {
    console.log("[UPDATEUSER ERROR]", error);
    return "Some error occurred!";
  }
};

export {
  register,
  login,
  getAllUsers,
  getUserData,
  getUserDataByUsername,
  handleSignOut,
  UpdateUserData,
};
