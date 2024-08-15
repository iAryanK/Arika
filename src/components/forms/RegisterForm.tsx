"use client";

import React, { useState, useTransition } from "react";
import { Input } from "../aceternity/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "@/lib/actions/user.action";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { PasswordInput } from "../shared/PasswordInput";
import { LoadingButton } from "../shared/LoadingButton";
import { RegisterSchema, RegisterValues } from "@/lib/validations";

export function RegisterForm() {
  const [error, setError] = useState<Error | String | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterValues) {
    setError(undefined);
    startTransition(async () => {
      // register function registers the user and throws error, if any. But, since the form is protected by zod validations, it should not throw any error.
      const res = await register(values);

      if (res) setError(res);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-3">
        {error && (
          <p className="rounded-lg bg-zinc-950 py-1 pl-2 font-medium text-destructive">
            ⚠️ {error.toString()}
          </p>
        )}
        <div className="space-y-3 pb-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">FirstName</FormLabel>
                <FormControl {...field}>
                  <Input placeholder="Abc" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Last Name</FormLabel>
                <FormControl {...field}>
                  <Input placeholder="Xyz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl {...field}>
                  <Input placeholder="xyz@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl {...field}>
                  <PasswordInput
                    placeholder="••••••••"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pb-2">
          <LoadingButton loading={isPending} type="submit" className="w-full">
            Register &rarr;
          </LoadingButton>
        </div>

        <div className="h-[1px] w-full space-y-10 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </Form>
  );
}
