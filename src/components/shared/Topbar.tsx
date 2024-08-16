"use client";
import { LogIn, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { UserButtonDropdown } from "./UserButton";
import { Button } from "../ui/button";

const Topbar = ({ session }: { session: any }) => {
  const pathname = usePathname();

  const routeName = () => {
    if (pathname === "/") return "Arika";
    let formatName = pathname.charAt(1).toUpperCase() + pathname.slice(2);
    if (pathname.includes("/profile"))
      formatName = formatName.slice(0, formatName.indexOf("/", 1));
    return formatName;
  };

  return (
    <nav className="top-0 z-10 flex w-full items-center justify-between border-b bg-white/[0.1] p-4 px-6 py-3 dark:bg-black/[0.1]">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={"/logo.png"}
          className={`overflow-hidden transition-all`}
          height={32}
          width={32}
          alt="logo"
          quality={100}
        />
        <p className="max-xs:hidden text-xl">{routeName()}</p>
      </Link>

      <div className="hidden hover:cursor-pointer max-sm:flex">
        {session ? (
          <UserButtonDropdown session={session} />
        ) : (
          <Button className="text-sm">
            <Link href="/login">Log In</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
