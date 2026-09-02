"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/languageContext";
import { DualViewHeroMockup } from "../sales/DualViewHeroMockup";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  const { language } = useLanguage();

  const copy = {
    eyebrow: {
      id: "Website, Sistem Bisnis & ERP",
      en: "Websites, Business Systems & ERP",
    },
    headline: {
      idPrefix: "Lebih Meyakinkan bagi Pelanggan. ",
      idAccent: "Lebih Rapi di Balik Layar.",
      enPrefix: "Build Customer Trust. ",
      enAccent: "Run Your Business with Greater Clarity.",
    },
    subheadline: {
      id: "Membangun website profesional dan sistem bisnis sesuai proses nyata perusahaan—dari kehadiran digital hingga ERP kompleks.",
      en: "Professional websites and business systems tailored to real operations—from digital presence to complex ERP workflows.",
    },
    primaryCta: {
      id: "Lihat Solusi",
      en: "Explore Solutions",
    },
    secondaryCta: {
      id: "Ceritakan Kebutuhan Bisnis",
      en: "Tell Me What You Need",
    },
    trustPoints: [
      {
        id: "Proses dan ruang lingkup jelas",
        en: "Clear process and project scope",
      },
      {
        id: "Dibuat sesuai kebutuhan bisnis",
        en: "Built around your business needs",
      },
      {
        id: "Pendampingan hingga digunakan",
        en: "Support through implementation",
      },
    ],
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Strategic Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#17324D] border border-[#DCE3E5] text-xs font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D79445] shrink-0" />
              <span>{language === "id" ? copy.eyebrow.id : copy.eyebrow.en}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101C24] tracking-tight leading-[1.18]">
              {language === "id" ? (
                <>
                  {copy.headline.idPrefix}
                  <span className="text-[#177568]">{copy.headline.idAccent}</span>
                </>
              ) : (
                <>
                  {copy.headline.enPrefix}
                  <span className="text-[#177568]">{copy.headline.enAccent}</span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#667681] leading-relaxed font-normal">
              {language === "id" ? copy.subheadline.id : copy.subheadline.en}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="#solusi"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#17324D] hover:bg-[#101C24] text-white font-bold text-sm transition-colors shadow-xs"
              >
                <span>{language === "id" ? copy.primaryCta.id : copy.primaryCta.en}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F7F7F3] text-[#101C24] border border-[#DCE3E5] hover:border-[#177568] font-bold text-sm transition-colors shadow-2xs"
              >
                <span>{language === "id" ? copy.secondaryCta.id : copy.secondaryCta.en}</span>
              </Link>
            </div>

            {/* 3 Trust Points */}
            <div className="pt-4 border-t border-[#DCE3E5] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#101C24] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#177568] shrink-0" />
                <span>{language === "id" ? copy.trustPoints[0].id : copy.trustPoints[0].en}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D79445] shrink-0" />
                <span>{language === "id" ? copy.trustPoints[1].id : copy.trustPoints[1].en}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#17324D] shrink-0" />
                <span>{language === "id" ? copy.trustPoints[2].id : copy.trustPoints[2].en}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dual View Mockup */}
          <div className="lg:col-span-6">
            <DualViewHeroMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
