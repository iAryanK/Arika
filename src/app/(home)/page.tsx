import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";

export default async function Home() {
  // code to protect this route
  const session = await getSession();
  const user = session?.user;
  if (!user) return redirect("/login");

  return (
    <main className="flex h-full w-full items-center justify-center overflow-y-scroll">
      <form
        action={async () => {
          "use server";
          await signOut();
          redirect("/login");
        }}
        className="flex items-center justify-center pt-20"
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </main>
  );
}
