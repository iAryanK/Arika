import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Home() {
  return (
    <main className="h-screen">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between py-2
      "
      >
        <h1 className="">Arika</h1>
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-center h-[90vh]">
        Coming soon...
      </div>
    </main>
  );
}
