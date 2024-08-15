import { z } from "zod";

const requiredString = z.string().trim().min(1);

export const RegisterSchema = z.object({
  firstName: requiredString,
  lastName: z.string().optional(),
  email: requiredString.email(),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, _, and - are allowed",
  ),
  password: requiredString.min(8),
});

export type RegisterValues = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof LoginSchema>;
