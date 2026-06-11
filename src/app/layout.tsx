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

const title = "Albert Salgueda — Building AI agents at Krea";
const description =
  "Albert Salgueda builds AI agents and creative AI at Krea. Ships agent memory, autonomous research tools, and custom agent setups for teams.";
const url = "https://albertsalgueda.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url,
    siteName: "Albert Salgueda",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@albertsalgueda",
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
          <main className="mx-auto max-w-2xl px-5 pb-24 pt-8 sm:px-6 sm:pt-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
