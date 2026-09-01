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
    id: "Jawaban singkat seputar kebutuhan awal, penyesuaian alur, tahapan pengerjaan, dan dukungan sistem.",
    en: "Clear answers on getting started, process customization, project phases, and ongoing support."
  }
};

export const FAQ_DATA_BILINGUAL: FaqItemBilingual[] = [
  {
    id: "faq-1",
    question: {
      id: "Apakah saya harus sudah memiliki kebutuhan teknis?",
      en: "Do I need to have formal technical requirements ready?"
    },
    answer: {
      id: "Tidak. Pembahasan dapat dimulai dari masalah dan proses kerja saat ini. Kebutuhan teknis disusun bersama setelah masalah bisnis dipahami.",
      en: "No. Discussions start from your business problem and current workflow. Technical specifications are shaped together after understanding your needs."
    }
  },
  {
    id: "faq-2",
    question: {
      id: "Apakah sistem dapat mengikuti proses bisnis yang sudah berjalan?",
      en: "Can the system adapt to our existing business process?"
    },
    answer: {
      id: "Ya. Sistem custom menyesuaikan aplikasi dengan alur kerja bisnis Anda, bukan memaksa tim beradaptasi dengan batasan aplikasi siap pakai.",
      en: "Yes. Custom development means building around your established SOPs, rather than forcing your team into generic software limitations."
    }
  },
  {
    id: "faq-3",
    question: {
      id: "Apakah bisa memulai dari satu proses kerja terlebih dahulu?",
      en: "Can we start with just one specific workflow first?"
    },
    answer: {
      id: "Tentu. Banyak klien memulai dari proses yang paling mendesak (seperti penawaran harga atau mutasi persediaan), lalu berkembang bertahap.",
      en: "Absolutely. Many clients start with their most urgent bottleneck (such as quotations or inventory transfers) before expanding gradually."
    }
  },
  {
    id: "faq-4",
    question: {
      id: "Apakah tersedia dukungan setelah sistem digunakan?",
      en: "Is support provided after the system goes live?"
    },
    answer: {
      id: "Ya. Setiap proyek mencakup pendampingan implementasi, pelatihan tim, garansi perbaikan, serta opsi pemeliharaan berkala.",
      en: "Yes. Every project includes rollout guidance, team training, warranty fixes, and ongoing maintenance options."
    }
  },
  {
    id: "faq-5",
    question: {
      id: "Bagaimana menentukan biaya dan waktu pengerjaan?",
      en: "How are project investment and timeline determined?"
    },
    answer: {
      id: "Biaya dan jadwal dihitung transparan berdasarkan ruang lingkup pekerjaan yang disepakati bersama setelah sesi diskusi awal.",
      en: "Timeline and investment are calculated transparently from the agreed scope of work after our initial discovery session."
    }
  }
];
