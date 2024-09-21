"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButtonDropdown } from "./UserButton";
import { Button } from "../ui/button";
import InstallPrompt from "./InstallPrompt";
import { LogIn } from "lucide-react";

const Topbar = ({ session }: { session: any }) => {
  const pathname = usePathname();

  const routeName = () => {
    if (pathname === "/") return "ARIKA";
    let formatName = pathname.charAt(1).toUpperCase() + pathname.slice(2);
    if (pathname.includes("/profile/"))
      formatName = formatName.slice(0, formatName.indexOf("/", 1));
    return formatName;
  };

  return (
    <nav className="top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-white/[0.1] px-6 py-3 backdrop-blur-lg dark:bg-black/[0.1] max-md:fixed max-md:rounded-b-lg">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={"/logo.png"}
          className={`overflow-hidden transition-all`}
          height={32}
          width={32}
          alt="logo"
          quality={100}
        />
        <p className="max-xs:hidden rounded-md px-2 font-mono text-lg font-light">
          {routeName()}
        </p>
      </Link>

      <div className="flex items-center gap-2 hover:cursor-pointer">
        <InstallPrompt />
        {session ? (
          <UserButtonDropdown session={session} />
        ) : (
          <Button asChild>
            <Link
              href="/login"
              className="flex h-8 items-center gap-2 font-space_grotesk"
            >
              <LogIn size={18} />
              Log In
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
