import { getSession } from "@/lib/getSession";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getUserDataByUsername } from "@/lib/actions/user.action";

type Props = {
  params: {
    username: string;
  };
};

const Page = async ({ params }: Props) => {
  const session = await getSession();
  const user = session?.user;
  if (!user) return redirect("/profile");

  const username = params.username;

  return (
    <section className="relative h-full w-full">
      <BackgroundCircles />
      <div className="absolute top-0 h-full w-full backdrop-blur-3xl">
        <UserDetails username={username} />
      </div>
    </section>
  );
};

export default Page;

const BackgroundCircles = () => {
  return (
    <div className="h-full w-full">
      <div className="animate-pulse-slow absolute left-0 top-0 h-60 w-60 bg-gradient-to-tl from-background to-violet-900 blur-3xl" />
      <div className="animate-pulse-slow absolute bottom-0 right-0 h-60 w-60 bg-gradient-to-br from-background to-violet-900 blur-3xl" />
    </div>
  );
};

const UserDetails = async ({ username }: { username: string }) => {
  const data = await getUserDataByUsername({ username });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-5">
      <div className="flex flex-col items-center justify-center space-y-5">
        <Image
          src={data.image ? data.image : "/avatar.gif"}
          alt="profile"
          width={100}
          height={100}
          className="h-20 w-20 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold">{data.firstName}</h1>
        <p className="text-sm text-gray-500">{data.email}</p>
      </div>
    </div>
  );
};
