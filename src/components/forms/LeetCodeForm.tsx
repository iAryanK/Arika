"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  LeetcodeUsernameSchema,
  LeetcodeUsernameValues,
} from "@/lib/validations";
import { useState, useTransition } from "react";
import { createLeetcodeData } from "@/lib/actions/code.action";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

const LeetCodeForm = ({
  sessionmail,
  mongoUserId,
}: {
  sessionmail: string;
  mongoUserId: string;
}) => {
  const [error, setError] = useState<Error | string | undefined>();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const form = useForm<LeetcodeUsernameValues>({
    resolver: zodResolver(LeetcodeUsernameSchema),
    defaultValues: {
      leetcode_username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: LeetcodeUsernameValues) {
    setError(undefined);
    startTransition(async () => {
      // get leetcode data from api and store it into the db.
      const res = await createLeetcodeData({
        email: sessionmail,
        leetcode_username: values.leetcode_username.toLowerCase(),
        path: pathname,
        owner: JSON.parse(mongoUserId),
      });

      if (res) setError(res as string | Error | undefined);
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full items-start justify-center"
        >
          <FormField
            control={form.control}
            name="leetcode_username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="your Leetcode Username"
                    className="w-full rounded-r-none lowercase"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                {error && (
                  <p className="py-1 pl-2 text-sm font-light">
                    ⚠️ {error?.toString()}
                  </p>
                )}
              </FormItem>
            )}
          />

          <Button disabled={isPending} type="submit" className="rounded-l-none">
            {isPending ? (
              <>
                <Loader2 className="animate-spin" />
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LeetCodeForm;
