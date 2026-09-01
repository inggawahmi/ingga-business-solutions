import React from "react";
import { REAL_CASE_STUDIES, CONFIDENTIALITY_NOTICE } from "@/data/caseStudies";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";

export function ExperienceProofSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950 text-teal-400 border border-teal-700/60 text-xs font-bold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Rekam Jejak & Kapabilitas Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman pada Sistem Bisnis Nyata
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Bukan sekadar membuat tampilan visual, saya berpengalaman menangani logika bisnis kompleks, database ratusan ribu baris data, dan alur transaksi finansial.
          </p>
        </div>

        {/* Confidentiality Notice Alert */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="font-normal leading-relaxed">
            {CONFIDENTIALITY_NOTICE}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-slate-800/90 rounded-3xl p-6 sm:p-7 border border-slate-700 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-teal-950 text-teal-400 border border-teal-800/60 inline-block">
                  {cs.badge}
                </span>

                <div>
                  <span className="text-xs text-slate-400 font-mono block">Domain: {cs.industry}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                    {cs.title}
                  </h3>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs text-teal-300 font-medium leading-relaxed">
                  {cs.businessOutcome}
                </div>

                <div className="space-y-2">
                  <strong className="text-xs font-bold text-slate-200 block">
                    Cakupan Sistem:
                  </strong>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-normal">
                    {cs.scopeHighlights.map((sc, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{sc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex flex-wrap gap-1.5">
                {cs.techProof.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
