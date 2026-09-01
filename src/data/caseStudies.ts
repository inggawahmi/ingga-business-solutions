export interface RealCaseStudy {
  id: string;
  badge: string;
  title: string;
  industry: string;
  businessOutcome: string;
  scopeHighlights: string[];
  techProof: string[];
}

export const REAL_CASE_STUDIES: RealCaseStudy[] = [
  {
    id: "cs-reinsurance",
    badge: "Pengalaman Produksi • Identitas Klien Dirahasiakan",
    title: "Sistem ERP Broker Reasuransi",
    industry: "Financial & Reinsurance",
    businessOutcome: "Menyatukan workflow placing, pencatatan premi, rekonsiliasi, dan pelaporan dalam sistem terintegrasi yang lebih mudah diaudit.",
    scopeHighlights: [
      "Facultative & Treaty reinsurance placement workflow",
      "Multi-currency premium ledger (IDR, USD, EUR, SGD)",
      "Automated Statement of Account (SOA) reporting",
      "Debit Note & Credit Note automated generation",
      "Bank mutation reconciliation & payment allocation",
      "Arbitrary-precision arithmetic (BCMath) untuk perhitungan komisi & pajak"
    ],
    techProof: ["PHP 8", "Laravel", "MySQL 8 (InnoDB)", "BCMath", "REST APIs", "Docker"]
  },
  {
    id: "cs-insurance",
    badge: "Pengalaman Produksi • Identitas Klien Dirahasiakan",
    title: "Sistem Core Manajemen Asuransi",
    industry: "Insurance & Underwriting",
    businessOutcome: "Digitalisasi penerbitan polis, otomatisasi perhitungan rate risiko pertanggungan, dan rekonsiliasi penagihan premi klien enterprise.",
    scopeHighlights: [
      "Policy Administration & underwriting registry",
      "Dynamic risk rating rule calculation engine",
      "Premium billing schedule & payment milestone tracking",
      "Customer registry & policy endorsement history",
      "Financial reconciliation & automated invoice generation",
      "Role-based security & comprehensive audit logging"
    ],
    techProof: ["PHP 8", "Laravel", "MySQL 8", "Database Optimization", "Linux / Docker"]
  },
  {
    id: "cs-manufacturing",
    badge: "Pengalaman Produksi • Identitas Klien Dirahasiakan",
    title: "Sistem ERP Manufaktur & Inventory",
    industry: "Manufacturing & Supply Chain",
    businessOutcome: "Transparansi mutasi persediaan barang dan digitalisasi audit stock opname fisik vs catatan sistem secara real-time.",
    scopeHighlights: [
      "Raw Materials, WIP (Work in Progress), & Finished Goods tracking",
      "Multi-warehouse inventory mutation & transfer validation",
      "Digital physical-versus-system Stock Opname reconciliation",
      "Sales Order, Delivery Order, Surat Jalan & Invoicing",
      "FIFO batch inventory tracking & production logs",
      "Export laporan mutasi barang untuk kebutuhan audit"
    ],
    techProof: ["PHP 8", "Laravel", "MySQL 8", "Inventory Algorithms", "Nginx"]
  }
];

export const CONFIDENTIALITY_NOTICE = "Informasi proyek enterprise telah digeneralisasi untuk menjaga kerahasiaan klien, tanpa melebih-lebihkan cakupan pekerjaan yang dilakukan.";
