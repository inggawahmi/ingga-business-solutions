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
    id: "Pengalaman Sistem Bisnis Nyata",
    en: "Real-World Production Business Systems"
  },
  subheadline: {
    id: "Pengalaman dari website bisnis hingga ERP perusahaan.",
    en: "Production experience from business websites to enterprise ERP."
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
      id: "Reasuransi & Keuangan",
      en: "Reinsurance & Finance"
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
      id: "Penempatan treaty dan fakultatif dicatat di spreadsheet terpisah.",
      en: "Treaty and facultative placements were tracked in separate spreadsheets."
    },
    solutionBuilt: {
      id: "Sistem terpadu untuk penempatan risiko, komisi otomatis, dan nota SOA.",
      en: "Integrated system for placement pipelines, automated commissions, and SOA notes."
    },
    myRole: {
      id: "Merancang arsitektur transaksi, penempatan risiko, dan audit log.",
      en: "Designed transactional architecture, placement pipelines, and audit trails."
    },
    businessValue: {
      id: "Riwayat penempatan terpusat mempercepat rekonsiliasi audit.",
      en: "Centralized placement records streamlined audit reconciliations."
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
      id: "Penerbitan polis dan jadwal tagihan rawan selisih endorsement.",
      en: "Manual policy issuance and premium billing schedules were prone to errors."
    },
    systemType: {
      id: "Sistem Manajemen Polis",
      en: "Core Policy Management System"
    },
    solutionBuilt: {
      id: "Aplikasi administrasi polis dengan kalkulasi premi dan pelacakan pembayaran.",
      en: "Policy administration system with premium calculations and payment tracking."
    },
    myRole: {
      id: "Menganalisis alur underwriting, formula premi, dan hak akses.",
      en: "Analyzed underwriting workflows, rating formulas, and user permissions."
    },
    businessValue: {
      id: "Penerbitan polis lebih cepat dengan data perubahan yang jelas.",
      en: "Accelerated policy turnaround with transparent data change tracking."
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
      id: "Mutasi antar-gudang menyebabkan selisih stok saat audit fisik.",
      en: "Inter-warehouse transfers caused stock discrepancies during physical counts."
    },
    solutionBuilt: {
      id: "Sistem inventory terpusat dengan verifikasi mutasi dan rekonsiliasi stok.",
      en: "Centralized inventory system with verified transfers and stock reconciliation."
    },
    myRole: {
      id: "Mendesain alur mutasi barang dan logika rekonsiliasi selisih fisik.",
      en: "Designed inventory transfer workflows and audit reconciliation logic."
    },
    businessValue: {
      id: "Posisi stok terpantau langsung dan mempercepat audit bulanan.",
      en: "Real-time stock visibility across warehouses, speeding up monthly audits."
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
  id: "Rincian proyek dianonimkan untuk menjaga kerahasiaan klien.",
  en: "Project details are generalized to respect client confidentiality."
};
