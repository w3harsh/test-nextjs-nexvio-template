import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NexvioWidget } from "@/components/NexvioWidget";
import { getNexvioEnv } from "@/lib/nexvio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js + Nexvio — Give Your Website an AI Assistant",
  description: "Integrate Nexvio with a simple widget and give your users an intelligent AI assistant in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { publicKey, frameBaseUrl } = getNexvioEnv();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <NexvioWidget publicKey={publicKey} frameBaseUrl={frameBaseUrl} />
        </ThemeProvider>
      </body>
    </html>
  );
}
