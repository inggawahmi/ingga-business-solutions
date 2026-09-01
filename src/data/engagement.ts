export interface EngagementPlan {
  id: string;
  badge: string;
  name: string;
  description: string;
  bestFor: string[];
  features: string[];
  ctaText: string;
  ctaSource: string;
  isPopular?: boolean;
}

export const ENGAGEMENT_PLANS: EngagementPlan[] = [
  {
    id: "starter",
    badge: "Solusi Cepat & Efisien",
    name: "Website Starter",
    description: "Landing page modern dan cepat untuk bisnis yang ingin memiliki kehadiran digital resmi dan mempermudah pelanggan menghubungi via WhatsApp.",
    bestFor: [
      "Cafe & Coffee Shop baru",
      "UMKM Makanan & Minuman",
      "Personal Business & Jasa",
      "Landing Page Campaign Promo"
    ],
    features: [
      "1 Halaman Landing Page responsif (Mobile & Desktop)",
      "Navigasi menu / highlight produk unggulan",
      "Tombol WhatsApp Order & Form Kontak",
      "Integrasi Google Maps lokasi bisnis",
      "Optimasi teknis SEO dasar & Social Share preview",
      "Bantuan setup domain & deployment"
    ],
    ctaText: "Diskusikan Website Starter",
    ctaSource: "engagement-starter"
  },
  {
    id: "growth",
    badge: "Paling Diminati Bisnis Berkembang",
    name: "Business Growth",
    description: "Solusi lengkap untuk bisnis yang membutuhkan katalog produk interaktif, company profile multi-halaman, atau alur pemesanan yang lebih terstruktur.",
    bestFor: [
      "Cafe dengan banyak kategori menu",
      "Distributor & Bisnis Retail",
      "Company Profile Multi-Cabang",
      "Lead Generation Bisnis B2B"
    ],
    features: [
      "Struktur multi-halaman (Profil, Menu/Katalog, Kontak, FAQ)",
      "Digital Menu/Katalog interaktif dengan filter kategori & search",
      "Template WhatsApp Order terstruktur per produk",
      "Panel kelola konten dasar jika dibutuhkan",
      "Optimasi kecepatan & Technical SEO",
      "Handover & panduan pembaruan konten"
    ],
    ctaText: "Diskusikan Business Growth",
    ctaSource: "engagement-growth",
    isPopular: true
  },
  {
    id: "custom-system",
    badge: "Solusi Custom Operasional",
    name: "Custom Business System",
    description: "Sistem aplikasi internal yang dibangun dari nol sesuai SOP bisnis Anda untuk merapikan pencatatan, stok, kasir, atau workflow enterprise.",
    bestFor: [
      "Bisnis dengan pencatatan stok manual",
      "Retail & Restoran butuh POS terintegrasi",
      "Perusahaan butuh modul Approval & Invoicing",
      "Sistem Asuransi, Reasuransi, & Finance"
    ],
    features: [
      "Modul POS Kasir / Manajemen Inventory / ERP",
      "Fitur Audit Stock Opname (fisik vs data sistem)",
      "Role-Based Access Control (Kasir, Supervisor, Manager, Owner)",
      "Dashboard monitoring omzet, stok tipis & laporan laba",
      "Dokumen otomatis (Invoice PDF, Surat Jalan, Rekonsiliasi)",
      "Integrasi API & database relasional berkinerja tinggi"
    ],
    ctaText: "Jadwalkan Pembahasan Scope",
    ctaSource: "engagement-custom"
  }
];

export const ENGAGEMENT_NOTE = "Biaya dan estimasi pengerjaan disesuaikan dengan fitur, integrasi, serta kompleksitas workflow.";
