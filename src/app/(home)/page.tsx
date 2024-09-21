import AllAptitude from "@/components/home/AllAptitude";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { AptitudeOfTheDay, CodeOfTheDay } from "@/components/home/POTD";
import ProfilePhone from "@/components/home/ProfilePhone";
import ProfileTab from "@/components/home/ProfileTab";

export default async function Home() {
  return (
    <main className="custom-scrollbar flex h-full w-full flex-col items-center overflow-y-scroll max-md:py-16">
      <HeroCarousel />
      <div className="w-full px-3 py-5 sm:hidden">
        <ProfileTab />
      </div>

      <div className="flex w-full justify-between gap-5 px-2 py-2 sm:px-5">
        <div className="md:custom-scrollbar flex flex-col gap-2 px-2 pt-1 md:h-[600px] md:overflow-y-scroll">
          <AptitudeOfTheDay />
          <CodeOfTheDay />
          <AllAptitude />
        </div>
        <ProfilePhone />
      </div>
    </main>
  );
}
