import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#07130f",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/logo-wide.png",
        width: 1920,
        height: 600,
        alt: `${site.name} — ${site.tagline}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/logo-wide.png"]
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android",
    description: site.description,
    url: site.url,
    image: `${site.url}/app-icon.png`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR"
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      email: site.email
    }
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body className="font-body antialiased bg-ink text-cream overflow-x-hidden bg-hero-glow bg-fixed">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
