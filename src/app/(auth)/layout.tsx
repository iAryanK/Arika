export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="z-50 mx-auto flex w-full max-w-sm items-center justify-center">
        {children}
      </div>
    </main>
  );
}
