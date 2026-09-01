import { BUSINESS_CONFIG } from "./business";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_CONFIG = {
  name: BUSINESS_CONFIG.brand,
  title: "Jasa Website & Sistem Bisnis Jabodetabek | Ingga Web & Business Systems",
  description:
    "Jasa pembuatan website, company profile, menu digital, POS, inventory, custom ERP, serta sistem asuransi dan reasuransi untuk bisnis di Jabodetabek.",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
};
