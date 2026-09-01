import { BUSINESS_CONFIG } from "./business";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_CONFIG = {
  name: BUSINESS_CONFIG.brand,
  title: "Website, Sistem Bisnis & ERP Custom | Ingga Business Solutions",
  description:
    "Pembuatan website profesional, sistem bisnis custom, dan ERP untuk membantu bisnis tampil lebih meyakinkan serta menjalankan operasional dengan lebih rapi. Berpengalaman menangani ERP insurance dan reinsurance.",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
};
