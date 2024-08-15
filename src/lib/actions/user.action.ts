"use server";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";
import { connectToDB } from "../db";
import { User } from "@/models/user.model";
import {
  LoginSchema,
  LoginValues,
  RegisterSchema,
  RegisterValues,
} from "../validations";

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
  const { firstName, lastName, email, password } = RegisterSchema.parse(data);

  if (!firstName || !email || !password) {
    throw new Error("Please fill the necessary fields");
  }

  await connectToDB();

  // existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) return "User already exists !";

  const hashedPassword = await hash(password, 12);

  await User.create({ firstName, lastName, email, password: hashedPassword });
  redirect("/login");
};

const fetchAllUsers = async () => {
  await connectToDB();
  const users = await User.find({});
  return users;
};

export { register, login, fetchAllUsers };
