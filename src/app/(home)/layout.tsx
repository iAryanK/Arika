import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { getUserData } from "@/lib/actions/user.action";
import { getSession } from "@/lib/getSession";
import NextTopLoader from "nextjs-toploader";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user = session?.user;
  const res = await getUserData({ email: user?.email as string });
  const data = JSON.parse(res);

  return (
    <main>
      <NextTopLoader showSpinner={false} color="#7f00ff" />
      <div className="flex">
        <LeftSidebar session={session} username={data?.username} />

        <section className="flex h-screen flex-1 flex-col">
          <Topbar session={session} />
          {children}
        </section>
      </div>

      <Bottombar user={data} session={session} />
    </main>
  );
}
