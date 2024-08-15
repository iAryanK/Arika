import { signOut } from "@/auth";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";

export default async function Home() {
  // code to protect this route

  const session = await getSession();
  const user = session?.user;
  if (!user) return redirect("/login");

  return (
    <main className="h-screen">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
        <h1 className="">Arika</h1>
        <ThemeToggle />
      </div>

      <div className="flex h-[90vh] items-center justify-center font-ibm-plex-mono">
        Coming soon...
      </div>

      <form
        action={async () => {
          "use server";
          await signOut();
          redirect("/login");
        }}
        className="absolute bottom-4 right-4"
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </main>
  );
}
