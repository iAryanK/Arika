import { getSession } from "@/lib/getSession";
import LeetCodeForm from "../forms/LeetCodeForm";

export const UserLeetCode = async ({
  usermail,
  mongoUserId,
}: {
  usermail: string;
  mongoUserId: string;
}) => {
  const session = await getSession();
  const sessionuser = session?.user;

  if (usermail === sessionuser?.email)
    return (
      <div className="mx-auto mt-2 flex h-fit w-full flex-col space-y-5 rounded-sm">
        <div className="flex w-full items-center">
          <LeetCodeForm
            sessionmail={sessionuser?.email}
            mongoUserId={mongoUserId}
          />
        </div>
      </div>
    );
};
