import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import { UserDetails } from "@/components/profile/UserDetails";
import { UserLeetCode } from "@/components/profile/UserLeetCode";
import { getUserDataByUsername } from "@/lib/actions/user.action";

type Props = {
  params: {
    username: string;
  };
};

const Page = async ({ params }: Props) => {
  const session = await getSession();
  const user = session?.user;

  const username = params.username;

  const userdata = await getUserDataByUsername({ username });

  return (
    <section className="relative h-full w-full overflow-y-scroll">
      <BackgroundCircles />
      <div className="absolute top-0 h-full w-full p-2 backdrop-blur-3xl max-sm:mb-96">
        <UserDetails data={userdata} />

        {user?.email === userdata?.email && !userdata?.code && (
          <UserLeetCode
            usermail={userdata?.email}
            mongoUserId={JSON.stringify(userdata?._id)}
          />
        )}

        <div className="h-24"></div>
      </div>
    </section>
  );
};

export default Page;

const BackgroundCircles = () => {
  return (
    <div className="h-full w-full">
      <div className="absolute left-0 top-0 h-60 w-60 animate-pulse-slow bg-gradient-to-tl from-background to-violet-900 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-60 w-60 animate-pulse-slow bg-gradient-to-br from-background to-violet-900 blur-3xl" />
    </div>
  );
};
