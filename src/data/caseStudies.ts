import { LocalizedText } from "@/types/language";

export interface FeaturedCaseStudyBilingual {
  id: string;
  domain: LocalizedText;
  title: LocalizedText;
  systemType: LocalizedText;
  challenge: LocalizedText;
  solutionBuilt: LocalizedText;
  myRole: LocalizedText;
  businessValue: LocalizedText;
  technicalDetails: {
    architecture: LocalizedText;
    keyModules: LocalizedText[];
    techStack: string[];
  };
}

export const CASE_STUDIES_SECTION_HEADER = {
  eyebrow: {
    id: "Pengalaman Proyek Nyata",
    en: "Proven Project Experience"
  },
  heading: {
    id: "Pengalaman Menangani Sistem Bisnis Nyata",
    en: "Real-World Business Systems Built for Production"
  },
  subheadline: {
    id: "Pengalaman dari website publik hingga aplikasi internal dan ERP proses kompleks.",
    en: "Experience ranging from public business websites to complex ERP systems."
  },
  labels: {
    challenge: { id: "Tantangan", en: "Challenge" },
    solutionBuilt: { id: "Yang Dibangun", en: "What Was Built" },
    myRole: { id: "Peran Saya", en: "My Role" },
    businessValue: { id: "Nilai untuk Bisnis", en: "Business Value" },
    viewSummary: { id: "Lihat Ringkasan Proyek", en: "View Project Summary" },
    viewTechnical: { id: "Lihat Detail Teknis", en: "View Technical Details" },
    hideTechnical: { id: "Tutup Detail Teknis", en: "Hide Technical Details" },
  }
};

export const FEATURED_CASE_STUDIES_BILINGUAL: FeaturedCaseStudyBilingual[] = [
  {
    id: "cs-reinsurance-erp",
    domain: {
      id: "Keuangan & Reasuransi",
      en: "Financial & Reinsurance"
    },
    title: {
      id: "Sistem Operasional & Penempatan Reasuransi",
      en: "Reinsurance Placement & Operations System"
    },
    systemType: {
      id: "ERP Asuransi & Reasuransi",
      en: "Insurance & Reinsurance ERP"
    },
    challenge: {
      id: "Alur penempatan risiko treaty dan fakultatif lintas mata uang sebelumnya dicatat terpisah di spreadsheet.",
      en: "Treaty and facultative placement workflows with multi-currency transactions were tracked manually in spreadsheets."
    },
    solutionBuilt: {
      id: "Membangun sistem terpadu untuk alur penempatan risiko, komisi otomatis, dan penerbitan nota Statement of Account.",
      en: "Built an integrated system covering placement pipelines, automated commission calculations, and statement of accounts."
    },
    myRole: {
      id: "Merancang alur transaksi dan proses penempatan risiko agar data konsisten.",
      en: "Designed transactional data architecture and placement pipelines."
    },
    businessValue: {
      id: "Riwayat penempatan tersusun konsisten dalam satu sistem dan mempermudah audit operasional.",
      en: "Consolidated placing history into one clear audit trail, speeding up closing."
    },
    technicalDetails: {
      architecture: {
        id: "Modular monolith dengan relasi data terpusat dan background document generator.",
        en: "Modular monolith with relational transactional integrity and background note generation."
      },
      keyModules: [
        { id: "Placing Pipeline Treaty & Fakultatif", en: "Facultative & Treaty Placing Pipeline" },
        { id: "Ledger Premi Lintas Mata Uang (IDR, USD, EUR, SGD)", en: "Multi-currency Premium Ledger (IDR, USD, EUR, SGD)" },
        { id: "Otomasi Statement of Account (SOA) & Nota Debit/Kredit", en: "Automated Statement of Account & Note Generation" },
        { id: "Rekonsiliasi Mutasi Bank & Alokasi Pembayaran", en: "Bank Mutation Matching & Allocation Engine" }
      ],
      techStack: ["PHP 8", "Laravel", "MySQL 8 (InnoDB)", "BCMath", "Docker", "Tailwind CSS"]
    }
  },
  {
    id: "cs-insurance-core",
    domain: {
      id: "Asuransi & Underwriting",
      en: "Insurance & Underwriting"
    },
    title: {
      id: "Sistem Administrasi Polis & Underwriting",
      en: "Policy Administration & Underwriting System"
    },
    challenge: {
      id: "Penerbitan polis dan jadwal tagihan premi manual rawan selisih perhitungan endorsement.",
      en: "Manual policy issuance and premium billing schedules were vulnerable to endorsement discrepancies."
    },
    systemType: {
      id: "Sistem Manajemen Polis",
      en: "Core Policy Management System"
    },
    solutionBuilt: {
      id: "Membangun sistem administrasi polis dengan otomasi kalkulasi premi dan pelacakan pembayaran nasabah.",
      en: "Built a policy administration system automating risk rating calculations and premium payment tracking."
    },
    myRole: {
      id: "Menganalisis alur polis, formula premi, dan pembatasan hak akses.",
      en: "Analyzed policy workflows, rating formulas, and access controls."
    },
    businessValue: {
      id: "Mempercepat pemrosesan dokumen polis dan memastikan setiap perubahan data memiliki penanggung jawab jelas.",
      en: "Shortened policy turnaround time while ensuring clear accountability across policy edits."
    },
    technicalDetails: {
      architecture: {
        id: "Rule calculation engine berbasis kebijakan underwriting dengan role-based access control.",
        en: "Rule-based underwriting engine with granular role-based access control (RBAC)."
      },
      keyModules: [
        { id: "Administrasi Siklus Hidup Polis & Endorsement", en: "Policy Administration & Endorsement Lifecycle" },
        { id: "Formula Perhitungan Rate Risiko & Jadwal Tagihan", en: "Risk Rating & Billing Schedule Engine" },
        { id: "Audit Log Aktivitas & Perubahan Data", en: "User Activity Logging & Audit Trail" }
      ],
      techStack: ["PHP 8", "Laravel", "MySQL 8", "REST APIs", "Linux / Docker"]
    }
  },
  {
    id: "cs-inventory-manufacturing",
    domain: {
      id: "Operasional & Distribusi",
      en: "Operations & Distribution"
    },
    title: {
      id: "Sistem Kontrol Inventory Multi-Gudang",
      en: "Multi-Warehouse Inventory Control System"
    },
    systemType: {
      id: "Sistem Operasional & Inventory",
      en: "Internal Operations & Inventory System"
    },
    challenge: {
      id: "Pencatatan mutasi barang di beberapa gudang menyebabkan selisih data stok saat pemeriksaan fisik.",
      en: "Stock transfers across separate warehouse locations created discrepancies during routine physical audits."
    },
    solutionBuilt: {
      id: "Membangun sistem inventory digital dengan verifikasi mutasi barang antar-gudang dan audit selisih stok.",
      en: "Built a centralized inventory system with verified transfer workflows and digital stock audit reconciliation."
    },
    myRole: {
      id: "Mendesain alur mutasi barang dan modul rekonsiliasi audit fisik.",
      en: "Designed inventory workflows and stock reconciliation logic."
    },
    businessValue: {
      id: "Posisi stok dapat dipantau langsung antar gudang dan mempercepat proses verifikasi audit bulanan.",
      en: "Provided real-time stock visibility across all warehouses, cutting audit reconciliation time."
    },
    technicalDetails: {
      architecture: {
        id: "Mesin pencatatan mutasi ganda dengan validasi stok real-time.",
        en: "Inventory tracking engine with double-entry mutation validation."
      },
      keyModules: [
        { id: "Mutasi Multi-Gudang & Verifikasi Pengiriman", en: "Multi-warehouse Transfer & Delivery Verification" },
        { id: "Audit Rekonsiliasi Selisih Stok Fisik", en: "Digital Physical-vs-System Stock Audit" },
        { id: "Persetujuan Pengajuan Pembelian Barang", en: "Purchase Requisition & Approval Workflow" }
      ],
      techStack: ["PHP 8", "Laravel", "MySQL 8", "Inventory Algorithms", "Nginx"]
    }
  }
];

export const CONFIDENTIALITY_NOTICE_BILINGUAL: LocalizedText = {
  id: "Informasi proyek enterprise dianonimkan untuk menjaga kerahasiaan klien tanpa mengubah fakta pekerjaan yang telah diselesaikan.",
  en: "Enterprise project details are generalized to respect client confidentiality, without altering facts of the work delivered."
};
