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
      id: "Apakah saya harus sudah memiliki requirement teknis?",
      en: "Do I need to have formal technical requirements ready?"
    },
    answer: {
      id: "Tidak. Pembahasan dapat dimulai dari masalah, proses kerja saat ini, dan hasil yang ingin dicapai. Requirement teknis disusun setelah kebutuhan bisnis dipahami bersama.",
      en: "No. Discussions start from your business problem, current workflow, and desired outcomes. Technical specifications are shaped after understanding your operational needs."
    }
  },
  {
    id: "faq-2",
    question: {
      id: "Apakah sistem dapat mengikuti proses bisnis yang sudah berjalan?",
      en: "Can the system adapt to our existing business process?"
    },
    answer: {
      id: "Ya. Prinsip utama sistem custom adalah menyesuaikan aplikasi dengan alur kerja bisnis Anda, bukan memaksa tim Anda beradaptasi dengan keterbatasan software siap pakai.",
      en: "Yes. Custom development means building around your established SOPs, rather than forcing your team to fit into generic off-the-shelf software limitations."
    }
  },
  {
    id: "faq-3",
    question: {
      id: "Apakah bisa memulai dari satu workflow terlebih dahulu?",
      en: "Can we start with just one specific workflow first?"
    },
    answer: {
      id: "Tentu. Banyak klien memulai dari proses yang paling mendesak (misalnya otomasi penawaran harga, alur persetujuan, atau mutasi persediaan), kemudian berkembang ke modul lainnya secara bertahap.",
      en: "Absolutely. Many clients start with their biggest bottleneck (such as quotation automation, approval flows, or inventory control) before expanding into wider modules."
    }
  },
  {
    id: "faq-4",
    question: {
      id: "Apakah tersedia dukungan setelah sistem digunakan?",
      en: "Is support provided after the system goes live?"
    },
    answer: {
      id: "Ya. Setiap proyek mencakup pendampingan implementasi, pelatihan penggunaan bagi tim Anda, serta garansi perbaikan dan kesiapan pemeliharaan jangka panjang.",
      en: "Yes. Every engagement includes rollout support, user training for your team, warranty bug fixes, and long-term maintenance readiness."
    }
  },
  {
    id: "faq-5",
    question: {
      id: "Bagaimana menentukan biaya dan waktu pengerjaan?",
      en: "How are project investment and timeline determined?"
    },
    answer: {
      id: "Biaya dan waktu pengerjaan dihitung berdasarkan ruang lingkup pekerjaan yang telah disepakati bersama setelah sesi diskusi awal, tanpa biaya tersembunyi.",
      en: "Timeline and investment are calculated directly from the agreed scope of work after our discovery discussion, with full transparency."
    }
  }
];
