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
  "cafe-umkm": {
    slug: "cafe-umkm",
    badge: "Solusi Cafe, Coffee Shop & UMKM F&B",
    title: "Website Cafe & Menu Digital",
    subtitle: "Tampilkan menu lengkap, jam buka, lokasi Google Maps, dan tombol pesan langsung ke WhatsApp tanpa potongan komisi aplikasi.",
    heroHeadline: "Bantu Pelanggan Menemukan Menu, Lokasi, dan Cara Memesan dengan Lebih Mudah",
    heroSubheadline: "Website mobile-first untuk cafe dan UMKM yang melengkapi Instagram dengan menu digital, informasi bisnis, promo, lokasi, dan pemesanan melalui WhatsApp.",
    targetAudience: "Cafe, coffee shop, kedai kopi, restoran, bakery, katering rumahan, dan UMKM makanan/minuman di Jabodetabek.",
    painPoints: [
      {
        title: "Informasi tenggelam di feed Instagram",
        desc: "Calon pengunjung kesulitan mencari daftar menu terbaru, jam operasional, atau petunjuk arah karena tertimbun postingan promosi lama."
      },
      {
        title: "Pelanggan harus bolak-balik chat untuk tanya harga",
        desc: "Admin toko lelah menjawab pertanyaan berulang mengenai varian rasa, harga, dan ketersediaan stok."
      },
      {
        title: "Lokasi dan jam buka tidak mudah ditemukan",
        desc: "Pengunjung yang ingin datang langsung sering batal karena tidak ada link Google Maps terverifikasi."
      },
      {
        title: "Format pemesanan WhatsApp berantakan",
        desc: "Pesanan masuk tanpa format jelas, rawan salah jumlah, salah varian, atau lupa mencantumkan alamat pengiriman."
      },
      {
        title: "Bisnis terlihat kurang profesional di Google",
        desc: "Saat calon pelanggan mencari nama bisnis di Google Search, tidak ada website resmi yang meyakinkan."
      }
    ],
    keyFeatures: [
      {
        title: "Katalog & Menu Digital Interaktif",
        desc: "Daftar menu dengan foto jernih, harga transparan, deskripsi bahan, dan filter kategori (Coffee, Non-Coffee, Food, Dessert).",
        iconName: "Utensils"
      },
      {
        title: "Tombol WhatsApp Order Terformat",
        desc: "Pelanggan memilih menu dan jumlah, sistem otomatis merangkum teks pesanan rapi ke chat WhatsApp kasir/admin.",
        iconName: "MessageCircle"
      },
      {
        title: "Integrasi Google Maps & Jam Operasional",
        desc: "Petunjuk arah sekali klik ke lokasi cafe serta status buka/tutup otomatis sesuai jadwal toko.",
        iconName: "MapPin"
      },
      {
        title: "Banner Promo & Menu Unggulan",
        desc: "Ruang khusus untuk mempromosikan menu musiman, diskon paket hemat, atau event spesial cafe.",
        iconName: "Sparkles"
      },
      {
        title: "QR Code Meja Siap Cetak",
        desc: "Tamu di meja cukup scan QR Code untuk langsung melihat menu digital di ponsel mereka tanpa antre.",
        iconName: "QrCode"
      },
      {
        title: "Ringan & Cepat di Ponsel",
        desc: "Desain mobile-first yang terbuka dalam hitungan detik, sangat ramah kuota saat dibuka dari link bio Instagram.",
        iconName: "Smartphone"
      }
    ],
    deliverables: [
      "Website Menu Digital responsive mobile & desktop",
      "QR Code khusus meja cafe siap cetak (vektor/PNG)",
      "Konfigurasi link bio Instagram & Google Maps link",
      "Panduan mandiri untuk update harga dan foto produk"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Kirim Daftar Menu & Foto",
        desc: "Anda mengirimkan daftar menu, foto produk, lokasi, jam operasional, dan nomor WhatsApp pemesanan."
      },
      {
        step: "02",
        title: "Desain & Penyusunan Katalog",
        desc: "Saya merancang website menu digital interaktif dengan tampilan yang estetis dan mudah dipindai pengunjung."
      },
      {
        step: "03",
        title: "Review & Uji Coba Pemesanan",
        desc: "Kita menguji alur klik menu, format pesan WhatsApp, dan tampilan di berbagai ukuran smartphone."
      },
      {
        step: "04",
        title: "Live & Cetak QR Code",
        desc: "Website dipublikasikan di domain pilihan Anda dan QR code meja siap dipasang."
      }
    ],
    demoType: "cafe",
    ctaText: "Diskusikan Website Cafe Anda",
    ctaSource: "solution-cafe-umkm",
    faqs: [
      {
        q: "Apakah pelanggan harus download aplikasi untuk buka menu?",
        a: "Tidak perlu. Menu langsung terbuka di browser ponsel saat pengunjung scan QR code atau klik link di Instagram."
      },
      {
        q: "Apakah ada biaya komisi dari setiap pesanan yang masuk?",
        a: "Sama sekali tidak ada komisi per transaksi. Seluruh pesanan masuk 100% langsung ke WhatsApp Anda tanpa potongan pihak ketiga."
      },
      {
        q: "Bagaimana jika saya ingin mengubah harga atau menambah menu baru?",
        a: "Struktur data dirancang agar mudah diperbarui. Saya juga menyediakan panduan singkat untuk membantu Anda melakukan update."
      }
    ],
    seoTitle: "Jasa Website Cafe, Coffee Shop & Menu Digital UMKM | Ingga Web",
    seoDescription: "Tingkatkan penjualan cafe dan UMKM dengan website menu digital, integrasi pemesanan WhatsApp otomatis, dan QR code meja tanpa potongan komisi."
  },

  "inventory-pos": {
    slug: "inventory-pos",
    badge: "Solusi Toko, Gudang & Retail",
    title: "Sistem POS & Manajemen Inventory",
    subtitle: "Rampingkan operasional toko, pencatatan transaksi kasir, mutasi stok antar cabang, dan audit stock opname berkala.",
    heroHeadline: "Penjualan dan Stok Lebih Mudah Dipantau dalam Satu Sistem",
    heroSubheadline: "Sistem kasir dan inventori yang membantu pemilik bisnis retail, cafe, dan distributor memantau pergerakan barang, riwayat transaksi, dan akurasi stok fisik.",
    targetAudience: "Toko retail, distributor barang, coffee shop multi-outlet, minimarket, dan bisnis dengan operasional gudang.",
    painPoints: [
      {
        title: "Stok fisik di rak sering berbeda dengan catatan",
        desc: "Barang terjual tapi tidak tercatat, atau barang hilang tanpa diketahui siapa yang memegang tanggung jawab."
      },
      {
        title: "Aplikasi kasir dan catatan gudang tidak terhubung",
        desc: "Kasir menggunakan satu software, orang gudang mencatat di buku besar, data baru disinkronkan manual."
      },
      {
        title: "Proses Stock Opname memakan waktu berhari-hari",
        desc: "Toko harus tutup berjam-jam hanya untuk menghitung barang secara manual di atas lembaran kertas."
      },
      {
        title: "Sulit memantau barang yang menipis atau kadaluarsa",
        desc: "Sering terlambat restock barang laris dan menumpuk barang yang perputarannya lambat (slow-moving)."
      },
      {
        title: "Laporan omzet dan laba kotor tidak real-time",
        desc: "Owner harus menunggu rekap bulanan staf untuk mengetahui apakah bisnis untung atau rugi."
      }
    ],
    keyFeatures: [
      {
        title: "Aplikasi Kasir (POS) Cepat & Akurat",
        desc: "Interface kasir intuitif dengan pencarian cepat barcode/nama produk, split payment, dan cetak struk nota.",
        iconName: "ShoppingBag"
      },
      {
        title: "Pemotongan Stok Otomatis",
        desc: "Stok gudang atau toko otomatis terpotong detik itu juga saat transaksi kasir berhasil diselesaikan.",
        iconName: "Boxes"
      },
      {
        title: "Modul Digital Stock Opname",
        desc: "Rekonsiliasi stok fisik dengan data sistem secara transparan, lengkap dengan catatan selisih dan otorisasi supervisor.",
        iconName: "ClipboardCheck"
      },
      {
        title: "Peringatan Stok Menipis (Low Stock Alert)",
        desc: "Notifikasi otomatis saat kuantitas barang mencapai batas minimum pemesanan ulang (reorder point).",
        iconName: "AlertTriangle"
      },
      {
        title: "Manajemen Multi-Cabang / Multi-Gudang",
        desc: "Pencatatan mutasi transfer barang antar outlet dengan status kirim, transit, dan terima.",
        iconName: "Truck"
      },
      {
        title: "Laporan Penjualan & Margin Laba",
        desc: "Dashboard grafik penjualan harian, produk terlaris, rekap kas kasir, dan laba kotor per kategori.",
        iconName: "BarChart3"
      }
    ],
    deliverables: [
      "Aplikasi POS & Inventory siap pakai (Cloud Web / Local Server)",
      "Master data import template untuk ribuan produk awal",
      "Sesi pelatihan penggunaan staf kasir & admin gudang",
      "Dokumentasi alur operasional & panduan troubleshoot"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Pemetaan Alur Transaksi & Gudang",
        desc: "Kita mendiskusikan kategori produk, alur mutasi barang, metode stok (FIFO/Average), dan kebutuhan kasir."
      },
      {
        step: "02",
        title: "Setup Database & Fitur Kustom",
        desc: "Saya membangun arsitektur sistem, skema database relasional, dan antarmuka kasir yang nyaman digunakan."
      },
      {
        step: "03",
        title: "Uji Coba & Simulasi Stock Opname",
        desc: "Simulasi alur transaksi kasir, mutasi barang, penyesuaian stok, dan pencetakan laporan omzet."
      },
      {
        step: "04",
        title: "Deployment & Training Staf",
        desc: "Sistem live dan staf Anda dibekali panduan pengoperasian yang praktis."
      }
    ],
    demoType: "inventory",
    ctaText: "Diskusikan Sistem POS & Inventory",
    ctaSource: "solution-inventory-pos",
    faqs: [
      {
        q: "Apakah sistem POS ini bisa menggunakan barcode scanner dan printer struk thermal?",
        a: "Bisa. Sistem dapat diintegrasikan dengan barcode scanner USB/Bluetooth standar dan printer nota thermal 58mm/80mm."
      },
      {
        q: "Apakah bisa digunakan jika koneksi internet di toko sedang lambat?",
        a: "Bisa dirancang dengan arsitektur hybrid atau local server pada jaringan LAN toko sesuai kebutuhan lokasi bisnis Anda."
      },
      {
        q: "Apakah owner bisa memantau penjualan toko dari ponsel secara jarak jauh?",
        a: "Ya. Owner dapat mengakses dashboard monitoring omzet dan stok kapan saja dari smartphone."
      }
    ],
    seoTitle: "Jasa Pembuatan Sistem POS & Inventory Gudang | Ingga Web",
    seoDescription: "Rampingkan operasional toko dengan sistem POS kasir, manajemen stok mutasi multi-gudang, digital stock opname, dan laporan omzet real-time."
  },

  "insurance-erp": {
    slug: "insurance-erp",
    badge: "Solusi Asuransi, Reasuransi & Enterprise",
    title: "Sistem Asuransi, Reasuransi & Custom ERP",
    subtitle: "Digitalisasi alur kerja kompleks: penentuan rate risiko, penempatan reasuransi, ledger premi multi-mata uang, dan rekonsiliasi keuangan.",
    heroHeadline: "Custom Business System untuk Workflow Asuransi dan Reasuransi yang Kompleks",
    heroSubheadline: "Pengembangan sistem untuk membantu digitalisasi policy administration, placing, premium ledger, reconciliation, reporting, dan workflow internal lainnya.",
    targetAudience: "Perusahaan asuransi umum, pialang asuransi (insurance broker), pialang reasuransi (reinsurance broker), dan korporasi dengan workflow data kompleks.",
    painPoints: [
      {
        title: "Perhitungan komisi, prorate, dan pajak terpisah di spreadsheet",
        desc: "Risiko selisih pembulatan desimal (floating precision drift) saat memproses ribuan transaksi bernilai miliaran."
      },
      {
        title: "Tracking placing reasuransi fakultatif dan treaty manual",
        desc: "Status slip placing, endorsement, dan share penjaminan reasuradur tersebar di dokumen PDF dan email."
      },
      {
        title: "Rekonsiliasi mutasi bank dan penagihan premi memakan waktu",
        desc: "Finance kesulitan mencocokkan pembayaran premi dari ceding dengan alokasi Debit Note / Credit Note."
      },
      {
        title: "Penerbitan Statement of Account (SOA) lambat",
        desc: "Laporan outstanding saldo premi dan settlement ke reasuradur terlambat dikirim ke pihak ceding company."
      },
      {
        title: "Sistem lama kaku dan tidak memenuhi standar audit",
        desc: "Tidak ada audit trail yang mencatat riwayat perubahan data krusial saat terjadi sengketa klaim atau premi."
      }
    ],
    keyFeatures: [
      {
        title: "Placement Workflow (Facultative & Treaty)",
        desc: "Manajemen siklus penempatan reasuransi lengkap dari draft slip, endorsement, closing slip, hingga settlement.",
        iconName: "FileCheck2"
      },
      {
        title: "Precision Calculation Engine (BCMath)",
        desc: "Kalkulasi rate premi, prorate masa pertanggungan, komisi broker, serta aturan pajak dengan arbitrary precision arithmetic (zero decimal rounding drift).",
        iconName: "Calculator"
      },
      {
        title: "Multi-Currency Premium Ledger",
        desc: "Buku besar premi otomatis yang mencatat transaksi IDR, USD, EUR, SGD dengan kurs transaksi yang konsisten.",
        iconName: "Landmark"
      },
      {
        title: "Automated Statement of Account (SOA)",
        desc: "Generate ringkasan saldo outstanding piutang/utang premi per ceding company dan reasuradur dalam hitungan detik.",
        iconName: "FileSpreadsheet"
      },
      {
        title: "Rekonsiliasi Mutasi Bank & Alokasi AR/AP",
        desc: "Modul pencocokan bukti transfer mutasi bank dengan nomor Debit Note/Credit Note secara transparan.",
        iconName: "CheckCircle2"
      },
      {
        title: "Enterprise Audit Trail & Role Security",
        desc: "Pencatatan histori perubahan status, otorisasi transaksi finansial, dan pembatasan hak akses berbasis divisi (Underwriting, Broker, Finance).",
        iconName: "ShieldAlert"
      }
    ],
    deliverables: [
      "Custom ERP Core Application berbasis web enterprise",
      "Skema database relasional ACID (InnoDB) berkinerja tinggi",
      "Dokumentasi arsitektur sistem, kamus data & User Manual",
      "Dukungan asistensi deployment & konfigurasi server produksi"
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Analisis Alur Bisnis & SOP Finansial",
        desc: "Pemetaan mendalam terhadap alur underwriting, placing, debit/credit note, dan mekanisme rekonsiliasi finance."
      },
      {
        step: "02",
        title: "Perancangan Arsitektur Database & Kalkulator",
        desc: "Membangun relasi database yang rapi dan engine kalkulasi presisi tinggi yang defensible bagi auditor."
      },
      {
        step: "03",
        title: "Pengembangan Modul & Uji Validasi Data",
        desc: "Iterasi modul placing, penagihan premi, SOA generation, serta simulasi pengujian dengan dataset transaksi kompleks."
      },
      {
        step: "04",
        title: "Deployment Produksi & Handover",
        desc: "Instalasi pada server perusahaan, pengamanan akses, dan transfer pengetahuan teknis."
      }
    ],
    demoType: "insurance",
    ctaText: "Diskusikan Workflow Perusahaan",
    ctaSource: "solution-insurance-erp",
    faqs: [
      {
        q: "Apakah data klien dan transaksi perusahaan aman?",
        a: "Sistem dibangun untuk di-deploy pada server privat (On-Premise atau Private Cloud) milik perusahaan Anda sendiri dengan standar keamanan database enterprise."
      },
      {
        q: "Apakah sistem ini dapat disesuaikan dengan format Debit/Credit Note dan SOA perusahaan kami?",
        a: "Tentu. Karena dibangun secara custom, seluruh format penomoran, layout dokumen PDF, dan alur approval disesuaikan persis dengan standar operasional Anda."
      },
      {
        q: "Apakah developer berpengalaman dengan domain bisnis reasuransi?",
        a: "Ya. Saya memiliki pengalaman hands-on dalam mengarsiteki dan memelihara sistem ERP broker reasuransi serta asuransi produksi."
      }
    ],
    seoTitle: "Jasa Pembuatan Sistem Asuransi, Reasuransi & Custom ERP | Ingga Web",
    seoDescription: "Digitalisasi alur kerja asuransi, placing reasuransi, ledger premi multi-mata uang, SOA otomatis, dan custom ERP enterprise berpresisi tinggi."
  }
};
