export interface FeaturedCaseStudy {
  id: string;
  domain: string;
  title: string;
  systemType: string;
  badge: string;
  challenge: string;
  solutionBuilt: string;
  myRole: string;
  businessValue: string;
  technicalDetails: {
    architecture: string;
    keyModules: string[];
    techStack: string[];
  };
}

export const FEATURED_CASE_STUDIES: FeaturedCaseStudy[] = [
  {
    id: "cs-reinsurance-erp",
    domain: "Financial & Reinsurance",
    title: "Sistem Operasional & Placing Broker Reasuransi",
    systemType: "Custom Reinsurance ERP",
    badge: "Enterprise Production Experience",
    challenge: "Pengelolaan alur placing treaty dan fakultatif melibatkan banyak pihak asuradur, dokumen slip penawaran, perhitungan komisi, dan transaksi multi-mata uang yang sebelumnya dicatat terpisah di spreadsheet.",
    solutionBuilt: "Membangun sistem terintegrasi yang mencakup registrasi placing, kalkulasi premi multi-mata uang dengan perhitungan komisi & pajak presisi, pembuatan otomatis Debit/Credit Note, serta rekonsiliasi pembayaran Statement of Account (SOA).",
    myRole: "Merancang arsitektur database transaksi, alur workflow penempatan (placing), modul kalkulasi keuangan, serta hak akses dan audit trail riwayat perubahan data.",
    businessValue: "Seluruh riwayat penempatan dan status pembayaran antar asuradur tersusun dalam satu alur yang konsisten, mempercepat pembuatan laporan keuangan dan mempermudah audit operasional.",
    technicalDetails: {
      architecture: "Modular Monolith dengan relational transactional integrity dan background document generator.",
      keyModules: [
        "Facultative & Treaty Reinsurance Placing Pipeline",
        "Multi-currency Premium Ledger (IDR, USD, EUR, SGD)",
        "Automated Statement of Account (SOA) & Note Generation",
        "Bank Mutation Matching & Allocation Engine"
      ],
      techStack: ["PHP 8", "Laravel", "MySQL 8 (InnoDB)", "BCMath", "Docker", "Tailwind CSS"]
    }
  },
  {
    id: "cs-insurance-core",
    domain: "Insurance & Underwriting",
    title: "Sistem Manajemen Polis & Administrasi Underwriting",
    systemType: "Core Insurance Administration",
    badge: "Enterprise Production Experience",
    challenge: "Penerbitan polis asuransi dan kalkulasi rate risiko pertanggungan manual membutuhkan waktu lama dan rawan kesalahan manusia dalam pencatatan endorsement.",
    solutionBuilt: "Membangun aplikasi core administrasi polis yang mengotomatisasi perhitungan schedule penagihan premi, validasi batas pertanggungan, riwayat perubahan endorsement, dan approval klaim berjenjang.",
    myRole: "Menganalisis alur bisnis polis asuransi, membangun rule calculation engine risiko, modul endorsement, serta pengamanan hak akses data sensitif nasabah.",
    businessValue: "Mengurangi waktu pemrosesan penerbitan dokumen polis, meminimalisir kekeliruan perhitungan penagihan, dan memastikan setiap perubahan data memiliki riwayat penanggung jawab yang jelas.",
    technicalDetails: {
      architecture: "Rule-based underwriting engine dengan granular role-based access control (RBAC).",
      keyModules: [
        "Policy Administration & Endorsement Lifecycle",
        "Risk Rating & Schedule Calculation Engine",
        "Premium Billing & Account Milestone Tracking",
        "Audit Trail & User Activity Logging"
      ],
      techStack: ["PHP 8", "Laravel", "MySQL 8", "REST APIs", "Linux / Docker"]
    }
  },
  {
    id: "cs-inventory-manufacturing",
    domain: "Manufacturing & Distribution",
    title: "Sistem Kontrol Inventory & Perpindahan Stok Multi-Gudang",
    systemType: "Internal Operations & Inventory System",
    badge: "Operations Production Experience",
    challenge: "Pencatatan persediaan bahan baku dan barang jadi di beberapa gudang terpisah masih mengandalkan rekap manual, menyebabkan selisih data stok saat proses stock opname fisik.",
    solutionBuilt: "Membangun sistem inventory digital yang mencakup mutasi antar-lokasi, verifikasi transfer barang dengan surat jalan, purchase request approval, serta pencatatan digital hasil audit stock opname.",
    myRole: "Mendesain alur pencatatan mutasi barang dengan metode FIFO, modul audit discrepancy fisik vs sistem, serta dashboard monitoring stok kritis untuk manajemen.",
    businessValue: "Transparansi posisi stok di seluruh gudang dapat dipantau secara real-time, mempercepat verifikasi audit bulanan, dan mencegah keterlambatan pengadaan barang baku.",
    technicalDetails: {
      architecture: "Inventory tracking engine dengan validasi mutasi ganda (Double-entry validation).",
      keyModules: [
        "Multi-warehouse Mutation & Transfer Approval",
        "Digital Physical vs System Stock Opname Reconciliation",
        "Sales Order, Delivery Order & Surat Jalan Tracking",
        "Low Stock Alerts & Auto Procurement Requisition"
      ],
      techStack: ["PHP 8", "Laravel", "MySQL 8", "Inventory Algorithms", "Nginx"]
    }
  }
];

export const CONFIDENTIALITY_NOTICE = "Informasi proyek enterprise telah dianonimkan untuk menjaga kerahasiaan klien, tanpa mengubah atau melebih-lebihkan fakta pekerjaan yang telah diselesaikan.";
