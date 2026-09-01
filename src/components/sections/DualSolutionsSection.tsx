"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/languageContext";
import { Globe, LayoutGrid, Check, ArrowRight } from "lucide-react";

export function DualSolutionsSection() {
  const { language } = useLanguage();

  const sol1 = {
    label: { id: "Di Depan Pelanggan", en: "Customer-Facing" },
    title: { id: "Website Profesional", en: "Professional Website" },
    heading: {
      id: "Tampilkan Bisnis dengan Lebih Meyakinkan",
      en: "Present Your Business with Confidence"
    },
    description: {
      id: "Website yang membantu calon pelanggan memahami bisnis, layanan, pengalaman, dan cara memulai percakapan dengan lebih jelas.",
      en: "A professional website that helps prospective customers understand your business, services, experience, and next steps."
    },
    results: [
      { id: "Informasi bisnis tersusun rapi", en: "Clear and structured business information" },
      { id: "Layanan dan portofolio lebih mudah dipahami", en: "Services and work examples are easier to understand" },
      { id: "Jalur konsultasi lebih jelas", en: "A clearer path to consultation" },
      { id: "Kunjungan website dapat dipantau", en: "Website visits can be measured" },
    ],
    cta: { id: "Pelajari Website Profesional", en: "Explore Professional Websites" }
  };

  const sol2 = {
    label: { id: "Di Balik Layar", en: "Behind the Business" },
    title: { id: "Sistem Bisnis Custom", en: "Custom Business Systems" },
    heading: {
      id: "Rapikan Proses yang Masih Manual dan Terpisah",
      en: "Bring Structure to Manual and Disconnected Processes"
    },
    description: {
      id: "Aplikasi internal yang mengikuti proses kerja bisnis agar data, tanggung jawab, dan status pekerjaan lebih mudah dipantau.",
      en: "Internal applications built around your workflow, making data, responsibilities, and progress easier to manage."
    },
    results: [
      { id: "Mengurangi pencatatan berulang", en: "Reduce repeated data entry" },
      { id: "Status pekerjaan lebih mudah dilihat", en: "Track work status more clearly" },
      { id: "Persetujuan lebih mudah ditelusuri", en: "Make approvals easier to follow" },
      { id: "Laporan lebih cepat tersedia", en: "Access reports sooner" },
    ],
    cta: { id: "Pelajari Sistem Bisnis", en: "Explore Business Systems" }
  };

  return (
    <section id="solusi" className="py-20 sm:py-24 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#177568] block">
            {language === "id" ? "Dua Jalur Solusi" : "Two Solution Paths"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
            {language === "id" ? "Solusi untuk Sisi Depan dan Belakang Bisnis" : "Solutions for Customer Trust and Internal Clarity"}
          </h2>
          <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
            {language === "id"
              ? "Mulai dari membangun kepercayaan pelanggan hingga merapikan proses kerja internal."
              : "From building credibility with prospective customers to structuring internal workflows."}
          </p>
        </div>

        {/* 2 Large Panels (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* PANEL A: DI DEPAN PELANGGAN */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white border border-[#DCE3E5] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#17324D] text-white">
                  {language === "id" ? sol1.label.id : sol1.label.en}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F3] text-[#17324D] flex items-center justify-center border border-[#DCE3E5]">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#101C24] tracking-tight">
                  {language === "id" ? sol1.heading.id : sol1.heading.en}
                </h3>
                <span className="text-xs font-bold text-[#177568] block mt-1">
                  {language === "id" ? sol1.title.id : sol1.title.en}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#667681] leading-relaxed font-normal">
                {language === "id" ? sol1.description.id : sol1.description.en}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                <strong className="text-xs font-bold text-[#101C24] block">
                  {language === "id" ? "Hasil yang Anda Dapatkan:" : "Expected Results:"}
                </strong>
                <ul className="space-y-1.5 text-xs text-[#667681] font-normal">
                  {sol1.results.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                      <span>{language === "id" ? r.id : r.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCE3E5]">
              <Link
                href="#kontak"
                className="w-full inline-flex items-center justify-between py-3.5 px-5 rounded-2xl bg-[#17324D] hover:bg-[#101C24] text-white text-xs font-bold transition-colors shadow-xs"
              >
                <span>{language === "id" ? sol1.cta.id : sol1.cta.en}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* PANEL B: DI BALIK LAYAR */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white border border-[#DCE3E5] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#177568] text-white">
                  {language === "id" ? sol2.label.id : sol2.label.en}
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F3] text-[#177568] flex items-center justify-center border border-[#DCE3E5]">
                  <LayoutGrid className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#101C24] tracking-tight">
                  {language === "id" ? sol2.heading.id : sol2.heading.en}
                </h3>
                <span className="text-xs font-bold text-[#D79445] block mt-1">
                  {language === "id" ? sol2.title.id : sol2.title.en}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#667681] leading-relaxed font-normal">
                {language === "id" ? sol2.description.id : sol2.description.en}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                <strong className="text-xs font-bold text-[#101C24] block">
                  {language === "id" ? "Hasil yang Anda Dapatkan:" : "Expected Results:"}
                </strong>
                <ul className="space-y-1.5 text-xs text-[#667681] font-normal">
                  {sol2.results.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                      <span>{language === "id" ? r.id : r.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCE3E5]">
              <Link
                href="/solusi/inventory-pos"
                className="w-full inline-flex items-center justify-between py-3.5 px-5 rounded-2xl bg-[#F7F7F3] hover:bg-[#177568] hover:text-white text-[#101C24] border border-[#DCE3E5] text-xs font-bold transition-colors shadow-2xs"
              >
                <span>{language === "id" ? sol2.cta.id : sol2.cta.en}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
