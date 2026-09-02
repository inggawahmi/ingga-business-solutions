import { LocalizedText } from "@/types/language";

export interface FaqItemBilingual {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export const FAQ_HEADER = {
  eyebrow: {
    id: "Tanya Jawab Seputar Layanan",
    en: "Frequently Asked Questions"
  },
  heading: {
    id: "Pertanyaan yang Sering Diajukan",
    en: "Common Questions"
  },
  subheadline: {
    id: "Jawaban singkat seputar kebutuhan awal dan dukungan sistem.",
    en: "Clear answers on getting started and ongoing support."
  }
};

export const FAQ_DATA_BILINGUAL: FaqItemBilingual[] = [
  {
    id: "faq-1",
    question: {
      id: "Harus sudah punya kebutuhan teknis?",
      en: "Do I need technical specs ready?"
    },
    answer: {
      id: "Tidak. Diskusi dimulai dari masalah alur kerja. Kebutuhan teknis disusun bersama.",
      en: "No. Discussions start from your workflow. Technical specs are shaped together."
    }
  },
  {
    id: "faq-2",
    question: {
      id: "Bisa mengikuti proses bisnis yang ada?",
      en: "Can the system fit existing SOPs?"
    },
    answer: {
      id: "Bisa. Sistem custom dirancang mengikuti alur bisnis Anda, bukan sebaliknya.",
      en: "Yes. Custom software adapts to your SOPs rather than generic limitations."
    }
  },
  {
    id: "faq-3",
    question: {
      id: "Bisa mulai dari satu alur kerja dulu?",
      en: "Can we start with one workflow?"
    },
    answer: {
      id: "Bisa. Banyak klien memulai dari proses mendesak, lalu berkembang bertahap.",
      en: "Yes. Many clients start with priority bottlenecks before expanding gradually."
    }
  },
  {
    id: "faq-4",
    question: {
      id: "Apakah ada dukungan setelah peluncuran?",
      en: "Is ongoing support provided?"
    },
    answer: {
      id: "Ada. Setiap proyek mencakup pendampingan peluncuran, pelatihan tim, dan garansi.",
      en: "Yes. Every project includes rollout guidance, user training, and warranty fixes."
    }
  },
  {
    id: "faq-5",
    question: {
      id: "Bagaimana menentukan biaya dan jadwal?",
      en: "How are timeline and cost determined?"
    },
    answer: {
      id: "Biaya dan jadwal dihitung transparan sesuai ruang lingkup yang disepakati.",
      en: "Investment and timeline are calculated transparently from agreed project scope."
    }
  }
];
