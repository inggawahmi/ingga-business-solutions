import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, SITE_URL } from "@/config/site";
import { BUSINESS_CONFIG } from "@/config/business";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${BUSINESS_CONFIG.brand}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "jasa website cafe",
    "jasa website umkm",
    "menu digital whatsapp",
    "jasa pos kasir bekasi",
    "sistem inventory gudang",
    "custom erp jakarta",
    "sistem asuransi reasuransi",
    "website profesional jabodetabek"
  ],
  authors: [{ name: BUSINESS_CONFIG.owner }],
  creator: BUSINESS_CONFIG.owner,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: BUSINESS_CONFIG.brand,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Accurate JSON-LD schema without fake ratings or fake reviews
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS_CONFIG.brand,
    description: SITE_CONFIG.description,
    url: SITE_URL,
    telephone: `+${BUSINESS_CONFIG.whatsapp}`,
    email: BUSINESS_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bekasi",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "City", name: "Bekasi" },
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bogor" },
      { "@type": "Country", name: "Indonesia" }
    ],
    founder: {
      "@type": "Person",
      name: BUSINESS_CONFIG.owner,
      jobTitle: "Fullstack Developer & Technical Lead"
    }
  };

  return (
    <html lang="id" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
