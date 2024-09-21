"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { heroItems } from "@/constants";
import Link from "next/link";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="my-2 w-full max-sm:max-w-sm"
    >
      <CarouselContent className="-ml-1">
        {heroItems.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Link href={item.link}>
                <Image
                  src={item.image}
                  alt="Banner"
                  height={500}
                  width={1000}
                  className="rounded-lg"
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
