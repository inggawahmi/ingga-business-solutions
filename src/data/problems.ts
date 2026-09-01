import { LocalizedText } from "@/types/language";

export interface ProblemSignalBilingual {
  num: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const PROBLEM_SECTION_HEADER: {
  eyebrow: LocalizedText;
  heading: LocalizedText;
  subheadline: LocalizedText;
  closing: LocalizedText;
} = {
  eyebrow: {
    id: "Apakah Ini Terjadi di Bisnis Anda?",
    en: "Is This Happening in Your Business?"
  },
  heading: {
    id: "Bisnis Sudah Berjalan, tetapi Prosesnya Belum Benar-Benar Terhubung",
    en: "The Business Is Running, but the Process Is Still Disconnected"
  },
  subheadline: {
    id: "Semakin bisnis berkembang, semakin sulit mengandalkan chat, spreadsheet, dan pencatatan yang tersebar.",
    en: "As a business grows, relying on chat threads, spreadsheets, and fragmented notes creates friction."
  },
  closing: {
    id: "Tidak semua masalah membutuhkan sistem besar. Memperbaiki satu proses yang tepat sering kali menjadi langkah awal yang paling masuk akal.",
    en: "Not every problem requires a large system. Improving one critical process is often the most practical place to start."
  }
};

export const PROBLEM_SIGNALS_BILINGUAL: ProblemSignalBilingual[] = [
  {
    num: "01",
    title: {
      id: "Informasi bisnis belum meyakinkan",
      en: "The business is difficult to understand"
    },
    description: {
      id: "Layanan, portofolio, dan informasi penting tersebar sehingga calon pelanggan kesulitan memahami bisnis Anda.",
      en: "Services, work examples, and important information are scattered across different platforms."
    }
  },
  {
    num: "02",
    title: {
      id: "Data dicatat berulang kali",
      en: "The same data is entered repeatedly"
    },
    description: {
      id: "Informasi yang sama dipindahkan antara chat, spreadsheet, dokumen, dan aplikasi lain.",
      en: "Information moves manually between chat, spreadsheets, documents, and separate applications."
    }
  },
  {
    num: "03",
    title: {
      id: "Persetujuan dan tindak lanjut terlambat",
      en: "Approvals and follow-ups are delayed"
    },
    description: {
      id: "Keputusan penting bergantung pada percakapan yang mudah tenggelam dan sulit ditelusuri.",
      en: "Important decisions depend on conversations that are difficult to track."
    }
  },
  {
    num: "04",
    title: {
      id: "Laporan masih dibuat manual",
      en: "Reports still take manual effort"
    },
    description: {
      id: "Tim menghabiskan waktu mengumpulkan data sebelum pimpinan dapat melihat kondisi bisnis.",
      en: "The team spends time compiling data before management can see what is happening."
    }
  }
];
