export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto flex h-screen max-w-sm items-center justify-center">
      {children}
    </main>
  );
}
