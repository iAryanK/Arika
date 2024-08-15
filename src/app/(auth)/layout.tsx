import { SparklesCore } from "@/components/aceternity/sparkles";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="absolute inset-0 -z-10 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="#000"
          minSize={0.6}
          maxSize={3}
          particleDensity={10}
          className="h-full w-full"
          particleColor="#00ff00"
        />
      </div>
      <div className="flex h-screen flex-col items-center justify-between overflow-auto md:flex-row">
        <h1 className="z-10 flex w-full items-center justify-center font-sans text-3xl font-bold text-white max-md:h-[20vh] md:w-1/2 md:text-7xl lg:text-9xl">
          Arika
        </h1>
        <div className="z-10 h-full w-full max-md:h-[80vh] max-md:rounded-t-3xl max-md:border-t md:w-1/2 md:overflow-y-scroll md:border-l">
          {children}
        </div>
      </div>
    </main>
  );
}
