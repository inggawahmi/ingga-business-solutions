export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Berapa biaya pembuatan website atau sistem?",
    answer: "Biaya bergantung pada jumlah halaman, fitur, integrasi, dan kompleksitas workflow. Setelah kebutuhan awal dibahas, saya akan memberikan scope dan estimasi yang lebih jelas."
  },
  {
    id: "faq-2",
    question: "Berapa lama proses pembuatannya?",
    answer: "Estimasi waktu diberikan setelah fitur dan ruang lingkup dipetakan. Website sederhana dan custom business system memiliki kebutuhan pengerjaan yang berbeda."
  },
  {
    id: "faq-3",
    question: "Apakah bisa membantu domain dan hosting?",
    answer: "Ya. Saya dapat membantu pemilihan domain, hosting, konfigurasi deployment, dan kebutuhan teknis lainnya. Biaya layanan pihak ketiga akan dijelaskan secara terpisah."
  },
  {
    id: "faq-4",
    question: "Apakah sistem bisa dikembangkan lagi?",
    answer: "Ya. Struktur aplikasi dirancang agar fitur baru dapat ditambahkan secara bertahap sesuai pertumbuhan kebutuhan bisnis."
  },
  {
    id: "faq-5",
    question: "Apakah tersedia maintenance?",
    answer: "Maintenance dan pengembangan lanjutan dapat dibahas sesuai kebutuhan setelah project selesai."
  },
  {
    id: "faq-6",
    question: "Apakah source code diberikan?",
    answer: "Ketentuan source code, akses repository, deployment, dan handover akan dijelaskan di dalam proposal sesuai jenis serta scope project."
  },
  {
    id: "faq-7",
    question: "Apakah bisa mengintegrasikan sistem yang sudah ada?",
    answer: "Bisa, selama sistem atau layanan tersebut menyediakan akses integrasi yang memadai seperti API, database, webhook, atau format pertukaran data lainnya."
  }
];
