import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";

export default async function Home() {
  return (
    <main className="flex h-full w-full items-center justify-center overflow-y-scroll">
      Arika | Under Development
    </main>
  );
}
