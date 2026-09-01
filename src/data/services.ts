export interface ServiceItem {
  id: string;
  slug?: string;
  badge: string;
  title: string;
  summary: string;
  targetAudience: string;
  features: string[];
  deliverables: string[];
  ctaText: string;
  ctaLink: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-company-profile",
    badge: "Branding & Kredibilitas",
    title: "Website Bisnis & Company Profile",
    summary: "Bangun citra profesional yang meyakinkan calon klien dengan landing page cepat, mobile-friendly, dan conversion-focused.",
    targetAudience: "Perusahaan, jasa profesional, kontraktor, konsultan, dan bisnis B2B/B2C.",
    features: [
      "Desain modern, mobile-first & responsive",
      "Struktur halaman landing page & company profile",
      "Integrasi tombol WhatsApp & formulir inquiry",
      "Optimasi teknis SEO dasar & meta tag",
      "Bantuan setup domain & deployment hosting"
    ],
    deliverables: [
      "Website siap live",
      "Panduan pengelolaan konten dasar",
      "Konfigurasi DNS & SSL gratis"
    ],
    ctaText: "Konsultasikan Website Bisnis",
    ctaLink: "#contact"
  },
  {
    id: "cafe-umkm-menu",
    slug: "cafe-umkm",
    badge: "Kuliner & Retail",
    title: "Website Cafe & UMKM Kuliner",
    summary: "Bantu pelanggan menemukan menu, promo, lokasi cabang, dan alur pemesanan langsung ke WhatsApp tanpa biaya potongan komisi aplikasi.",
    targetAudience: "Cafe, coffee shop, restoran, bakery, katering, dan UMKM F&B.",
    features: [
      "Menu & katalog digital interaktif dengan foto & harga",
      "Informasi jam operasional & integrasi Google Maps",
      "Tombol WhatsApp Order dengan template pesanan otomatis",
      "Highlight menu favorit & banner promo berkala",
      "Tampilan ringan & cepat diakses dari link bio Instagram"
    ],
    deliverables: [
      "Website menu digital mobile-first",
      "Template pesan WhatsApp pemesanan",
      "QR Code siap cetak untuk meja cafe"
    ],
    ctaText: "Lihat Solusi Cafe & UMKM",
    ctaLink: "/solusi/cafe-umkm"
  },
  {
    id: "inventory-pos-system",
    slug: "inventory-pos",
    badge: "Operasional Toko & Gudang",
    title: "Sistem POS & Manajemen Inventory",
    summary: "Satukan pencatatan kasir, arus keluar-masuk barang, audit stok opname, dan laporan penjualan dalam satu aplikasi terintegrasi.",
    targetAudience: "Toko retail, distributor, gudang, cafe multi-outlet, dan manufaktur skala berkembang.",
    features: [
      "Aplikasi kasir penjualan (Point of Sales) cepat",
      "Master data produk, barcode, kategori & varian",
      "Pencatatan mutasi stok & riwayat transfer antar cabang",
      "Fitur Stock Opname digital (fisik vs data sistem)",
      "Laporan penjualan, omzet harian & laba kotor",
      "Role-based access (Hak akses kasir, supervisor, owner)"
    ],
    deliverables: [
      "Aplikasi POS & Inventory berbasis web/local server",
      "Dashboard admin & laporan ekspor data",
      "Sesi training penggunaan & dokumentasi alur"
    ],
    ctaText: "Lihat Solusi POS & Inventory",
    ctaLink: "/solusi/inventory-pos"
  },
  {
    id: "custom-erp-system",
    slug: "insurance-erp",
    badge: "Custom Engineering",
    title: "Custom ERP & Internal Business Application",
    summary: "Aplikasi custom yang dirancang mengikuti SOP internal unik perusahaan Anda—mulai dari approval berjenjang hingga rekonsiliasi keuangan.",
    targetAudience: "Perusahaan yang alur kerjanya tidak cocok dengan template software generic.",
    features: [
      "Alur approval dokumen berjenjang (multi-tier)",
      "Dashboard monitoring KPI & operasional bisnis",
      "Pencatatan invoice, pembayaran & akun piutang/utang",
      "Generate dokumen otomatis (PDF invoice, SPK, surat jalan)",
      "Integrasi REST API ke software atau database eksisting",
      "Audit trail log aktivitas user untuk keamanan data"
    ],
    deliverables: [
      "Sistem web enterprise tailored-made",
      "Arsitektur database relasional teroptimasi",
      "Dokumentasi teknis & SOP handover sistem"
    ],
    ctaText: "Lihat Solusi ERP & Enterprise",
    ctaLink: "/solusi/insurance-erp"
  },
  {
    id: "insurance-reinsurance-core",
    slug: "insurance-erp",
    badge: "Domain Khusus Asuransi",
    title: "Sistem Asuransi & Reasuransi",
    summary: "Sistem khusus untuk mendukung digitalisasi policy administration, placing reasuransi fakultatif/treaty, ledger premi, dan rekonsiliasi bank.",
    targetAudience: "Perusahaan asuransi umum, broker asuransi, dan broker reasuransi.",
    features: [
      "Policy Administration & penentuan rate risiko",
      "Workflow placing reasuransi (Facultative & Treaty)",
      "Penerbitan Debit Note, Credit Note & Statement of Account (SOA)",
      "Ledger multi-currency & rekonsiliasi mutasi bank",
      "Matching AR/AP penagihan premi ke ceding & reasuradur",
      "Export laporan statistik pertanggungan & klaim"
    ],
    deliverables: [
      "Core workflow system sesuai regulasi industri",
      "Precision calculation engine (arbitrary decimal precision)",
      "Security hardening & database ACID audit trail"
    ],
    ctaText: "Diskusikan Sistem Asuransi",
    ctaLink: "/solusi/insurance-erp"
  }
];
