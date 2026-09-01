"use client";

import React from "react";
import { ENGAGEMENT_HEADER, ENGAGEMENT_MODELS_BILINGUAL, WORKFLOW_STAGES_BILINGUAL, TRUST_POINTS_BILINGUAL } from "@/data/engagement";
import { useLanguage } from "@/lib/languageContext";
import { CheckCircle2, MessageSquare, Search, Cpu, Rocket } from "lucide-react";

export function ProcessAndTrustSection() {
  const { language, t } = useLanguage();

  const stageIcons = [MessageSquare, Search, Cpu, Rocket];

  return (
    <section id="cara-kerja" className="py-20 sm:py-24 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* PART 1: 3 ENGAGEMENT MODELS */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#177568] block">
              {t(ENGAGEMENT_HEADER.eyebrow)}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
              {t(ENGAGEMENT_HEADER.heading)}
            </h2>
            <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
              {t(ENGAGEMENT_HEADER.subheadline)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS_BILINGUAL.map((model) => (
              <div
                key={model.id}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCE3E5] shadow-2xs space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F7F7F3] text-[#17324D] border border-[#DCE3E5] inline-block">
                    {t(model.badge)}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#101C24]">
                      {t(model.title)}
                    </h3>
                    <p className="text-xs text-[#667681] mt-1">
                      {t(model.tagline)}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                    <strong className="text-xs font-bold text-[#101C24] block">
                      {language === "id" ? "Tahapan Pengerjaan:" : "Process Steps:"}
                    </strong>
                    <ul className="space-y-1.5 text-xs text-[#667681]">
                      {model.steps.map((st, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="font-mono text-[#177568] font-bold text-[11px] shrink-0">{idx + 1}.</span>
                          <span>{t(st)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: 4-STAGE PROCESS TIMELINE */}
        <div className="space-y-8 pt-6 border-t border-[#DCE3E5]">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-[#101C24] tracking-tight">
              {t(ENGAGEMENT_HEADER.processHeading)}
            </h3>
            <p className="text-xs sm:text-sm text-[#667681]">
              {t(ENGAGEMENT_HEADER.processSub)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKFLOW_STAGES_BILINGUAL.map((st, idx) => {
              const Icon = stageIcons[idx] || MessageSquare;
              return (
                <div key={st.num} className="bg-white p-5 rounded-2xl border border-[#DCE3E5] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[#17324D] text-white font-mono font-bold text-xs flex items-center justify-center">
                      {st.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#D79445]" />
                  </div>
                  <strong className="text-sm font-bold text-[#101C24] block">
                    {t(st.title)}
                  </strong>
                  <p className="text-xs text-[#667681] leading-relaxed">
                    {t(st.desc)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 3: TRUST POINTS & PROFESSIONAL STATEMENT */}
        <div id="tentang" className="bg-white p-7 sm:p-9 rounded-3xl border border-[#DCE3E5] shadow-xs space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#177568] block">
              {language === "id" ? "Prinsip Kerja" : "Guiding Principles"}
            </span>
            <p className="text-xs sm:text-sm text-[#667681] leading-relaxed italic">
              &ldquo;{t(ENGAGEMENT_HEADER.trustStatement)}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#DCE3E5] text-xs font-semibold text-[#101C24]">
            {TRUST_POINTS_BILINGUAL.map((tp, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2">
                <CheckCircle2 className="w-4 h-4 text-[#177568] shrink-0 mt-0.5" />
                <span className="leading-snug">{t(tp)}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
