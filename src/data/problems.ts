import { LocalizedText } from "@/types/language";

export interface ProblemSignalBilingual {
  num: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const PROBLEM_SECTION_HEADER = {
  eyebrow: {
    id: "Kendala Operasional",
    en: "Operational Friction"
  },
  heading: {
    id: "Bisnis Berjalan, tetapi Proses Belum Terhubung",
    en: "The Business Is Running, but Processes Are Disconnected"
  },
  subheadline: {
    id: "Mengandalkan chat dan catatan terpisah memperlambat operasional bisnis.",
    en: "Relying on chat and separate notes slows down operations."
  },
  closing: {
    id: "Memperbaiki satu proses kunci adalah langkah awal yang paling berdampak.",
    en: "Improving one key process is often the most practical start."
  }
};

export const PROBLEM_SIGNALS_BILINGUAL: ProblemSignalBilingual[] = [
  {
    num: "01",
    title: {
      id: "Informasi belum meyakinkan",
      en: "Scattered presence"
    },
    description: {
      id: "Layanan tersebar sehingga calon pelanggan sulit memahami nilai bisnis.",
      en: "Scattered services make it difficult for prospects to understand your business."
    }
  },
  {
    num: "02",
    title: {
      id: "Pencatatan berulang",
      en: "Duplicate data entry"
    },
    description: {
      id: "Data yang sama dicatat berulang di chat dan spreadsheet.",
      en: "The same data is entered repeatedly across chat and spreadsheets."
    }
  },
  {
    num: "03",
    title: {
      id: "Persetujuan terlambat",
      en: "Delayed approvals"
    },
    description: {
      id: "Keputusan penting tertunda karena persetujuan tenggelam di chat.",
      en: "Decisions stall because approvals get lost in informal chat."
    }
  },
  {
    num: "04",
    title: {
      id: "Laporan manual",
      en: "Manual reports"
    },
    description: {
      id: "Waktu tim terbuang merekap data sebelum pimpinan melihat kondisi bisnis.",
      en: "Time is spent compiling data before leadership sees business performance."
    }
  }
];
