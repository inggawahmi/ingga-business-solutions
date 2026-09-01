"use client";

import React, { useState } from "react";
import { FEATURED_CASE_STUDIES_BILINGUAL, CASE_STUDIES_SECTION_HEADER, CONFIDENTIALITY_NOTICE_BILINGUAL } from "@/data/caseStudies";
import { useLanguage } from "@/lib/languageContext";
import { ChevronDown, ChevronUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export function SelectedExperienceSection() {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const toggleTechnicalDetails = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section id="pengalaman" className="py-20 sm:py-24 bg-white border-b border-[#DCE3E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#17324D] block">
            {t(CASE_STUDIES_SECTION_HEADER.eyebrow)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
            {t(CASE_STUDIES_SECTION_HEADER.heading)}
          </h2>
          <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
            {t(CASE_STUDIES_SECTION_HEADER.subheadline)}
          </p>
        </div>

        {/* 3 Compact Featured Case Study Cards */}
        <div className="space-y-6">
          {FEATURED_CASE_STUDIES_BILINGUAL.map((cs) => {
            const isOpen = openAccordionId === cs.id;
            return (
              <div
                key={cs.id}
                className="rounded-3xl p-6 sm:p-7 bg-[#F7F7F3] border border-[#DCE3E5] space-y-5 shadow-2xs"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#DCE3E5]">
                  <div>
                    <span className="text-[11px] font-bold text-[#177568] uppercase tracking-wider block">
                      {t(cs.domain)}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101C24] tracking-tight mt-0.5">
                      {t(cs.title)}
                    </h3>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-white text-[#17324D] border border-[#DCE3E5] font-semibold">
                    {t(cs.systemType)}
                  </span>
                </div>

                {/* Compact 4 Business Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">

                  {/* Tantangan */}
                  <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-[#DCE3E5]">
                    <strong className="text-xs font-bold uppercase tracking-wider text-[#D79445] block">
                      {t(CASE_STUDIES_SECTION_HEADER.labels.challenge)}
                    </strong>
                    <p className="text-[#667681] leading-relaxed">
                      {t(cs.challenge)}
                    </p>
                  </div>

                  {/* Yang Dibangun */}
                  <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-[#DCE3E5]">
                    <strong className="text-xs font-bold uppercase tracking-wider text-[#177568] block">
                      {t(CASE_STUDIES_SECTION_HEADER.labels.solutionBuilt)}
                    </strong>
                    <p className="text-[#667681] leading-relaxed">
                      {t(cs.solutionBuilt)}
                    </p>
                  </div>

                  {/* Peran Saya */}
                  <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-[#DCE3E5]">
                    <strong className="text-xs font-bold uppercase tracking-wider text-[#17324D] block">
                      {t(CASE_STUDIES_SECTION_HEADER.labels.myRole)}
                    </strong>
                    <p className="text-[#667681] leading-relaxed">
                      {t(cs.myRole)}
                    </p>
                  </div>

                  {/* Nilai untuk Bisnis */}
                  <div className="space-y-1 p-3.5 rounded-2xl bg-white border border-[#DCE3E5]">
                    <strong className="text-xs font-bold uppercase tracking-wider text-[#101C24] block">
                      {t(CASE_STUDIES_SECTION_HEADER.labels.businessValue)}
                    </strong>
                    <p className="text-[#667681] leading-relaxed">
                      {t(cs.businessValue)}
                    </p>
                  </div>

                </div>

                {/* Collapsible Technical Detail Accordion */}
                <div className="pt-2 border-t border-[#DCE3E5]">
                  <button
                    type="button"
                    onClick={() => toggleTechnicalDetails(cs.id)}
                    className="flex items-center gap-2 text-xs font-bold text-[#17324D] hover:text-[#177568] transition-colors cursor-pointer py-1"
                    aria-expanded={isOpen}
                  >
                    <span>
                      {isOpen
                        ? t(CASE_STUDIES_SECTION_HEADER.labels.hideTechnical)
                        : t(CASE_STUDIES_SECTION_HEADER.labels.viewTechnical)}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isOpen && (
                    <div className="mt-3 p-4 rounded-2xl bg-white border border-[#DCE3E5] space-y-3 text-xs">
                      <div>
                        <strong className="text-[#101C24] block mb-1">
                          {language === "id" ? "Arsitektur:" : "Architecture:"}
                        </strong>
                        <p className="text-[#667681]">{t(cs.technicalDetails.architecture)}</p>
                      </div>
                      <div>
                        <strong className="text-[#101C24] block mb-1">
                          {language === "id" ? "Modul Utama:" : "Key Modules:"}
                        </strong>
                        <ul className="space-y-1 text-[#667681]">
                          {cs.technicalDetails.keyModules.map((mod, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#177568]" />
                              <span>{t(mod)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cs.technicalDetails.techStack.map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md bg-[#F7F7F3] border border-[#DCE3E5] text-[10px] font-mono text-[#17324D]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Confidentiality Notice */}
        <div className="p-4 rounded-2xl bg-[#F7F7F3] border border-[#DCE3E5] text-center text-xs text-[#667681] max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#177568] shrink-0" />
          <span>{t(CONFIDENTIALITY_NOTICE_BILINGUAL)}</span>
        </div>

      </div>
    </section>
  );
}
