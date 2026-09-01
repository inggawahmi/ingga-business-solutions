export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apakah saya harus sudah memiliki requirement teknis?",
    answer: "Tidak. Pembahasan dapat dimulai dari masalah, proses kerja saat ini, dan hasil yang ingin dicapai. Requirement teknis disusun setelah kebutuhan bisnis dipahami bersama."
  },
  {
    id: "faq-2",
    question: "Apakah sistem dapat mengikuti proses bisnis yang sudah berjalan?",
    answer: "Ya. Prinsip utama sistem custom adalah menyesuaikan aplikasi dengan alur kerja (SOP) bisnis Anda, bukan memaksa tim Anda beradaptasi dengan keterbatasan software kaku."
  },
  {
    id: "faq-3",
    question: "Apakah bisa memulai dari satu workflow terlebih dahulu?",
    answer: "Tentu. Banyak klien memulai dari proses yang paling mendesak (misalnya otomasi quotation, approval purchase request, atau katalog digital), kemudian berkembang ke modul lainnya secara bertahap."
  },
  {
    id: "faq-4",
    question: "Apakah tersedia dukungan setelah sistem digunakan?",
    answer: "Ya. Setiap proyek mencakup pendampingan implementasi, pelatihan penggunaan bagi tim Anda, serta garansi perbaikan dan kesiapan pemeliharaan jangka panjang."
  },
  {
    id: "faq-5",
    question: "Bagaimana menentukan biaya dan waktu pengerjaan?",
    answer: "Biaya dan timeline dihitung berdasarkan ruang lingkup pekerjaan yang telah disepakati bersama setelah sesi diskusi awal, tanpa biaya tersembunyi."
  }
];
