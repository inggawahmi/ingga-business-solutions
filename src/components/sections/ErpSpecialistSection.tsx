"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/languageContext";
import { ShieldCheck, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

export function ErpSpecialistSection() {
  const { language } = useLanguage();

  const copy = {
    eyebrow: {
      id: "Kemampuan untuk Perusahaan",
      en: "Enterprise Capability",
    },
    heading: {
      id: "ERP yang Mengikuti Kompleksitas Proses Perusahaan",
      en: "ERP Built Around Complex Business Operations",
    },
    subheadline: {
      id: "Untuk perusahaan yang membutuhkan satu sistem untuk mengelola proses, data, tanggung jawab, dan pelaporan yang saling berkaitan.",
      en: "For companies that need connected processes, controlled data, clear responsibilities, and consistent reporting.",
    },
    mainExplanation: {
      id: "ERP dibangun berdasarkan cara perusahaan bekerja. Implementasinya dapat dilakukan bertahap, dimulai dari proses yang paling penting.",
      en: "ERP should follow how the company works. Implementation can be phased, starting with the processes that matter most.",
    },
    benefits: [
      { id: "Data penting tersusun dalam satu alur", en: "Keep important data within one connected process" },
      { id: "Tanggung jawab dan akses lebih jelas", en: "Clarify responsibilities and access" },
      { id: "Persetujuan lebih mudah dipantau", en: "Make approvals easier to monitor" },
      { id: "Laporan menggunakan data yang konsisten", en: "Build reports from consistent operational data" },
    ],
    specializationLabel: {
      id: "Pengalaman Khusus di Asuransi & Reasuransi",
      en: "Insurance & Reinsurance Experience",
    },
    specializationHeading: {
      id: "Memahami Proses Asuransi, Reasuransi, dan Transaksi Lintas Mata Uang",
      en: "Experience with Insurance, Reinsurance, and Multi-Currency Operations",
    },
    specializationDesc: {
      id: "Berpengalaman menangani sistem yang melibatkan banyak tahapan, dokumen, transaksi, perhitungan, dan kebutuhan pelaporan.",
      en: "Experience building systems that involve multiple stages, documents, transactions, calculations, and reporting requirements.",
    },
    supportingCopy: {
      id: "Pemahaman domain membantu proses analisis kebutuhan dilakukan dengan konteks yang lebih matang.",
      en: "Domain knowledge enables a more informed and relevant discovery process.",
    },
    primaryCta: {
      id: "Bahas Kebutuhan ERP",
      en: "Discuss Your ERP Needs",
    },
    secondaryCta: {
      id: "Lihat Pengalaman ERP",
      en: "View ERP Experience",
    },
  };

  return (
    <section id="erp" className="py-20 sm:py-24 bg-[#101C24] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17324D] text-[#D79445] text-xs font-bold border border-[#177568]/40">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === "id" ? copy.eyebrow.id : copy.eyebrow.en}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {language === "id" ? copy.heading.id : copy.heading.en}
          </h2>

          <p className="text-sm sm:text-base text-[#DCE3E5] leading-relaxed font-normal">
            {language === "id" ? copy.subheadline.id : copy.subheadline.en}
          </p>
        </div>

        {/* Business-focused explanation banner */}
        <div className="bg-[#17324D]/60 rounded-3xl p-6 sm:p-8 border border-[#177568]/30 space-y-6">
          <p className="text-sm text-[#DCE3E5] leading-relaxed max-w-2xl">
            {language === "id" ? copy.mainExplanation.id : copy.mainExplanation.en}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {copy.benefits.map((b, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#101C24]/80 border border-[#1D2B34] space-y-2">
                <CheckCircle2 className="w-4 h-4 text-[#177568]" />
                <p className="text-xs text-[#DCE3E5] leading-relaxed">
                  {language === "id" ? b.id : b.en}
                </p>
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
                <span>{language === "id" ? copy.specializationLabel.id : copy.specializationLabel.en}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {language === "id" ? copy.specializationHeading.id : copy.specializationHeading.en}
              </h3>

              <p className="text-xs sm:text-sm text-[#DCE3E5] leading-relaxed font-normal">
                {language === "id" ? copy.specializationDesc.id : copy.specializationDesc.en}
              </p>

              <p className="text-xs text-[#DCE3E5]/80 leading-relaxed">
                {language === "id" ? copy.supportingCopy.id : copy.supportingCopy.en}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#177568] hover:bg-[#136055] text-white font-bold text-xs transition-colors shadow-xs"
              >
                <span>{language === "id" ? copy.primaryCta.id : copy.primaryCta.en}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solusi/erp-insurance-reinsurance"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs transition-colors"
              >
                <span>{language === "id" ? copy.secondaryCta.id : copy.secondaryCta.en}</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
