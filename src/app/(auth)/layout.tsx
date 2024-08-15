import { SparklesCore } from "@/components/aceternity/sparkles";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="#000"
          minSize={0.6}
          maxSize={3}
          particleDensity={25}
          className="h-full w-full"
          particleColor="#00fff0"
        />
      </div>
      <div className="flex h-screen flex-col items-center justify-between overflow-auto md:flex-row">
        <h1 className="z-10 flex w-full items-center justify-center font-sans text-3xl font-bold text-white max-md:h-28 md:w-1/2 md:text-7xl lg:text-9xl">
          Arika
        </h1>
        <div className="h-full w-full bg-zinc-900/[0.6] backdrop-blur-sm max-md:rounded-t-3xl max-md:border-t md:w-1/2 md:overflow-y-scroll md:border-l">
          {children}
        </div>
      </div>
    </main>
  );
}
