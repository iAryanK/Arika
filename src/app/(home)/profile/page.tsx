import { Highlight } from "@/components/shared/Highlight";
import NoResult from "@/components/shared/NoResult";
import { getUserData } from "@/lib/actions/user.action";
import { getSession } from "@/lib/getSession";
import { LogIn } from "lucide-react";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession();

  if (session) {
    const sessionuser = session?.user;
    const res = await getUserData({ email: sessionuser?.email as string });
    const userdata = JSON.parse(res);

    const username = userdata?.username;
    redirect(`/profile/${username}`);
  }

  return (
    <NoResult
      title="You're not logged in."
      description={
        <p>
          {" "}
          Login to view and share <br />
          <Highlight>Your Arika legacy profile 🚀</Highlight> <br /> We maintain
          your profile across various platforms at a single place, so that you
          can showcase your consistency better. 💡
        </p>
      }
      link="/login"
      linkTitle="Log In"
      linkIcon={<LogIn size={18} />}
    />
  );
};

export default Page;
