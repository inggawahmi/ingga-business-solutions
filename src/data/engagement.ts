import { LocalizedText } from "@/types/language";

export interface EngagementModelBilingual {
  id: string;
  badge: LocalizedText;
  title: LocalizedText;
  targetAudience: LocalizedText;
  coreOutcome: LocalizedText;
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
    en: "Project scope, timeline, and investment are clarified before development begins."
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
    targetAudience: {
      id: "Untuk bisnis yang perlu tampil lebih meyakinkan dan menjelaskan layanan dengan lebih jelas.",
      en: "For businesses that need a stronger presence and a clearer way to present their services."
    },
    coreOutcome: {
      id: "Membantu calon pelanggan memahami keunggulan bisnis dan memulai komunikasi bisnis.",
      en: "Helps prospective customers understand your business value and initiate clear consultations."
    }
  },
  {
    id: "model-workflow",
    badge: { id: "Sisi Operasional", en: "Operations" },
    title: { id: "Perbaikan Proses Kerja", en: "Process Improvement" },
    targetAudience: {
      id: "Untuk bisnis yang ingin merapikan satu proses manual, lambat, atau sulit dipantau.",
      en: "For businesses that want to improve one manual, slow, or difficult-to-monitor process."
    },
    coreOutcome: {
      id: "Menghilangkan hambatan utama agar operasional harian berjalan lebih lancar.",
      en: "Eliminates operational bottlenecks so day-to-day work flows smoothly."
    }
  },
  {
    id: "model-erp",
    badge: { id: "Skala Perusahaan", en: "Enterprise Scale" },
    title: { id: "Sistem Perusahaan & ERP", en: "Business Systems & ERP" },
    targetAudience: {
      id: "Untuk perusahaan dengan beberapa proses yang saling berkaitan dan membutuhkan pengelolaan terpusat.",
      en: "For companies with connected operations that require structured and centralised management."
    },
    coreOutcome: {
      id: "Menyatukan alur kerja, data transaksi, dan pelaporan dalam satu sistem terpadu.",
      en: "Unifies workflows, transactional data, and reporting into one connected system."
    }
  }
];

export const WORKFLOW_STAGES_BILINGUAL = [
  {
    num: "01",
    title: { id: "Ceritakan Kebutuhan", en: "Tell Me What You Need" },
    desc: {
      id: "Diskusikan kondisi bisnis dan hasil yang ingin dicapai.",
      en: "Discuss your business situation and desired outcomes."
    }
  },
  {
    num: "02",
    title: { id: "Pemetaan Masalah", en: "Problem Mapping" },
    desc: {
      id: "Identifikasi proses prioritas untuk diperbaiki terlebih dahulu.",
      en: "Identify high-impact areas to improve first."
    }
  },
  {
    num: "03",
    title: { id: "Perancangan & Implementasi", en: "Design & Implementation" },
    desc: {
      id: "Solusi dibangun sesuai ruang lingkup dan proses yang disepakati.",
      en: "The solution is built around agreed scope and workflow."
    }
  },
  {
    num: "04",
    title: { id: "Review & Pendampingan", en: "Review & Ongoing Support" },
    desc: {
      id: "Uji coba sistem dan pendampingan hingga siap digunakan.",
      en: "System validation and rollout assistance for your team."
    }
  }
];

export const TRUST_POINTS_BILINGUAL: LocalizedText[] = [
  {
    id: "Pengalaman menangani sistem proses bisnis kompleks.",
    en: "Experience with complex business operations."
  },
  {
    id: "Komunikasi langsung dengan developer.",
    en: "Direct communication with the developer."
  },
  {
    id: "Ruang lingkup dan jadwal kerja transparan.",
    en: "Transparent project scope and milestones."
  },
  {
    id: "Pendampingan dan dukungan pasca peluncuran.",
    en: "Hands-on onboarding and support after launch."
  }
];
