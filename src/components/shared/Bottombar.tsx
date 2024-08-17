"use client";

import { SidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Bottombar = ({ user, session }: { user: any; session: any }) => {
  const pathname = usePathname();

  return (
    <section className="xs:px-7 fixed bottom-0 z-10 w-full rounded-t-xl border-t bg-white/[0.1] p-4 backdrop-blur-lg dark:bg-black/[0.1] md:hidden">
      <div className="xs:gap-5 flex items-center justify-between gap-3">
        {SidebarLinks.map(({ imgURL, route, label }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;

          if (user?.username && route === "/profile") {
            route = `/profile/${user.username}`;
          }
          const imgLink = user?.image;

          return (
            <Link
              href={route}
              key={label}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 transition-all duration-200 hover:scale-110 sm:flex-1 sm:px-2 sm:py-2.5 ${isActive && "bg-violet-600 shadow-[0px_0px_25px_5px_rgba(148,0,211,0.5)] dark:bg-violet-800"}`}
            >
              <div>
                {session &&
                user?.image &&
                route === `/profile/${user?.username}` ? (
                  <Image
                    src={imgLink}
                    className={`overflow-hidden rounded-full transition-all`}
                    height={32}
                    width={32}
                    alt="profile"
                    quality={100}
                  />
                ) : (
                  <div className={`${isActive && "invert dark:invert-0"}`}>
                    {imgURL}
                  </div>
                )}
              </div>

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
