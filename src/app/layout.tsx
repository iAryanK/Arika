import type { Metadata } from "next";
import { IBM_Plex_Mono, Mulish, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NextTopLoader from "nextjs-toploader";
import type { Viewport } from "next";
import LoadingProvider from "@/components/providers/loading-provider";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space_grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700", "200", "800", "900", "1000"],
});

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm_plex_mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Arika",
  description:
    "Welcome to Arika! Search and prepare for your jobs or interships as a fresher or experienced developer. Engage with the most curated content on the internet a computer science developer. Manage and share your Arika legacy profile.",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mulish.className} ${ibm_plex_mono.variable} ${space_grotesk.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <NextTopLoader color="#8F00FF" showSpinner={false} />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
