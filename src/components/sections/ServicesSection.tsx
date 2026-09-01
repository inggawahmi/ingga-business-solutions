import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { Check, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "../sales/WhatsAppButton";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Katalog Layanan Penuh
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solusi yang Bisa Saya Bangun
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Setiap fitur dan modul disesuaikan dengan alur bisnis Anda. Berikut adalah ringkasan cakupan layanan yang sering dibutuhkan klien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 border border-blue-200">
                    {srv.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {srv.summary}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-[11px] text-slate-600">
                  <strong className="text-slate-900 block mb-0.5">Cocok untuk:</strong>
                  <span>{srv.targetAudience}</span>
                </div>

                <div className="space-y-2">
                  <strong className="text-xs font-bold text-slate-900 block">
                    Fitur & Cakupan:
                  </strong>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
                    {srv.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                {srv.slug ? (
                  <Link
                    href={srv.ctaLink}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <WhatsAppButton
                    source={`services-${srv.id}`}
                    label={srv.ctaText}
                    size="sm"
                    variant="outline"
                    className="w-full text-xs"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on final features */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-500 font-medium">
          Fitur final, alur integrasi, dan modul teknis mengikuti hasil pembahasan kebutuhan dan scope proyek yang disepakati bersama.
        </div>

      </div>
    </section>
  );
}
