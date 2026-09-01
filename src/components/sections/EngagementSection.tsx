import React from "react";
import { ENGAGEMENT_PLANS, ENGAGEMENT_NOTE } from "@/data/engagement";
import { Check } from "lucide-react";
import { WhatsAppButton } from "../sales/WhatsAppButton";

export function EngagementSection() {
  return (
    <section id="engagement" className="py-20 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Pilihan Skala Pengerjaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilih Sesuai Kebutuhan Bisnis
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Mulai dari kebutuhan landing page sederhana hingga sistem aplikasi custom internal perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-md transition-all relative ${
                plan.isPopular ? "border-blue-600 ring-2 ring-blue-600/20" : "border-slate-200"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider rounded-full shadow-xs">
                  Rekomendasi Terbaik
                </div>
              )}

              <div className="space-y-4">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 inline-block">
                  {plan.badge}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs">
                  <strong className="text-slate-900 block font-bold">Cocok untuk:</strong>
                  <ul className="space-y-0.5 text-slate-600 list-disc list-inside font-normal text-[11px]">
                    {plan.bestFor.map((bf, idx) => (
                      <li key={idx}>{bf}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <strong className="text-xs font-bold text-slate-900 block">Termasuk:</strong>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
                    {plan.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <WhatsAppButton
                  source={plan.ctaSource}
                  label={plan.ctaText}
                  size="md"
                  variant={plan.isPopular ? "primary" : "outline"}
                  className="w-full text-xs sm:text-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Pricing */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-center max-w-2xl mx-auto text-xs text-amber-950 font-medium">
          {ENGAGEMENT_NOTE}
        </div>

      </div>
    </section>
  );
}
