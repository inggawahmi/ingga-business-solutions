import React from "react";
import { BUSINESS_PROBLEMS } from "@/data/problems";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function ProblemsSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold tracking-wide">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Identifikasi Masalah Operasional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apakah Bisnis Anda Masih Mengalami Ini?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Banyak pemilik usaha kehilangan potensi penjualan dan kehabisan waktu berharga karena alur kerja yang belum terdigitalisasi dengan rapi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BUSINESS_PROBLEMS.map((prob) => (
            <div
              key={prob.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {prob.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-4 font-normal leading-relaxed">
                  {prob.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-teal-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{prob.solutionHighlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
