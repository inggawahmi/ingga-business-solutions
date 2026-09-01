"use client";

import React from "react";
import Link from "next/link";
import { DualViewHeroMockup } from "../sales/DualViewHeroMockup";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Strategic Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#17324D] border border-[#DCE3E5] text-xs font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D79445] shrink-0" />
              <span>Website, Sistem Bisnis & ERP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101C24] tracking-tight leading-[1.18]">
              Lebih Meyakinkan di Depan Customer. <span className="text-[#177568]">Lebih Rapi di Balik Layar.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#667681] leading-relaxed font-normal">
              Membangun website profesional dan sistem bisnis yang mengikuti kebutuhan nyata perusahaan—mulai dari digital presence hingga ERP untuk proses operasional yang kompleks.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="#solusi"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#17324D] hover:bg-[#101C24] text-white font-bold text-sm transition-colors shadow-xs"
              >
                <span>Lihat Solusi yang Ditawarkan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F7F7F3] text-[#101C24] border border-[#DCE3E5] hover:border-[#177568] font-bold text-sm transition-colors shadow-2xs"
              >
                <span>Ceritakan Kebutuhan Bisnis</span>
              </Link>
            </div>

            {/* 3 Trust Points */}
            <div className="pt-4 border-t border-[#DCE3E5] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#101C24] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#177568] shrink-0" />
                <span>Scope & proses kerja jelas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D79445] shrink-0" />
                <span>Sesuai kebutuhan bisnis</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#17324D] shrink-0" />
                <span>Pendampingan implementasi</span>
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
