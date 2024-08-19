import InstallPrompt from "@/components/shared/InstallPrompt";

export default async function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-2 overflow-y-scroll">
      <InstallPrompt />
      <p className="">Arika | Under Development</p>
    </main>
  );
}
