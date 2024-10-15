import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return <div>create-aptitude page</div>;
};

export default Page;
