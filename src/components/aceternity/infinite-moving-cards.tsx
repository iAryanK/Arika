"use client";

import { cn } from "@/lib/utils";
import { Globe, Goal, Play } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: React.ReactNode | string;
    bgColor: string;
    subject: string;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller absolute z-0 w-[99%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <TrendingAptitudeCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

function TrendingAptitudeCard({
  icon,
  bgColor,
  subject,
  link,
}: {
  icon: React.ReactNode | string;
  bgColor: string;
  subject: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="flex h-fit w-fit gap-2 rounded-xl bg-zinc-100 p-2 dark:bg-zinc-900">
        <div
          className={`flex items-center justify-center rounded-md px-5 py-2 text-xl shadow-[2px_4px_16px_0px_rgba(0,200,0,0.1)_inset] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.1)_inset] ${bgColor}`}
        >
          {icon}
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-nowrap font-semibold">{subject}</p>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1 text-nowrap pr-1 text-xs text-muted-foreground">
              AI Powered
            </div>

            <div className="rounded-full bg-violet-600 p-1">
              <Play fill="white" size={18} color="white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
