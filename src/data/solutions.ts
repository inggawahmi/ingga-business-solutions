import { LocalizedText } from "@/types/language";

export interface SolutionPageDataBilingual {
  slug: string;
  badge: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  heroHeadline: LocalizedText;
  heroSubheadline: LocalizedText;
  targetAudience: LocalizedText;
  painPoints: { title: LocalizedText; desc: LocalizedText }[];
  keyFeatures: { title: LocalizedText; desc: LocalizedText; iconName: string }[];
  deliverables: LocalizedText[];
  workflowSteps: { step: string; title: LocalizedText; desc: LocalizedText }[];
  ctaText: LocalizedText;
  ctaSource: string;
  faqs: { q: LocalizedText; a: LocalizedText }[];
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
}

export const SOLUTIONS_MAP_BILINGUAL: Record<string, SolutionPageDataBilingual> = {
  "erp-insurance-reinsurance": {
    slug: "erp-insurance-reinsurance",
    badge: {
      id: "Kemampuan Sistem Perusahaan",
      en: "Enterprise Systems & Domain Expertise"
    },
    title: {
      id: "Sistem ERP Asuransi & Reasuransi",
      en: "Insurance & Reinsurance ERP Systems"
    },
    subtitle: {
      id: "Sistem operasional custom untuk penerbitan polis, alur penempatan reasuransi, komisi lintas mata uang, dan rekonsiliasi keuangan.",
      en: "Custom business systems for policy management, reinsurance placement workflows, multi-currency accounting, and financial reconciliation."
    },
    heroHeadline: {
      id: "Sistem Operasional yang Mengikuti Kompleksitas Alur Kerja Asuransi & Reasuransi",
      en: "Operational Systems Built Around Insurance & Reinsurance Complexity"
    },
    heroSubheadline: {
      id: "Dirancang untuk menyatukan pencatatan polis, alur penempatan reasuransi, perhitungan premi lintas mata uang, statement of account, dan riwayat audit dalam satu alur terpadu.",
      en: "Designed to connect policy records, placement pipelines, multi-currency premium ledgers, statement of accounts, and audit trails into a single workflow."
    },
    targetAudience: {
      id: "Perusahaan asuransi umum, broker asuransi, broker reasuransi, dan underwriter.",
      en: "General insurance companies, insurance brokers, reinsurance brokers, and underwriting firms."
    },
    painPoints: [
      {
        title: {
          id: "Perhitungan komisi dan pajak lintas mata uang terpisah di spreadsheet",
          en: "Multi-currency commissions and tax calculations isolated in spreadsheets"
        },
        desc: {
          id: "Transaksi melibatkan IDR, USD, EUR, atau SGD dengan rate konversi dan komisi bertingkat yang rawan selisih pembulatan bila dihitung manual.",
          en: "Transactions across IDR, USD, EUR, or SGD with layered brokerage fees and taxes risk rounding discrepancies when computed manually."
        }
      },
      {
        title: {
          id: "Pelacakan alur penempatan reasuransi sulit ditelusuri",
          en: "Placement pipeline status is hard to track"
        },
        desc: {
          id: "Dokumen slip penawaran, persentase share asuradur, dan status konfirmasi tersebar di email tanpa status terpusat.",
          en: "Offer slips, lead/following reinsurer shares, and confirmation statuses are scattered across emails without a single source of truth."
        }
      },
      {
        title: {
          id: "Pembuatan Statement of Account (SOA) memakan waktu lama",
          en: "Statement of Account (SOA) reconciliation takes days"
        },
        desc: {
          id: "Tim keuangan harus mencocokkan mutasi bank dengan nota debit/kredit satu per satu secara manual.",
          en: "Finance teams must manually cross-reference bank settlements against open debit and credit notes line by line."
        }
      }
    ],
    keyFeatures: [
      {
        title: {
          id: "Alur Penempatan Risiko & Underwriting",
          en: "Placement Pipeline & Underwriting Workflows"
        },
        desc: {
          id: "Pemantauan status penempatan treaty dan fakultatif dari penawaran, porsi asuradur, hingga slip final.",
          en: "Real-time tracking of treaty and facultative placements from slip distribution to final confirmed capacity."
        },
        iconName: "ShieldCheck"
      },
      {
        title: {
          id: "Kalkulasi Premi & Komisi Presisi",
          en: "Precision Premium & Brokerage Engine"
        },
        desc: {
          id: "Perhitungan premi bruto, komisi pialang, pajak, dan premi neto secara konsisten pada tiap transaksi lintas mata uang.",
          en: "Consistent computation of gross premium, brokerage fee, taxes, and net amounts across multi-currency transactions."
        },
        iconName: "Calculator"
      },
      {
        title: {
          id: "Otomasi Statement of Account (SOA) & Nota",
          en: "Automated Statement of Account & Note Generation"
        },
        desc: {
          id: "Penerbitan otomatis Nota Debit, Nota Kredit, dan ringkasan rekening koran siap kirim ke pihak asuradur.",
          en: "Automatic generation of Debit Notes, Credit Notes, and client statements ready for settlement."
        },
        iconName: "FileSpreadsheet"
      },
      {
        title: {
          id: "Hak Akses & Riwayat Perubahan Terperinci",
          en: "Role-Based Access & Comprehensive Audit Trail"
        },
        desc: {
          id: "Pembatasan hak akses berbasis peran per divisi serta pencatatan otomatis setiap aktivitas input dan persetujuan dokumen.",
          en: "Granular access controls by department with full timestamped logging for every edit and approval."
        },
        iconName: "Lock"
      }
    ],
    deliverables: [
      {
        id: "Aplikasi web internal custom terpasang di server/cloud privat perusahaan",
        en: "Custom internal web application hosted on private company cloud/on-premise server"
      },
      {
        id: "Database relasional teroptimasi dengan audit log lengkap",
        en: "Relational database designed for transactional integrity and audit logging"
      },
      {
        id: "Template dokumen Nota Debit, Nota Kredit, dan SOA otomatis",
        en: "Automated document templates for Debit Notes, Credit Notes, and SOA"
      },
      {
        id: "Sesi pelatihan bagi tim operasional dan keuangan",
        en: "Comprehensive onboarding and user training for operations and finance teams"
      },
      {
        id: "Garansi perbaikan dan dukungan pemeliharaan",
        en: "Post-launch warranty, issue resolution, and maintenance readiness"
      }
    ],
    workflowSteps: [
      {
        step: "01",
        title: { id: "Pemetaan Alur & Kebutuhan", en: "Discovery & Workflow Mapping" },
        desc: {
          id: "Menganalisis jenis bisnis, struktur dokumen penempatan, dan formula pembagian komisi.",
          en: "Analyzing your business model, placement documentation rules, and brokerage splits."
        }
      },
      {
        step: "02",
        title: { id: "Perancangan Pengelolaan Data", en: "Data Architecture & Logic" },
        desc: {
          id: "Merancang struktur database transaksi, formula kalkulasi keuangan, dan hak akses.",
          en: "Structuring transactional schema, financial calculation logic, and security permissions."
        }
      },
      {
        step: "03",
        title: { id: "Implementasi & Uji Coba", en: "Implementation & Validation" },
        desc: {
          id: "Membangun sistem dan memvalidasi keakuratan perhitungan premi serta penerbitan nota.",
          en: "Building modules and rigorously testing calculation accuracy and note rendering."
        }
      },
      {
        step: "04",
        title: { id: "Pelatihan & Serah Terima", en: "Training & Go-Live" },
        desc: {
          id: "Pelatihan langsung bagi tim operasional dan pendampingan penggunaan harian.",
          en: "Direct training for operational staff with live adoption guidance."
        }
      }
    ],
    ctaText: {
      id: "Diskusikan Kebutuhan Sistem ERP",
      en: "Discuss Your ERP Requirements"
    },
    ctaSource: "solution-erp-insurance-page",
    faqs: [
      {
        q: {
          id: "Apakah data transaksi kami aman di sistem ini?",
          en: "Is our transactional and client data secure in this system?"
        },
        a: {
          id: "Ya. Sistem dibangun di infrastruktur server privat perusahaan Anda dengan enkripsi data, pembatasan hak akses berbasis peran, dan catatan riwayat audit tanpa campur tangan pihak ketiga.",
          en: "Yes. The system is deployed exclusively on your private infrastructure with encryption, granular role permissions, and immutable audit logs."
        }
      },
      {
        q: {
          id: "Apakah sistem dapat menangani transaksi mata uang asing?",
          en: "Can the system handle foreign currency settlements?"
        },
        a: {
          id: "Sistem mendukung transaksi lintas mata uang (seperti IDR, USD, EUR, SGD) dengan nilai tukar per tanggal transaksi dan perhitungan presisi.",
          en: "The system natively supports multi-currency ledger entries with historical exchange rate tracking and precision arithmetic."
        }
      }
    ],
    seoTitle: {
      id: "Sistem ERP Asuransi & Reasuransi Custom",
      en: "Custom Insurance & Reinsurance ERP Systems"
    },
    seoDescription: {
      id: "Pengembangan sistem ERP custom untuk operasional asuransi & reasuransi: penempatan risiko, komisi multi-currency, nota debit/kredit, SOA, dan audit trail.",
      en: "Custom ERP development for insurance and reinsurance operations: placement workflows, multi-currency ledgers, debit/credit notes, SOA, and audit compliance."
    }
  },
  "inventory-pos": {
    slug: "inventory-pos",
    badge: {
      id: "Solusi Operasional & Pergudangan",
      en: "Operations & Inventory Management"
    },
    title: {
      id: "Sistem Inventory & Mutasi Persediaan",
      en: "Inventory Control & Stock Movement Systems"
    },
    subtitle: {
      id: "Aplikasi internal untuk pencatatan persediaan barang multi-lokasi, persetujuan pengadaan, dan audit pemeriksaan fisik digital.",
      en: "Internal applications for multi-location stock tracking, purchase requisition approvals, and digital physical audit reconciliation."
    },
    heroHeadline: {
      id: "Kendalikan Keluar-Masuk Barang dan Akurasi Stok Tanpa Ketergantungan Rekap Manual",
      en: "Control Stock Movement and Inventory Accuracy Without Manual Spreadsheets"
    },
    heroSubheadline: {
      id: "Sistem manajemen persediaan yang dirancang sesuai alur perpindahan barang di toko, gudang pusat, maupun pabrik Anda untuk meminimalisir selisih data.",
      en: "Custom inventory tracking tailored to your specific warehouse and branch movement rules to minimize discrepancies."
    },
    targetAudience: {
      id: "Bisnis distribusi, grosir, manufaktur, dan bisnis berkembang dengan beberapa lokasi gudang.",
      en: "Distributors, wholesalers, manufacturers, and growing businesses operating multiple warehouse locations."
    },
    painPoints: [
      {
        title: {
          id: "Selisih barang antara catatan spreadsheet dan fisik gudang",
          en: "Stock discrepancy between spreadsheets and physical warehouses"
        },
        desc: {
          id: "Barang keluar-masuk tidak tercatat secara real-time sehingga menyulitkan saat pemeriksaan fisik bulanan.",
          en: "Stock movements are not tracked synchronously, creating confusion during routine monthly physical counts."
        }
      },
      {
        title: {
          id: "Perpindahan antar-cabang rawan hilang tanpa surat jalan resmi",
          en: "Inter-branch transfers lack verified delivery receipts"
        },
        desc: {
          id: "Pengiriman barang antar gudang sering kali hanya mengandalkan chat tanpa verifikasi tanda terima yang jelas.",
          en: "Stock dispatch between branches relies on unrecorded informal communication rather than signed digital handoffs."
        }
      }
    ],
    keyFeatures: [
      {
        title: {
          id: "Mutasi Persediaan Multi-Lokasi",
          en: "Multi-Location Stock Movement"
        },
        desc: {
          id: "Setiap perpindahan stok antar lokasi mewajibkan verifikasi status kirim dan terima secara transparan.",
          en: "Every transfer between warehouse locations requires explicit dispatch and receipt verification."
        },
        iconName: "Boxes"
      },
      {
        title: {
          id: "Rekonsiliasi Pemeriksaan Fisik (Stock Opname)",
          en: "Digital Stock Audit Reconciliation"
        },
        desc: {
          id: "Pencatatan fisik langsung di sistem dengan perhitungan otomatis selisih barang.",
          en: "Direct physical count input with automatic discrepancy calculations against system ledger."
        },
        iconName: "ClipboardCheck"
      },
      {
        title: {
          id: "Alur Persetujuan Pengadaan Barang",
          en: "Purchase Requisition & Approval Flow"
        },
        desc: {
          id: "Pengajuan pembelian barang dagang harus melalui alur persetujuan sebelum diteruskan ke pemasok.",
          en: "Formal purchase orders must pass required managerial approvals before dispatching to suppliers."
        },
        iconName: "CheckCircle2"
      }
    ],
    deliverables: [
      { id: "Aplikasi web sistem inventory dengan dashboard stok", en: "Web inventory system with real-time stock dashboard" },
      { id: "Modul pencatatan mutasi barang dan surat jalan digital", en: "Digital stock transfer and verified delivery note modules" },
      { id: "Modul verifikasi hasil pemeriksaan fisik (stock opname)", en: "Stock opname physical audit reconciliation module" },
      { id: "Pelatihan penggunaan bagi staf operasional", en: "Hands-on operational training for warehouse personnel" }
    ],
    workflowSteps: [
      {
        step: "01",
        title: { id: "Pemetaan Alur Barang", en: "Stock Flow Mapping" },
        desc: {
          id: "Mengidentifikasi alur perpindahan barang, titik gudang, dan peran masing-masing staf.",
          en: "Mapping stock movement points, storage locations, and staff authorization boundaries."
        }
      },
      {
        step: "02",
        title: { id: "Perancangan & Validasi", en: "Design & Validation Rules" },
        desc: {
          id: "Membangun form input mutasi dan batas minimum stok yang mencegah kesalahan input ganda.",
          en: "Building data entry forms and safety threshold alerts preventing double-booking."
        }
      },
      {
        step: "03",
        title: { id: "Uji Coba Lapangan", en: "Field Testing" },
        desc: {
          id: "Menguji sistem bersama staf gudang untuk memastikan antarmuka mudah digunakan.",
          en: "Validating workflows directly with operational teams to ensure ergonomic usage."
        }
      },
      {
        step: "04",
        title: { id: "Penerapan & Pendampingan", en: "Rollout & Support" },
        desc: {
          id: "Penerapan sistem ke operasional harian dengan pendampingan saat pemeriksaan fisik awal.",
          en: "Live deployment with on-site assistance during initial inventory counts."
        }
      }
    ],
    ctaText: {
      id: "Diskusikan Sistem Inventory Anda",
      en: "Discuss Your Inventory Requirements"
    },
    ctaSource: "solution-inventory-page",
    faqs: [
      {
        q: {
          id: "Apakah sistem ini bisa digunakan di beberapa lokasi gudang sekaligus?",
          en: "Can this system manage multiple warehouse locations simultaneously?"
        },
        a: {
          id: "Ya. Sistem berbasis web terpusat sehingga dapat diakses dari gudang pusat maupun cabang dengan hak akses terpisah per lokasi.",
          en: "Yes. The centralized cloud/web application allows distinct access controls and segregated stock views per facility."
        }
      }
    ],
    seoTitle: {
      id: "Sistem Inventory & Mutasi Persediaan Custom",
      en: "Custom Inventory & Stock Control Systems"
    },
    seoDescription: {
      id: "Jasa pembuatan sistem inventory custom: mutasi stok multi-gudang, digital stock opname, alur persetujuan pengadaan, dan laporan persediaan real-time.",
      en: "Custom inventory management systems: multi-warehouse tracking, digital stock audits, purchase approvals, and real-time inventory reporting."
    }
  },
  "cafe-umkm": {
    slug: "cafe-umkm",
    badge: {
      id: "Solusi Website Bisnis & F&B",
      en: "Business Presence & F&B Solutions"
    },
    title: {
      id: "Website Bisnis & Menu Digital",
      en: "Business Websites & Digital Menus"
    },
    subtitle: {
      id: "Tampilkan menu lengkap, layanan, jam operasional, lokasi Google Maps, dan tombol konsultasi langsung.",
      en: "Showcase complete menus, services, operating hours, Google Maps directions, and direct consultation channels."
    },
    heroHeadline: {
      id: "Bantu Pelanggan Menemukan Informasi, Menu, dan Cara Menghubungi Bisnis Anda",
      en: "Help Customers Find Your Offerings, Location, and How to Contact You"
    },
    heroSubheadline: {
      id: "Website mobile-friendly yang membantu calon pelanggan mempelajari layanan dan menu Anda secara mandiri tanpa harus bertanya berulang kali.",
      en: "A responsive website that lets prospective customers browse your products and services cleanly without repetitive inquiry."
    },
    targetAudience: {
      id: "Bisnis jasa, cafe, restoran, bakery, dan usaha lokal berkembang.",
      en: "Service businesses, cafes, bakeries, restaurants, and growing local enterprises."
    },
    painPoints: [
      {
        title: {
          id: "Informasi bisnis tersebar di banyak tempat",
          en: "Business information is scattered across channels"
        },
        desc: {
          id: "Calon pengunjung kesulitan mencari daftar menu terbaru, jam buka, atau petunjuk arah karena tertimbun konten promosi lama.",
          en: "Customers struggle to find current pricing, hours, or locations buried in old social media feeds."
        }
      },
      {
        title: {
          id: "Waktu terbuang menjawab pertanyaan harga berulang kali",
          en: "Time wasted answering repetitive pricing questions"
        },
        desc: {
          id: "Admin harus berulang kali mengetik daftar harga dan varian yang sebenarnya bisa tersaji rapi di website.",
          en: "Staff spend valuable hours typing out basic service lists that could easily live on a structured page."
        }
      }
    ],
    keyFeatures: [
      {
        title: {
          id: "Katalog Layanan & Menu Terstruktur",
          en: "Structured Service & Product Catalog"
        },
        desc: {
          id: "Daftar layanan atau menu lengkap dengan harga resmi, deskripsi jelas, dan highlight unggulan.",
          en: "Complete service or menu listings with transparent pricing and clear descriptions."
        },
        iconName: "Globe"
      },
      {
        title: {
          id: "Integrasi Lokasi Google Maps & Jam Buka",
          en: "Google Maps & Operational Hours Integration"
        },
        desc: {
          id: "Petunjuk arah sekali klik dan status operasional yang jelas bagi pengunjung.",
          en: "One-click directions and unambiguous open/closed indicators for visitors."
        },
        iconName: "MapPin"
      },
      {
        title: {
          id: "Jalur Komunikasi & Pemesanan Terarah",
          en: "Structured Inquiry & Ordering Path"
        },
        desc: {
          id: "Format pesan atau form konsultasi yang langsung terhubung ke admin bisnis Anda.",
          en: "Inquiry triggers that pre-format customer requests directly to your communication channel."
        },
        iconName: "MessageCircle"
      }
    ],
    deliverables: [
      { id: "Website responsive yang nyaman dibuka di smartphone maupun laptop", en: "Fully responsive website optimized for mobile and desktop screens" },
      { id: "Struktur informasi bisnis dan katalog produk terarah", en: "Structured business layout and intuitive product presentation" },
      { id: "Setup domain kustom dan hosting cepat", en: "Custom domain setup and fast cloud hosting" },
      { id: "Panduan pembaruan informasi mandiri", en: "Simple guide for self-service content and pricing updates" }
    ],
    workflowSteps: [
      {
        step: "01",
        title: { id: "Pengumpulan Materi", en: "Asset & Content Gathering" },
        desc: {
          id: "Mengumpulkan daftar layanan, harga, foto, jam buka, dan kontak bisnis Anda.",
          en: "Collecting services, pricing, imagery, operating hours, and business contact info."
        }
      },
      {
        step: "02",
        title: { id: "Desain Visual & Struktur", en: "Design & Information Architecture" },
        desc: {
          id: "Menyusun tampilan website yang profesional, rapi, dan nyaman dibaca calon pelanggan.",
          en: "Crafting a clean, legible layout that presents your brand with credibility."
        }
      },
      {
        step: "03",
        title: { id: "Peluncuran & Handover", en: "Launch & Handover" },
        desc: {
          id: "Website resmi online dan siap dipasang di profil bisnis Anda.",
          en: "Website goes live with ownership handed over and verified across devices."
        }
      }
    ],
    ctaText: {
      id: "Diskusikan Website Bisnis Anda",
      en: "Discuss Your Website Project"
    },
    ctaSource: "solution-cafe-page",
    faqs: [
      {
        q: {
          id: "Berapa lama proses pembuatan website ini?",
          en: "How long does a website project typically take?"
        },
        a: {
          id: "Umumnya 1 sampai 2 minggu setelah seluruh materi foto, daftar layanan, dan informasi bisnis terkumpul.",
          en: "Usually 1 to 2 weeks once all copy, imagery, and business details are gathered."
        }
      }
    ],
    seoTitle: {
      id: "Jasa Pembuatan Website Bisnis & Katalog Digital",
      en: "Business Websites & Digital Catalog Services"
    },
    seoDescription: {
      id: "Pembuatan website profesional untuk bisnis dan usaha lokal: katalog layanan terstruktur, lokasi Google Maps, jam operasional, dan jalur inquiry jelas.",
      en: "Professional website creation for local and service businesses: structured catalogs, Google Maps integration, operating hours, and clear inquiry paths."
    }
  }
};
