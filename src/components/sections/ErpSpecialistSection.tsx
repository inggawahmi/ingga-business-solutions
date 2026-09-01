import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

export function ErpSpecialistSection() {
  const erpBenefits = [
    "Data penting berada dalam satu alur yang lebih terkontrol.",
    "Tanggung jawab dan hak akses dapat dibedakan dengan jelas.",
    "Proses approval lebih mudah dipantau antar bagian.",
    "Laporan dapat disusun dari data operasional yang konsisten.",
  ];

  return (
    <section id="erp" className="py-20 sm:py-24 bg-[#101C24] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17324D] text-[#D79445] text-xs font-bold border border-[#177568]/40">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise Capability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            ERP untuk Proses Bisnis yang Tidak Bisa Diselesaikan Software Generik
          </h2>

          <p className="text-sm sm:text-base text-[#8D9B9D] leading-relaxed font-normal">
            Untuk perusahaan dengan alur kerja, perhitungan, pengelolaan data, dan kebutuhan pelaporan yang lebih kompleks.
          </p>
        </div>

        {/* Business-focused explanation banner */}
        <div className="bg-[#17324D]/60 rounded-3xl p-6 sm:p-8 border border-[#177568]/30 space-y-6">
          <p className="text-sm text-[#DCE3E5] leading-relaxed max-w-2xl">
            ERP dirancang untuk menyatukan proses penting perusahaan dalam satu sistem yang mengikuti cara bisnis bekerja—bukan sekadar menambahkan sebanyak mungkin fitur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {erpBenefits.map((b, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#101C24]/80 border border-[#1D2B34] space-y-2">
                <CheckCircle2 className="w-4 h-4 text-[#177568]" />
                <p className="text-xs text-[#DCE3E5] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance & Reinsurance Specialization Highlight Card */}
        <div className="bg-gradient-to-br from-[#17324D] to-[#101C24] rounded-3xl p-7 sm:p-9 border border-[#177568]/50 shadow-xl space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#177568] text-white text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Pengalaman Khusus di Insurance & Reinsurance</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Memahami Alur Kompleks Asuransi, Reasuransi, dan Multi-Currency
              </h3>

              <p className="text-xs sm:text-sm text-[#DCE3E5] leading-relaxed font-normal">
                Berpengalaman menangani sistem untuk proses asuransi dan reasuransi yang melibatkan banyak tahapan, dokumen, transaksi, perhitungan, serta kebutuhan pelaporan.
              </p>

              <p className="text-xs text-[#8D9B9D] leading-relaxed">
                Pengalaman domain ini membantu proses analisis kebutuhan dilakukan dengan pemahaman yang lebih matang terhadap kompleksitas bisnis insurance dan reinsurance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#177568] hover:bg-[#136055] text-white font-bold text-xs transition-colors shadow-xs"
              >
                <span>Bahas Kebutuhan ERP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solusi/erp-insurance-reinsurance"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs transition-colors"
              >
                <span>Lihat Pengalaman Proyek ERP</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
