"use client";

import { ChevronFirst, ChevronLast, LogOut } from "lucide-react";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggle";
import { Badge } from "../ui/badge";
import ConfirmDialog from "./ConfirmDialog";
import { SidebarLinks } from "@/constants";

type SidebarContextType = {
  expanded: boolean;
};

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export default function Sidebar({
  session,
  username,
}: {
  session: any;
  username: any;
}) {
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
              priority
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
                  username={username}
                />
              ))}
            </div>
          </SidebarContext.Provider>

          <div className="flex flex-col items-center gap-2 p-3">
            <div
              className={`flex w-full items-start ${expanded ? "ml-[16px] justify-start" : "justify-center"}`}
            >
              <ThemeToggleButton />
            </div>
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
  username,
}: {
  icon: any;
  text: string;
  alert?: any;
  href?: string;
  username?: string;
}) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();
  if (username && href === "/profile") href = `/profile/${username}`;

  const OneItem = () => {
    return (
      <li
        className={`group relative my-2 ml-2 flex cursor-pointer items-center justify-center rounded-md px-2 py-2 transition-all duration-200 hover:scale-110 hover:shadow-[2px_4px_16px_0px_rgba(0,0,0,0.06)_inset] hover:dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] ${
          pathname === href
            ? "bg-gradient-to-r from-violet-700 to-violet-800 font-medium text-white"
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

        {/* {!expanded && (
          <div
            className={`invisible absolute left-full ml-6 -translate-x-3 text-sm text-black opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
          >
            <Badge variant={"secondary"}>{text}</Badge>
          </div>
        )} */}
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
