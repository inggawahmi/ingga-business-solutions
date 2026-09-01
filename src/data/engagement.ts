import { LocalizedText } from "@/types/language";

export interface EngagementModelBilingual {
  id: string;
  badge: LocalizedText;
  title: LocalizedText;
  tagline: LocalizedText;
  steps: LocalizedText[];
}

export const ENGAGEMENT_HEADER = {
  eyebrow: {
    id: "Model Kerja Sama",
    en: "Engagement Models"
  },
  heading: {
    id: "Sesuai dengan Skala & Tahapan Bisnis",
    en: "Tailored to Your Stage and Scale"
  },
  subheadline: {
    id: "Setiap proyek dimulai dengan memahami masalahnya, bukan langsung menentukan teknologinya.",
    en: "Every project starts with understanding the problem, not prescribing technology upfront."
  },
  processHeading: {
    id: "Cara Kerja yang Jelas dari Awal",
    en: "A Clear and Predictable Process"
  },
  processSub: {
    id: "Ruang lingkup, waktu pengerjaan, dan biaya dijelaskan sebelum pengerjaan dimulai.",
    en: "Project scope, timeline, and investment are clarified before any development begins."
  },
  trustStatement: {
    id: "Tujuannya bukan membuat sistem dengan fitur sebanyak mungkin, tetapi membangun solusi yang benar-benar dapat digunakan oleh bisnis.",
    en: "The goal is not to build as many features as possible, but to deliver a solution your business actually uses with confidence."
  }
};

export const ENGAGEMENT_MODELS_BILINGUAL: EngagementModelBilingual[] = [
  {
    id: "model-website",
    badge: { id: "Sisi Depan", en: "Customer-Facing" },
    title: { id: "Website Profesional", en: "Professional Website" },
    tagline: {
      id: "Untuk bisnis yang perlu tampil lebih meyakinkan dan menjelaskan layanan dengan lebih baik.",
      en: "For businesses that need a stronger presence and a clearer way to present their services."
    },
    steps: [
      { id: "Memahami bisnis dan pelanggan", en: "Understand business and target customers" },
      { id: "Menyusun struktur informasi", en: "Structure content and message hierarchy" },
      { id: "Mendesain dan membangun website", en: "Design and build responsive website" },
      { id: "Review, peluncuran, dan serah terima", en: "Review, launch, and handover" }
    ]
  },
  {
    id: "model-workflow",
    badge: { id: "Sisi Operasional", en: "Operations" },
    title: { id: "Perbaikan Proses Kerja", en: "Process Improvement" },
    tagline: {
      id: "Untuk bisnis yang memiliki satu proses manual, lambat, atau sulit dipantau.",
      en: "For businesses with one manual, slow, or difficult-to-monitor process."
    },
    steps: [
      { id: "Memetakan proses saat ini", en: "Map the current workflow and bottlenecks" },
      { id: "Menentukan hambatan utama", en: "Identify priority points of failure" },
      { id: "Membuat solusi untuk satu proses", en: "Build a focused solution for that process" },
      { id: "Uji coba, pelatihan, dan evaluasi", en: "User testing, training, and review" }
    ]
  },
  {
    id: "model-erp",
    badge: { id: "Skala Perusahaan", en: "Enterprise Scale" },
    title: { id: "Sistem Perusahaan & ERP", en: "Business Systems & ERP" },
    tagline: {
      id: "Untuk perusahaan dengan beberapa proses yang saling berkaitan dan membutuhkan pengelolaan terpusat.",
      en: "For companies with connected operations that require structured and centralised management."
    },
    steps: [
      { id: "Memetakan kebutuhan perusahaan", en: "Discovery and requirement mapping" },
      { id: "Menentukan ruang lingkup dan prioritas", en: "Define phased scope and roadmap" },
      { id: "Implementasi bertahap", en: "Phased engineering and data integration" },
      { id: "Uji coba, pelatihan, dan pendampingan", en: "Testing, staff training, and support" }
    ]
  }
];

export const WORKFLOW_STAGES_BILINGUAL = [
  {
    num: "01",
    title: { id: "Ceritakan Kebutuhan", en: "Tell Me What You Need" },
    desc: {
      id: "Diskusikan kondisi bisnis, proses sekarang, dan hasil yang ingin dicapai.",
      en: "Discuss your business situation, current workflows, and the desired outcome."
    }
  },
  {
    num: "02",
    title: { id: "Pemetaan Masalah", en: "Problem Mapping" },
    desc: {
      id: "Identifikasi bagian yang paling penting untuk diperbaiki terlebih dahulu.",
      en: "Identify the highest-impact area to improve first."
    }
  },
  {
    num: "03",
    title: { id: "Perancangan & Implementasi", en: "Design & Implementation" },
    desc: {
      id: "Solusi dibuat berdasarkan ruang lingkup, prioritas, dan proses yang disepakati.",
      en: "The solution is built around agreed scope, priorities, and workflow."
    }
  },
  {
    num: "04",
    title: { id: "Review & Pendampingan", en: "Review & Ongoing Support" },
    desc: {
      id: "Sistem diuji bersama pengguna, diperbaiki, lalu didampingi hingga siap digunakan.",
      en: "The system is validated with your team and supported through live adoption."
    }
  }
];

export const TRUST_POINTS_BILINGUAL: LocalizedText[] = [
  {
    id: "Pengalaman menangani sistem dengan proses bisnis kompleks.",
    en: "Experience building systems with complex business rules."
  },
  {
    id: "Komunikasi langsung dengan developer tanpa perantara.",
    en: "Direct communication with the developer without middlemen."
  },
  {
    id: "Ruang lingkup dan progress pengerjaan yang transparan.",
    en: "Transparent project scope, milestones, and progress updates."
  },
  {
    id: "Pendampingan dan dukungan setelah sistem digunakan.",
    en: "Hands-on onboarding and support after launch."
  }
];
