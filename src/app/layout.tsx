import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
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
  title: "Albert Salgueda — AI Engineer & Builder",
  description:
    "Co-founder of Altan. Building AI agents and enterprise software.",
  openGraph: {
    title: "Albert Salgueda — AI Engineer & Builder",
    description:
      "Co-founder of Altan. Building AI agents and enterprise software.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Salgueda — AI Engineer & Builder",
    description:
      "Co-founder of Altan. Building AI agents and enterprise software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <Header />
          <main className="mx-auto max-w-2xl px-6 pb-24 pt-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
