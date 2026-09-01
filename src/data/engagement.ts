export interface EngagementModel {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  steps: string[];
  recommendedFor: string;
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: "digital-presence",
    badge: "Sisi Depan",
    title: "Digital Presence Project",
    tagline: "Untuk bisnis yang perlu tampil lebih profesional dan memperjelas informasi bagi calon customer.",
    description: "Membangun identitas digital yang solid dan terstruktur agar calon pembeli dapat mempelajari layanan Anda secara mandiri dan mengambil keputusan dengan cepat.",
    steps: [
      "Memahami bisnis dan target customer",
      "Menyusun struktur informasi & konten",
      "Mendesain dan membangun website",
      "Review, peluncuran, dan handover"
    ],
    recommendedFor: "Company profile, bisnis jasa, vendor corporate, F&B & UMKM berkembang."
  },
  {
    id: "workflow-improvement",
    badge: "Sisi Operasional",
    title: "Workflow Improvement",
    tagline: "Untuk bisnis yang memiliki satu proses manual, lambat, atau sulit dipantau.",
    description: "Fokus merapikan satu titik hambatan (bottleneck) utama seperti otomasi quotation, approval berjenjang, atau pencatatan mutasi stok internal.",
    steps: [
      "Memetakan proses kerja saat ini",
      "Menentukan bottleneck utama",
      "Merancang solusi untuk satu workflow",
      "Implementasi, training, dan evaluasi"
    ],
    recommendedFor: "Bisnis berkembang yang ingin mengurangi ketergantungan pada spreadsheet terpisah."
  },
  {
    id: "custom-erp",
    badge: "Enterprise & Multi-Workflow",
    title: "Custom System & ERP",
    tagline: "Untuk bisnis atau perusahaan dengan proses yang lebih luas dan saling berkaitan.",
    description: "Sistem terpadu berskala penuh yang menghubungkan operasional lintas divisi, kontrol hak akses data, kalkulasi transaksi kompleks, dan laporan audit.",
    steps: [
      "Discovery & requirement mapping",
      "Penentuan scope dan tahapan modul",
      "Implementasi bertahap & database design",
      "User testing, training & pendampingan paska rilis"
    ],
    recommendedFor: "Perusahaan dengan transaksi multi-mata uang, broker insurance/reinsurance, dan manufaktur."
  }
];
