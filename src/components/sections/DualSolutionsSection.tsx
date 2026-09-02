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
      id: "Tampil Lebih Meyakinkan bagi Pelanggan",
      en: "Present Your Business with Confidence"
    },
    description: {
      id: "Membantu pelanggan memahami layanan, portofolio, dan konsultasi bisnis.",
      en: "Helps prospective customers understand your services, work examples, and next steps."
    },
    results: [
      { id: "Informasi bisnis tersusun rapi", en: "Structured business information" },
      { id: "Layanan & portofolio jelas", en: "Clear service catalog & work" },
      { id: "Jalur konsultasi terarah", en: "Direct consultation path" },
      { id: "Kunjungan website terpantau", en: "Measurable website traffic" },
    ],
    cta: { id: "Pelajari Website Profesional", en: "Explore Professional Websites" }
  };

  const sol2 = {
    label: { id: "Di Balik Layar", en: "Behind the Business" },
    title: { id: "Sistem Bisnis Custom", en: "Custom Business Systems" },
    heading: {
      id: "Rapikan Proses yang Masih Manual",
      en: "Bring Structure to Manual and Disconnected Processes"
    },
    description: {
      id: "Aplikasi internal agar alur kerja dan tanggung jawab terpantau.",
      en: "Internal applications aligned with your workflow for clear tracking."
    },
    results: [
      { id: "Kurangi pencatatan berulang", en: "Reduce repeated data entry" },
      { id: "Status pekerjaan mudah dipantau", en: "Clear real-time progress tracking" },
      { id: "Alur persetujuan tercatat rapi", en: "Traceable approval history" },
      { id: "Laporan operasional lebih cepat", en: "Faster operational reporting" },
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
            {language === "id" ? "Solusi Sisi Depan dan Belakang Bisnis" : "Solutions for Front and Back Office"}
          </h2>
          <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
            {language === "id"
              ? "Meningkatkan kepercayaan pelanggan dan merapikan operasional internal."
              : "Build customer credibility and structure internal operations."}
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
