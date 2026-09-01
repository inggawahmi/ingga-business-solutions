"use client";

import React from "react";
import { FAQ_HEADER, FAQ_DATA_BILINGUAL } from "@/data/faq";
import { Accordion } from "../ui/Accordion";
import { useLanguage } from "@/lib/languageContext";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const { t } = useLanguage();

  const accordionItems = FAQ_DATA_BILINGUAL.map((item) => ({
    id: item.id,
    title: t(item.question),
    content: t(item.answer),
  }));

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-t border-[#DCE3E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F7F3] text-[#17324D] border border-[#DCE3E5] text-xs font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-[#D79445]" />
            <span>{t(FAQ_HEADER.eyebrow)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
            {t(FAQ_HEADER.heading)}
          </h2>
          <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
            {t(FAQ_HEADER.subheadline)}
          </p>
        </div>

        <Accordion items={accordionItems} />

      </div>
    </section>
  );
}
