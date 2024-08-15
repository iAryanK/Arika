import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import { getSession } from "@/lib/getSession";
import NextTopLoader from "nextjs-toploader";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <main>
      <NextTopLoader showSpinner={false} color="#7f00ff" />
      <div className="flex">
        <LeftSidebar session={session} />

        <section className="flex h-screen flex-1 flex-col">
          <Topbar session={session} />
          {children}
        </section>
      </div>

      <Bottombar />
    </main>
  );
}
