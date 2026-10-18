import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { faqs } from "@/lib/content";

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
    default: "TailorPro — Best Tailor Shop Management & Digital Measurement App",
    template: "%s — TailorPro"
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  category: "BusinessApplication",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: site.url,
    siteName: site.name,
    title: "TailorPro — Best Tailor Shop Management & Digital Measurement App",
    description: site.description,
    images: [
      {
        url: "/logo-wide.png",
        width: 1920,
        height: 600,
        alt: "TailorPro — Best Tailor Shop Management & Digital Measurement App for Boutiques & Master Cutters",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TailorPro — Best Tailor Shop Management & Digital Measurement App",
    description: site.description,
    images: [
      {
        url: "/logo-wide.png",
        alt: "TailorPro — Best Tailor Shop Management & Digital Measurement App for Boutiques & Master Cutters"
      }
    ],
    creator: "@tailorproapp",
    site: "@tailorproapp"
  },
  icons: {
    icon: [
      { url: "/app-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/app-icon.png", sizes: "512x512", type: "image/png" }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "hi-IN": "/"
    }
  },
  other: {
    "geo.region": site.geo.region,
    "geo.placename": site.geo.placename,
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    "ICBM": `${site.geo.latitude}, ${site.geo.longitude}`
  }
};

import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SoftwareApplication", "MobileApplication"],
        "@id": `${site.url}/#app`,
        name: site.name,
        alternateName: [
          "Tailor Pro",
          "TailorPro App",
          "Darzi Measurement Book",
          "Tailor Shop Management App",
          "Darzi Khata Book"
        ],
        applicationCategory: site.category,
        operatingSystem: site.operatingSystem,
        downloadUrl: site.playStoreUrl,
        installUrl: site.playStoreUrl,
        url: site.url,
        image: `${site.url}/app-icon.png`,
        screenshot: `${site.url}/logo-wide.png`,
        description: site.description,
        softwareVersion: site.version,
        price: site.priceAmount,
        priceCurrency: site.priceCurrency,
        offers: {
          "@type": "Offer",
          price: site.priceAmount,
          priceCurrency: site.priceCurrency,
          category: "Free",
          availability: "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.toFixed(1),
          ratingCount: site.reviewsCount,
          reviewCount: site.reviewsCount,
          bestRating: "5",
          worstRating: "1"
        },
        featureList: [
          "Customer profile directory and contact book",
          "Garment measurement templates (Kurta, Sherwani, Pant, Safari, Suit, Blouse)",
          "Instant WhatsApp PDF measurement slips for karigars",
          "Digital tailoring bill and advance payment tracking",
          "Real-time order delivery status & reminder alerts",
          "Fast offline-friendly shop floor register"
        ],
        author: {
          "@id": `${site.url}/#organization`
        },
        publisher: {
          "@id": `${site.url}/#organization`
        }
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/app-icon.png`,
          caption: `${site.name} Logo`,
          width: 512,
          height: 512
        },
        image: `${site.url}/logo-wide.png`,
        description: site.description,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vijay Nagar",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          addressCountry: "IN"
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone,
            contactType: "customer support",
            email: site.email,
            areaServed: "IN",
            availableLanguage: ["en", "hi"]
          }
        ],
        sameAs: [
          site.social.instagram,
          site.social.twitter,
          site.social.linkedin,
          site.playStoreUrl
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url
          }
        ]
      }
    ]
  };

  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body className="font-body antialiased bg-ink text-cream overflow-x-hidden bg-hero-glow bg-fixed">
        <ScrollProgress />
        <CustomCursor />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

