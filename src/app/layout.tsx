import type { Metadata } from "next";
import "./globals.css";

const title = "albert salgueda";
const description = "building ai agents & creative ai at krea, san francisco.";
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
    siteName: title,
  },
  twitter: {
    card: "summary",
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
    <html lang="en">
      <body className="bg-black text-neutral-200 antialiased">{children}</body>
    </html>
  );
}
