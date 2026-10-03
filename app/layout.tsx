import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
  metadataBase: new URL("https://muslimpreneur.netlify.app"),

  title: {
    default: "Muslimpreneur — The Launch System for Muslim Entrepreneurs",
    template: "%s — Muslimpreneur",
  },

  description:
    "A complete launch system, SOPs, and frameworks for Muslim entrepreneurs building their first business.",

  keywords: [
    "Muslim entrepreneur",
    "Muslim founder",
    "halal business",
    "Muslim business",
    "entrepreneurship",
  ],

  authors: [{ name: "Zeiyn" }],

  openGraph: {
    type: "website",
    siteName: "Muslimpreneur",
    title: "Muslimpreneur — The Launch System for Muslim Entrepreneurs",
    description:
      "A complete launch system, SOPs, and frameworks for Muslim entrepreneurs building their first business.",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muslimpreneur — The Launch System for Muslim Entrepreneurs",
    description:
      "A complete launch system, SOPs, and frameworks for Muslim entrepreneurs building their first business.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}