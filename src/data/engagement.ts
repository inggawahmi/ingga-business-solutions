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
    id: "Sesuai Skala & Tahapan Bisnis",
    en: "Tailored to Your Stage and Scale"
  },
  subheadline: {
    id: "Pendekatan terstruktur yang dimulai dari memahami masalah bisnis.",
    en: "A structured approach that starts from understanding your business problem."
  },
  processHeading: {
    id: "Cara Kerja Terarah",
    en: "A Clear Process"
  },
  processSub: {
    id: "Ruang lingkup dan jadwal disepakati sebelum pengerjaan.",
    en: "Scope and timeline are agreed upon before development."
  },
  trustStatement: {
    id: "Fokus kami membangun solusi tepat guna yang benar-benar digunakan tim.",
    en: "Our focus is delivering practical solutions your business actually uses."
  }
};

export const ENGAGEMENT_MODELS_BILINGUAL: EngagementModelBilingual[] = [
  {
    id: "model-website",
    badge: { id: "Sisi Depan", en: "Customer-Facing" },
    title: { id: "Website Profesional", en: "Professional Website" },
    targetAudience: {
      id: "Untuk bisnis yang butuh tampil meyakinkan dan memperjelas layanan.",
      en: "For businesses needing a credible presence and clear service presentation."
    },
    coreOutcome: {
      id: "Membantu pelanggan memahami keunggulan dan mulai konsultasi.",
      en: "Helps prospects understand your value and initiate direct consultations."
    }
  },
  {
    id: "model-workflow",
    badge: { id: "Sisi Operasional", en: "Operations" },
    title: { id: "Perbaikan Proses Kerja", en: "Process Improvement" },
    targetAudience: {
      id: "Untuk merapikan proses manual yang lambat atau sulit dipantau.",
      en: "For improving slow, manual, or untracked operational processes."
    },
    coreOutcome: {
      id: "Menghilangkan hambatan agar operasional harian lebih lancar.",
      en: "Eliminates key bottlenecks for smooth daily operations."
    }
  },
  {
    id: "model-erp",
    badge: { id: "Skala Perusahaan", en: "Enterprise Scale" },
    title: { id: "Sistem Perusahaan & ERP", en: "Business Systems & ERP" },
    targetAudience: {
      id: "Untuk perusahaan yang membutuhkan sistem operasional terpusat.",
      en: "For companies with connected operations requiring a centralized system."
    },
    coreOutcome: {
      id: "Menyatukan alur kerja, data, dan pelaporan.",
      en: "Unifies workflows, transactional data, and operational reporting."
    }
  }
];

export const WORKFLOW_STAGES_BILINGUAL = [
  {
    num: "01",
    title: { id: "Ceritakan Kebutuhan", en: "Discovery" },
    desc: {
      id: "Diskusikan kondisi dan target bisnis.",
      en: "Discuss your business situation and target goals."
    }
  },
  {
    num: "02",
    title: { id: "Pemetaan Alur", en: "Mapping" },
    desc: {
      id: "Identifikasi proses prioritas untuk diperbaiki.",
      en: "Identify priority workflows to improve first."
    }
  },
  {
    num: "03",
    title: { id: "Perancangan & Bangun", en: "Build" },
    desc: {
      id: "Solusi dibangun sesuai ruang lingkup yang disepakati.",
      en: "The solution is built around agreed scope."
    }
  },
  {
    num: "04",
    title: { id: "Uji Coba & Dampingi", en: "Rollout" },
    desc: {
      id: "Validasi sistem dan pendampingan penggunaan.",
      en: "System validation and hands-on rollout support."
    }
  }
];

export const TRUST_POINTS_BILINGUAL: LocalizedText[] = [
  {
    id: "Pengalaman sistem proses bisnis kompleks",
    en: "Complex business systems experience"
  },
  {
    id: "Komunikasi langsung dengan developer",
    en: "Direct developer communication"
  },
  {
    id: "Ruang lingkup dan jadwal transparan",
    en: "Transparent scope and milestones"
  },
  {
    id: "Pendampingan langsung pasca peluncuran",
    en: "Hands-on post-launch support"
  }
];
