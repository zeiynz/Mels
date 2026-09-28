import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://muslimpreneur.netlify.app";
const SITE_NAME = "Muslimpreneur";
const TITLE = "Muslimpreneur - The Launch System for Muslim Entrepreneurs";
const DESCRIPTION =
  "A complete Notion system, SOPs, and frameworks for Muslim founders in the US and EU starting their first business. Built from real experience, not generic templates.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s — ${SITE_NAME}` },
  description: DESCRIPTION,
  keywords: [
    "muslim entrepreneur",
    "muslim entrepreneur launch system",
    "muslim business system",
    "halal business framework",
    "muslim founder playbook",
    "notion system for entrepreneurs",
  ],
  authors: [{ name: "Zeiyn", url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@iamzeiyn",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

// Structured data so Google can render this as a Product/Organization rich result.
// Keep in sync with SITE_URL/SITE_NAME/DESCRIPTION above — no separate source of truth.
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        sameAs: ["https://instagram.com/iamzeiyn", "https://www.threads.com/@iamzeiyn"],
      },
      {
        "@type": "Product",
        name: "Muslim Entrepreneur Launch System",
        description: DESCRIPTION,
        brand: { "@id": `${SITE_URL}/#org` },
        offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}