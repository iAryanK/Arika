import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
        <h1 className="">Arika</h1>
        <ThemeToggle />
      </div>

      <div className="font-ibm-plex-mono flex h-[90vh] items-center justify-center">
        Coming soon...
      </div>
    </main>
  );
}
