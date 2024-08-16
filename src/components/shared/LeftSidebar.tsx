"use client";

import { ChevronFirst, ChevronLast, LogOut } from "lucide-react";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarLinks } from "@/constants";
import { ThemeToggleButton } from "./ThemeToggle";
import { Badge } from "../ui/badge";
import { handleSignOut } from "@/lib/actions/user.action";
import ConfirmDialog from "./ConfirmDialog";

type SidebarContextType = {
  expanded: boolean;
};

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export default function Sidebar({ session }: { session: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <aside className="hidden h-screen border-r bg-white/[0.1] backdrop-blur-lg dark:bg-black/[0.1] md:flex">
        <nav className="flex h-full flex-col tracking-wide shadow-sm">
          <div className="flex h-10 items-center justify-between p-4 pb-2 pt-10">
            <Image
              src={"/logo.png"}
              className={`overflow-hidden transition-all ${
                expanded ? "flex" : "hidden"
              }`}
              height={48}
              width={48}
              alt="logo"
              quality={100}
            />
            <button
              aria-expanded={expanded}
              onClick={() => setExpanded((curr) => !curr)}
              className="rounded-lg bg-gray-200 p-1.5 hover:bg-gray-300"
            >
              {expanded ? (
                <ChevronFirst className="dark:invert" />
              ) : (
                <ChevronLast className="dark:invert" />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <div className="flex-1 px-3 pt-10">
              {SidebarLinks.map((item, i) => (
                <SidebarItem
                  key={i}
                  icon={item.imgURL}
                  text={item.label}
                  href={item.route}
                />
              ))}
            </div>
          </SidebarContext.Provider>

          <div className="flex flex-col items-center gap-2 p-3">
            <div
              className={`flex w-full items-start ${expanded ? "ml-[6px] justify-start" : "justify-center"}`}
            >
              <ThemeToggleButton />
            </div>

            {session && (
              <ConfirmDialog
                title="Are you sure you want to logout?"
                description="You will need to login again to access your data."
              >
                <div
                  className={`flex w-full items-start ${expanded ? "ml-2 justify-start" : "justify-center"}`}
                >
                  <LogOut
                    size={42}
                    className="cursor-pointer rounded-full p-2 hover:bg-zinc-300 dark:hover:bg-zinc-900"
                  />
                </div>
              </ConfirmDialog>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({
  icon,
  text,
  alert,
  href,
}: {
  icon: any;
  text: string;
  alert?: any;
  href?: string;
}) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();

  const OneItem = () => {
    return (
      <li
        className={`group relative my-2 ml-2 flex cursor-pointer items-center justify-center rounded-md px-2 py-2 transition-all duration-200 hover:scale-110 ${
          pathname === href
            ? "bg-gradient-to-r from-violet-700 to-violet-800 font-medium text-white shadow-[10px_0_20px_-2px_rgba(148,0,211,0.5)]"
            : "font-normal hover:bg-zinc-300 dark:hover:bg-secondary"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "ml-3 w-40" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}

        {!expanded && (
          <div
            className={`invisible absolute left-full ml-6 -translate-x-3 text-sm text-black opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
          >
            <Badge variant={"secondary"}>{text}</Badge>
          </div>
        )}
      </li>
    );
  };

  if (href) {
    return (
      <Link href={href}>
        <OneItem />
      </Link>
    );
  }

  return <OneItem />;
}
