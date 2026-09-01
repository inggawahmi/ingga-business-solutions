"use client";

import React from "react";
import { WhatsAppButton } from "../sales/WhatsAppButton";
import { InteractiveMockup } from "../sales/InteractiveMockup";
import { MapPin, ShieldCheck, Smartphone, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFBF5] via-[#F8FAFC] to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Sales Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200/80 text-xs font-bold tracking-wide shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Jasa Website & Sistem Bisnis • Jabodetabek</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Website yang Meyakinkan. <br />
              <span className="text-blue-600">Sistem Bisnis</span> yang Merapikan Operasional.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Saya membantu cafe, UMKM, dan perusahaan membangun website profesional, POS, inventory, serta sistem custom yang mengikuti kebutuhan bisnis—bukan sekadar template asal jadi.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <WhatsAppButton
                source="hero-primary"
                label="Diskusikan via WhatsApp"
                size="lg"
                variant="primary"
              />
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-bold text-sm transition-colors shadow-2xs"
              >
                <span>Lihat Solusi</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Location & Service Area */}
            <p className="text-xs text-slate-500 font-medium pt-1">
              Berbasis di Bekasi • Melayani Jabodetabek & Remote
            </p>

            {/* Trust Points */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Responsive di mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Dibangun sesuai kebutuhan</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Siap dikembangkan</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Langsung dengan developer</span>
              </div>
            </div>

          </div>

          {/* Right Column: Code-Native Interactive Mockup */}
          <div className="lg:col-span-5">
            <InteractiveMockup />
          </div>

        </div>

      </div>
    </section>
  );
}
