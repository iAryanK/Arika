"use client";

import { SidebarLinks } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <section className="xs:px-7 fixed bottom-0 z-10 w-full rounded-t-xl border-t bg-white/[0.1] p-4 backdrop-blur-lg dark:bg-black/[0.1] md:hidden">
      <div className="xs:gap-5 flex items-center justify-between gap-3">
        {SidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 transition-all duration-200 hover:scale-110 sm:flex-1 sm:px-2 sm:py-2.5 ${isActive && "bg-violet-800 shadow-[0px_0px_20px_5px_rgba(148,0,211,0.5)]"}`}
            >
              {link.imgURL}

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
