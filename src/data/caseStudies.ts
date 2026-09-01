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
    id: "Pengalaman dari website publik hingga aplikasi internal dan ERP dengan proses kerja yang kompleks.",
    en: "Experience ranging from public business websites to internal workflows and complex ERP systems."
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
      id: "Alur penempatan risiko treaty dan fakultatif melibatkan banyak dokumen dan transaksi lintas mata uang yang sebelumnya dicatat terpisah di spreadsheet.",
      en: "Treaty and facultative placement workflows involved multi-party slips, commissions, and multi-currency transactions tracked manually in spreadsheets."
    },
    solutionBuilt: {
      id: "Membangun sistem terpadu untuk alur penempatan risiko, perhitungan komisi lintas mata uang presisi, dan pembuatan otomatis Statement of Account.",
      en: "Built an integrated system covering placement pipelines, multi-currency commission calculation, automated debit/credit notes, and statement of account reconciliation."
    },
    myRole: {
      id: "Merancang alur pengelolaan transaksi dan proses penempatan risiko agar data lebih konsisten dan mudah ditelusuri.",
      en: "Designed the transactional data architecture, placing workflow, financial calculation logic, and audit trail logging."
    },
    businessValue: {
      id: "Riwayat penempatan tersusun konsisten dalam satu sistem dan mempermudah audit operasional.",
      en: "Consolidated all placing history into one clear audit trail, speeding up financial closing and reconciliation."
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
    systemType: {
      id: "Sistem Manajemen Polis",
      en: "Core Policy Management System"
    },
    challenge: {
      id: "Penerbitan dokumen polis dan perhitungan jadwal tagihan premi manual membutuhkan waktu lama serta rawan selisih endorsement.",
      en: "Manual policy issuance and premium billing schedules were time-consuming and vulnerable to endorsement discrepancies."
    },
    solutionBuilt: {
      id: "Membangun aplikasi administrasi polis yang mengotomatisasi perhitungan risiko, pencatatan endorsement, dan pelacakan pembayaran premi nasabah.",
      en: "Built a policy administration system automating risk rating rules, endorsement lifecycles, and premium payment milestone tracking."
    },
    myRole: {
      id: "Menganalisis alur bisnis polis, membangun formula perhitungan premi, serta mengatur pembatasan hak akses pengguna.",
      en: "Analyzed insurance workflow, built the rule-based calculation engine, endorsement lifecycle, and granular access controls."
    },
    businessValue: {
      id: "Mempercepat pemrosesan dokumen polis dan memastikan setiap perubahan data memiliki penanggung jawab yang jelas.",
      en: "Shortened policy turnaround time while ensuring clear accountability and compliance across all policy changes."
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
      id: "Pencatatan mutasi barang di beberapa lokasi gudang terpisah menyebabkan selisih data stok saat pemeriksaan fisik rutin.",
      en: "Stock transfers across separate warehouse locations created discrepancies during routine physical inventory audits."
    },
    solutionBuilt: {
      id: "Membangun sistem inventory digital dengan alur verifikasi mutasi barang, persetujuan pengadaan, dan audit selisih stok fisik.",
      en: "Built a centralized inventory system with verified transfer workflows, purchase requisition approvals, and digital stock audit reconciliation."
    },
    myRole: {
      id: "Mendesain alur mutasi barang, modul audit fisik vs sistem, serta ringkasan posisi stok untuk pimpinan.",
      en: "Designed inventory transfer workflows, physical-vs-system audit discrepancy logic, and real-time management dashboards."
    },
    businessValue: {
      id: "Posisi stok dapat dipantau langsung antar gudang dan mempercepat proses verifikasi audit bulanan.",
      en: "Provided real-time stock visibility across all warehouses, cutting audit reconciliation time significantly."
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
  id: "Informasi proyek enterprise telah dianonimkan untuk menjaga kerahasiaan klien, tanpa mengubah fakta pekerjaan yang telah diselesaikan.",
  en: "Enterprise project details are generalized to respect client confidentiality, without altering facts of the work delivered."
};
