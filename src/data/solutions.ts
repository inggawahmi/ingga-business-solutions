export interface SolutionPageData {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetAudience: string;
  painPoints: { title: string; desc: string }[];
  keyFeatures: { title: string; desc: string; iconName: string }[];
  deliverables: string[];
  workflowSteps: { step: string; title: string; desc: string }[];
  demoType: "cafe" | "inventory" | "insurance";
  ctaText: string;
  ctaSource: string;
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const SOLUTIONS_MAP: Record<string, SolutionPageData> = {
  "erp-insurance-reinsurance": {
    slug: "erp-insurance-reinsurance",
    badge: "Enterprise System & Domain Capability",
    title: "Sistem ERP Insurance & Reinsurance",
    subtitle: "Sistem operasional custom untuk alur kerja penerbitan polis, penempatan placing reasuransi, komisi multi-mata uang, dan rekonsiliasi keuangan.",
    heroHeadline: "Sistem Operasional yang Dibangun Khusus Mengikuti Kompleksitas Alur Kerja Asuransi & Reasuransi",
    heroSubheadline: "Dirancang untuk menyatukan pencatatan polis, alur penempatan placing, perhitungan premi multi-currency, statement of account, dan pelaporan audit dalam satu sistem terintegrasi.",
    targetAudience: "Perusahaan asuransi umum, broker asuransi, broker reasuransi, underwriter, dan lembaga keuangan dengan alur transaksi multi-pihak.",
    painPoints: [
      {
        title: "Perhitungan komisi dan pajak multi-mata uang terpisah di spreadsheet",
        desc: "Transaksi melibatkan IDR, USD, EUR, atau SGD dengan rate konversi dan komisi bertingkat yang rawan selisih pembulatan bila dihitung manual."
      },
      {
        title: "Pelacakan alur placing treaty & fakultatif sulit ditelusuri",
        desc: "Dokumen slip penawaran, persentase share asuradur, dan status konfirmasi tersebar di email dan chat internal tanpa status terpusat."
      },
      {
        title: "Pembuatan Statement of Account (SOA) memakan waktu lama",
        desc: "Tim finance harus mencocokkan mutasi bank dengan debit/credit note satu per satu secara manual sebelum menerbitkan rekonsiliasi."
      },
      {
        title: "Kurangnya audit trail untuk kepatuhan regulasi",
        desc: "Perubahan nilai pertanggungan, endorsement, atau rate komisi tidak memiliki catatan riwayat pengguna yang jelas saat proses audit."
      }
    ],
    keyFeatures: [
      {
        title: "Placing Pipeline & Underwriting Workflow",
        desc: "Monitoring status penempatan reasuransi (Facultative & Treaty) dari penawaran, persentase share, hingga final slip terkonfirmasi.",
        iconName: "ShieldCheck"
      },
      {
        title: "Kalkulasi Premi & Komisi Presisi",
        desc: "Perhitungan nilai premi bruto, komisi pialang, pajak, dan premi neto secara konsisten dan transparan pada tiap transaksi multi-currency.",
        iconName: "Calculator"
      },
      {
        title: "Automated Statement of Account (SOA) & Notes",
        desc: "Penerbitan otomatis Debit Note, Credit Note, dan ringkasan tagihan rekening koran (SOA) siap cetak dan kirim ke asuradur.",
        iconName: "FileSpreadsheet"
      },
      {
        title: "Role-Based Security & Comprehensive Audit Trail",
        desc: "Pembatasan hak akses berjenjang per divisi serta pencatatan otomatis setiap aktivitas input, edit, dan approval dokumen transaksi.",
        iconName: "Lock"
      }
    ],
    deliverables: [
      "Aplikasi web internal custom terpasang di server/cloud privat perusahaan",
      "Database relasional teroptimasi dengan audit log lengkap",
      "Template dokumen Debit Note, Credit Note, dan SOA otomatis",
      "Dokumentasi alur sistem dan panduan pengoperasian teknis",
      "Sesi pelatihan bagi tim operasional dan finance",
      "Garansi perbaikan bug dan dukungan pemeliharaan paska implementasi"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Discovery & Workflow Mapping",
        desc: "Menganalisis jenis bisnis asuransi/reasuransi Anda, struktur dokumen penempatan, dan aturan pembagian komisi."
      },
      {
        step: "02",
        title: "Arsitektur Database & Modul Inti",
        desc: "Merancang skema database transaksi, formula kalkulasi keuangan, dan pengaturan hak akses pengguna."
      },
      {
        step: "03",
        title: "Implementasi & Pengujian Bertahap",
        desc: "Membangun antarmuka sistem dan memvalidasi keakuratan perhitungan premi serta pencetakan dokumen nota."
      },
      {
        step: "04",
        title: "User Training & Go-Live Terkendali",
        desc: "Pelatihan langsung bagi tim operasional, migrasi data awal, dan pendampingan saat sistem mulai digunakan harian."
      }
    ],
    demoType: "insurance",
    ctaText: "Diskusikan Kebutuhan Sistem ERP",
    ctaSource: "solution-erp-insurance-page",
    faqs: [
      {
        q: "Apakah data transaksi dan nasabah kami aman di sistem ini?",
        a: "Ya. Sistem dibangun di infrastruktur server privat milik perusahaan Anda (on-premises atau private cloud) dengan enkripsi data, pembatasan hak akses berbasis peran (RBAC), dan catatan riwayat audit trail tanpa campur tangan pihak ketiga."
      },
      {
        q: "Apakah sistem dapat menangani transaksi mata uang asing?",
        a: "Sistem mendukung transaksi multi-currency (seperti IDR, USD, EUR, SGD) dengan nilai tukar per tanggal transaksi dan perhitungan presisi untuk meminimalisir risiko pembulatan."
      },
      {
        q: "Bagaimana proses implementasinya di perusahaan kami?",
        a: "Implementasi dilakukan secara bertahap mulai dari pemetaan alur SOP, perancangan database, uji coba modul bersama tim inti, hingga pelatihan menyeluruh sebelum sistem dipakai secara resmi."
      }
    ],
    seoTitle: "Sistem ERP Insurance & Reinsurance Custom | Ingga Business Solutions",
    seoDescription: "Pengembangan sistem ERP custom untuk alur operasional insurance & reinsurance: placing workflow, komisi multi-currency, debit/credit notes, SOA, dan audit trail."
  },
  "insurance-erp": {
    slug: "insurance-erp",
    badge: "Enterprise System & Domain Capability",
    title: "Sistem ERP Insurance & Reinsurance",
    subtitle: "Sistem operasional custom untuk alur kerja penerbitan polis, penempatan placing reasuransi, komisi multi-mata uang, dan rekonsiliasi keuangan.",
    heroHeadline: "Sistem Operasional yang Dibangun Khusus Mengikuti Kompleksitas Alur Kerja Asuransi & Reasuransi",
    heroSubheadline: "Dirancang untuk menyatukan pencatatan polis, alur penempatan placing, perhitungan premi multi-currency, statement of account, dan pelaporan audit dalam satu sistem terintegrasi.",
    targetAudience: "Perusahaan asuransi umum, broker asuransi, broker reasuransi, underwriter, dan lembaga keuangan dengan alur transaksi multi-pihak.",
    painPoints: [
      {
        title: "Perhitungan komisi dan pajak multi-mata uang terpisah di spreadsheet",
        desc: "Transaksi melibatkan IDR, USD, EUR, atau SGD dengan rate konversi dan komisi bertingkat yang rawan selisih pembulatan bila dihitung manual."
      },
      {
        title: "Pelacakan alur placing treaty & fakultatif sulit ditelusuri",
        desc: "Dokumen slip penawaran, persentase share asuradur, dan status konfirmasi tersebar di email dan chat internal tanpa status terpusat."
      },
      {
        title: "Pembuatan Statement of Account (SOA) memakan waktu lama",
        desc: "Tim finance harus mencocokkan mutasi bank dengan debit/credit note satu per satu secara manual sebelum menerbitkan rekonsiliasi."
      },
      {
        title: "Kurangnya audit trail untuk kepatuhan regulasi",
        desc: "Perubahan nilai pertanggungan, endorsement, atau rate komisi tidak memiliki catatan riwayat pengguna yang jelas saat proses audit."
      }
    ],
    keyFeatures: [
      {
        title: "Placing Pipeline & Underwriting Workflow",
        desc: "Monitoring status penempatan reasuransi (Facultative & Treaty) dari penawaran, persentase share, hingga final slip terkonfirmasi.",
        iconName: "ShieldCheck"
      },
      {
        title: "Kalkulasi Premi & Komisi Presisi",
        desc: "Perhitungan nilai premi bruto, komisi pialang, pajak, dan premi neto secara konsisten dan transparan pada tiap transaksi multi-currency.",
        iconName: "Calculator"
      },
      {
        title: "Automated Statement of Account (SOA) & Notes",
        desc: "Penerbitan otomatis Debit Note, Credit Note, dan ringkasan tagihan rekening koran (SOA) siap cetak dan kirim ke asuradur.",
        iconName: "FileSpreadsheet"
      },
      {
        title: "Role-Based Security & Comprehensive Audit Trail",
        desc: "Pembatasan hak akses berjenjang per divisi serta pencatatan otomatis setiap aktivitas input, edit, dan approval dokumen transaksi.",
        iconName: "Lock"
      }
    ],
    deliverables: [
      "Aplikasi web internal custom terpasang di server/cloud privat perusahaan",
      "Database relasional teroptimasi dengan audit log lengkap",
      "Template dokumen Debit Note, Credit Note, dan SOA otomatis",
      "Dokumentasi alur sistem dan panduan pengoperasian teknis",
      "Sesi pelatihan bagi tim operasional dan finance",
      "Garansi perbaikan bug dan dukungan pemeliharaan paska implementasi"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Discovery & Workflow Mapping",
        desc: "Menganalisis jenis bisnis asuransi/reasuransi Anda, struktur dokumen penempatan, dan aturan pembagian komisi."
      },
      {
        step: "02",
        title: "Arsitektur Database & Modul Inti",
        desc: "Merancang skema database transaksi, formula kalkulasi keuangan, dan pengaturan hak akses pengguna."
      },
      {
        step: "03",
        title: "Implementasi & Pengujian Bertahap",
        desc: "Membangun antarmuka sistem dan memvalidasi keakuratan perhitungan premi serta pencetakan dokumen nota."
      },
      {
        step: "04",
        title: "User Training & Go-Live Terkendali",
        desc: "Pelatihan langsung bagi tim operasional, migrasi data awal, dan pendampingan saat sistem mulai digunakan harian."
      }
    ],
    demoType: "insurance",
    ctaText: "Diskusikan Kebutuhan Sistem ERP",
    ctaSource: "solution-insurance-erp-page",
    faqs: [
      {
        q: "Apakah data transaksi dan nasabah kami aman di sistem ini?",
        a: "Ya. Sistem dibangun di infrastruktur server privat milik perusahaan Anda (on-premises atau private cloud) dengan enkripsi data, pembatasan hak akses berbasis peran (RBAC), dan catatan riwayat audit trail tanpa campur tangan pihak ketiga."
      },
      {
        q: "Apakah sistem dapat menangani transaksi mata uang asing?",
        a: "Sistem mendukung transaksi multi-currency (seperti IDR, USD, EUR, SGD) dengan nilai tukar per tanggal transaksi dan perhitungan presisi untuk meminimalisir risiko pembulatan."
      },
      {
        q: "Bagaimana proses implementasinya di perusahaan kami?",
        a: "Implementasi dilakukan secara bertahap mulai dari pemetaan alur SOP, perancangan database, uji coba modul bersama tim inti, hingga pelatihan menyeluruh sebelum sistem dipakai secara resmi."
      }
    ],
    seoTitle: "Sistem ERP Insurance & Reinsurance Custom | Ingga Business Solutions",
    seoDescription: "Pengembangan sistem ERP custom untuk alur operasional insurance & reinsurance: placing workflow, komisi multi-currency, debit/credit notes, SOA, dan audit trail."
  },
  "inventory-pos": {
    slug: "inventory-pos",
    badge: "Solusi Operasional & Pergudangan",
    title: "Sistem Inventory & Mutasi Stok",
    subtitle: "Aplikasi internal untuk pencatatan persediaan barang multi-lokasi, approval pengadaan, dan audit stock opname digital.",
    heroHeadline: "Kendalikan Keluar-Masuk Barang dan Akurasi Stok Tanpa Ketergantungan Rekap Manual",
    heroSubheadline: "Sistem manajemen stok yang dirancang sesuai alur mutasi barang di toko, gudang pusat, maupun pabrik Anda untuk meminimalisir selisih data.",
    targetAudience: "Bisnis retail berkembang, distributor, grosir, manufaktur, dan bisnis F&B dengan banyak cabang gudang.",
    painPoints: [
      {
        title: "Selisih barang antara catatan spreadsheet dan fisik gudang",
        desc: "Barang keluar-masuk tidak tercatat secara real-time sehingga membingungkan saat jadwal stock opname bulanan."
      },
      {
        title: "Perpindahan antar-cabang rawan hilang tanpa surat jalan resmi",
        desc: "Pengiriman barang antar gudang atau cabang sering kali hanya mengandalkan chat tanpa verifikasi tanda terima yang jelas."
      },
      {
        title: "Stok kritis baru diketahui saat barang sudah habis",
        desc: "Tidak ada peringatan otomatis saat batas minimum stok tercapai, mengakibatkan pesanan customer tertunda."
      }
    ],
    keyFeatures: [
      {
        title: "Mutasi Stok Multi-Gudang Terverifikasi",
        desc: "Setiap perpindahan stok antar lokasi mewajibkan verifikasi status kirim dan terima secara transparan.",
        iconName: "Boxes"
      },
      {
        title: "Digital Stock Opname Reconciliation",
        desc: "Pencatatan fisik langsung di sistem dengan perhitungan otomatis selisih barang (discrepancy).",
        iconName: "ClipboardCheck"
      },
      {
        title: "Purchase Request & Approval Berjenjang",
        desc: "Pengajuan pembelian bahan baku atau barang dagang harus melalui alur approval sebelum diteruskan ke supplier.",
        iconName: "CheckCircle2"
      },
      {
        title: "Laporan Pergerakan Stok & Nilai Persediaan",
        desc: "Menghitung nilai persediaan aset barang secara berkala untuk kebutuhan evaluasi finansial owner.",
        iconName: "TrendingUp"
      }
    ],
    deliverables: [
      "Aplikasi web sistem inventory dengan dashboard monitoring stok",
      "Modul pencatatan mutasi barang dan surat jalan digital",
      "Modul verifikasi hasil stock opname fisik",
      "Pengaturan hak akses staf gudang, kepala toko, dan admin",
      "Pelatihan penggunaan bagi staf operasional"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Pemetaan Alur Barang",
        desc: "Mengidentifikasi alur keluar-masuk barang, titik gudang, dan peran masing-masing staf."
      },
      {
        step: "02",
        title: "Perancangan Form & Validasi",
        desc: "Membangun form input mutasi, surat jalan, dan rule stok minimum yang mencegah input ganda."
      },
      {
        step: "03",
        title: "Uji Coba Lapangan",
        desc: "Menguji sistem bersama staf gudang untuk memastikan antarmuka mudah digunakan di tablet atau laptop."
      },
      {
        step: "04",
        title: "Go-Live & Pendampingan",
        desc: "Penerapan sistem ke operasional harian dengan pendampingan saat stock opname awal."
      }
    ],
    demoType: "inventory",
    ctaText: "Diskusikan Sistem Inventory Anda",
    ctaSource: "solution-inventory-page",
    faqs: [
      {
        q: "Apakah sistem ini bisa digunakan di beberapa lokasi gudang sekaligus?",
        a: "Ya. Sistem berbasis web terpusat sehingga dapat diakses dari gudang pusat, toko cabang, maupun pabrik dengan hak akses yang terpisah per lokasi."
      },
      {
        q: "Bagaimana jika ada staf gudang yang kurang paham teknologi?",
        a: "Antarmuka sistem dirancang sederhana dan to-the-point khusus untuk operasional gudang, lengkap dengan sesi training langsung."
      }
    ],
    seoTitle: "Sistem Inventory & Mutasi Stok Gudang Custom | Ingga Business Solutions",
    seoDescription: "Jasa pembuatan sistem inventory custom: mutasi stok multi-gudang, digital stock opname, purchase request approval, dan laporan persediaan real-time."
  },
  "cafe-umkm": {
    slug: "cafe-umkm",
    badge: "Solusi Cafe, Resto & Bisnis Kuliner",
    title: "Website Cafe & Menu Digital",
    subtitle: "Tampilkan menu lengkap, jam operasional, lokasi Google Maps, dan tombol pesan langsung ke WhatsApp tanpa potongan komisi aplikasi.",
    heroHeadline: "Bantu Pelanggan Menemukan Menu, Lokasi, dan Cara Memesan dengan Lebih Mudah",
    heroSubheadline: "Website mobile-friendly untuk cafe dan UMKM yang melengkapi promosi media sosial dengan menu digital terstruktur, informasi bisnis, dan pemesanan WhatsApp.",
    targetAudience: "Cafe, coffee shop, kedai kopi, restoran, bakery, katering rumahan, dan UMKM makanan/minuman.",
    painPoints: [
      {
        title: "Informasi tenggelam di postingan media sosial",
        desc: "Calon pengunjung kesulitan mencari daftar menu terbaru, jam buka, atau petunjuk arah karena tertimbun konten promosi lama."
      },
      {
        title: "Admin lelah menjawab pertanyaan harga yang sama berulang kali",
        desc: "Pelanggan harus bolak-balik chat hanya untuk menanyakan ketersediaan menu, varian rasa, atau harga terkini."
      },
      {
        title: "Format pemesanan chat sering tidak lengkap",
        desc: "Pesanan masuk tanpa format jelas, rawan salah jumlah, salah varian, atau lupa mencantumkan alamat pengiriman."
      }
    ],
    keyFeatures: [
      {
        title: "Menu & Katalog Digital Interaktif",
        desc: "Daftar menu lengkap dengan foto menggugah, harga resmi, varian rasa, dan tag menu unggulan.",
        iconName: "Utensils"
      },
      {
        title: "Integrasi Lokasi Google Maps & Jam Operasional",
        desc: "Petunjuk arah sekali klik dan indikator status buka/tutup toko yang jelas bagi pengunjung.",
        iconName: "MapPin"
      },
      {
        title: "Format Pesanan WhatsApp Otomatis",
        desc: "Pelanggan yang memilih menu langsung diarahkan ke chat WhatsApp dengan format pesanan rapi.",
        iconName: "MessageCircle"
      }
    ],
    deliverables: [
      "Website responsive yang nyaman dibuka di smartphone maupun komputer",
      "Halaman menu digital dengan navigasi kategori",
      "Integrasi tombol pemesanan WhatsApp terstruktur",
      "Setup domain kustom dan hosting cepat",
      "Panduan update mandiri daftar menu dan harga"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Pengumpulan Materi & Menu",
        desc: "Mengumpulkan daftar menu, harga, foto produk, jam buka, dan nomor WhatsApp bisnis Anda."
      },
      {
        step: "02",
        title: "Desain Visual & Struktur Menu",
        desc: "Menyusun tampilan website yang menarik, rapi, dan sesuai dengan identitas visual brand Anda."
      },
      {
        step: "03",
        title: "Review & Testing WhatsApp",
        desc: "Memastikan seluruh tombol pesan dan link peta bekerja lancar di berbagai jenis smartphone."
      },
      {
        step: "04",
        title: "Peluncuran & Handover",
        desc: "Website resmi online dan siap dipasang di link bio Instagram atau banner toko."
      }
    ],
    demoType: "cafe",
    ctaText: "Diskusikan Website Cafe Anda",
    ctaSource: "solution-cafe-page",
    faqs: [
      {
        q: "Berapa lama proses pembuatan website cafe ini?",
        a: "Umumnya 1 sampai 2 minggu setelah seluruh materi foto menu, harga, dan informasi toko terkumpul."
      },
      {
        q: "Apakah saya bisa mengubah harga atau menambah menu sendiri di kemudian hari?",
        a: "Bisa. Saya menyediakan panduan sederhana agar Anda atau tim dapat memperbarui daftar menu kapan saja."
      }
    ],
    seoTitle: "Jasa Pembuatan Website Cafe & Menu Digital | Ingga Business Solutions",
    seoDescription: "Jasa pembuatan website cafe dan resto: katalog menu digital, lokasi Google Maps, jam operasional, dan pemesanan langsung ke WhatsApp."
  }
};
