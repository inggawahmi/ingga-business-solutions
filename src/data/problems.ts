export interface ProblemSignal {
  num: string;
  title: string;
  description: string;
}

export const PROBLEM_SIGNALS: ProblemSignal[] = [
  {
    num: "01",
    title: "Informasi bisnis sulit dipahami customer",
    description: "Layanan, portfolio, dan informasi penting tersebar di beberapa platform sehingga calon pembeli ragu sebelum menghubungi Anda."
  },
  {
    num: "02",
    title: "Inquiry tidak tertangani dengan rapi",
    description: "Permintaan customer masuk dari berbagai channel tanpa alur tindak lanjut dan penugasan yang jelas bagi tim."
  },
  {
    num: "03",
    title: "Data dicatat berulang kali",
    description: "Informasi yang sama harus disalin manual antara chat, spreadsheet, dokumen penagihan, dan aplikasi pencatatan lain."
  },
  {
    num: "04",
    title: "Approval membuat pekerjaan tertunda",
    description: "Keputusan dan persetujuan operasional bergantung pada percakapan chat yang mudah tenggelam dan sulit ditelusuri riwayatnya."
  },
  {
    num: "05",
    title: "Laporan masih dibuat manual",
    description: "Tim menghabiskan waktu berjam-jam untuk merekap data sebelum pimpinan bisnis dapat melihat kondisi operasional terkini."
  },
  {
    num: "06",
    title: "Software yang ada tidak mengikuti proses kerja",
    description: "Bisnis akhirnya terpaksa menyesuaikan diri dengan keterbatasan aplikasi berlangganan generik, bukan sebaliknya."
  }
];

export const PROBLEM_CLOSING_STATEMENT = "Tidak semua masalah membutuhkan sistem besar. Terkadang, satu proses yang diperbaiki dengan tepat sudah memberikan perubahan yang berarti.";
