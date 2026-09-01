export interface BusinessProblem {
  id: string;
  title: string;
  description: string;
  solutionHighlight: string;
}

export const BUSINESS_PROBLEMS: BusinessProblem[] = [
  {
    id: "p1",
    title: "Pelanggan hanya mendapatkan info dari Instagram",
    description: "Postingan tenggelam di feed, highlight berantakan, dan calon pembeli malas mencari info lebih lanjut.",
    solutionHighlight: "Website profil & katalog terpusat yang selalu update dan mudah diakses dari link bio."
  },
  {
    id: "p2",
    title: "Menu, katalog, dan harga sulit ditemukan",
    description: "Pelanggan harus bolak-balik DM atau chat hanya untuk menanyakan daftar harga dan foto produk.",
    solutionHighlight: "Menu digital interaktif dengan foto produk jernih, harga transparan, dan filter kategori."
  },
  {
    id: "p3",
    title: "Pemesanan via WhatsApp tidak memiliki format rapi",
    description: "Admin bingung membaca pesanan yang formatnya acak-acakan, rawan salah catat nama, alamat, atau varian.",
    solutionHighlight: "Tombol pesan langsung menyusun rekap pesanan otomatis ke chat WhatsApp admin."
  },
  {
    id: "p4",
    title: "Penjualan dan stok dicatat di tempat berbeda",
    description: "Kasir mencatat di buku/POS standar, gudang mencatat di catatan terpisah, data tidak pernah sinkron.",
    solutionHighlight: "Sistem terintegrasi: stok langsung terpotong saat transaksi kasir berhasil."
  },
  {
    id: "p5",
    title: "Stok fisik sering berbeda dengan catatan",
    description: "Saat ada pesanan besar baru ketahuan barang habis, atau barang hilang tanpa ada jejak riwayat mutasi.",
    solutionHighlight: "Modul audit stock opname berkala dengan log mutasi barang masuk, keluar, dan penyesuaian."
  },
  {
    id: "p6",
    title: "Laporan masih dibuat manual di spreadsheet",
    description: "Pemilik usaha harus meluangkan waktu berjam-jam tiap akhir bulan hanya untuk merekap omzet dan laba rugi.",
    solutionHighlight: "Dashboard laporan penjualan, produk terlaris, dan laba kotor yang terbit otomatis real-time."
  },
  {
    id: "p7",
    title: "Approval dokumen tersebar di banyak grup chat",
    description: "Pengajuan PO, diskon khusus, dan reimburse hilang di tumpukan chat tanpa jejak approval resmi.",
    solutionHighlight: "Workflow approval sistemik dengan notifikasi dan histori otorisasi yang aman."
  },
  {
    id: "p8",
    title: "Sistem lama kaku dan tidak bisa dikembangkan",
    description: "Aplikasi bawaan vendor tidak bisa ditambah fitur baru saat skala bisnis berkembang.",
    solutionHighlight: "Custom architecture yang fleksibel, scalable, dan siap ditambah modul baru sesuai kebutuhan."
  },
  {
    id: "p9",
    title: "Pekerjaan administratif berulang menyita waktu",
    description: "Waktu pemilik bisnis habis mengurus administrasi manual alih-alih fokus ekspansi dan pemasaran.",
    solutionHighlight: "Otomatisasi pencatatan, invoice, dan rekap mutasi yang memangkas beban kerja operasional."
  }
];
