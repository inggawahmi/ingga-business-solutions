import React from "react";
import { FAQ_DATA } from "@/data/faq";
import { Accordion } from "../ui/Accordion";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const accordionItems = FAQ_DATA.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-t border-[#DCE3E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F7F3] text-[#17324D] border border-[#DCE3E5] text-xs font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-[#D79445]" />
            <span>Tanya Jawab Seputar Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
            Jawaban singkat seputar kebutuhan awal, penyesuaian alur, tahapan pengerjaan, dan dukungan sistem.
          </p>
        </div>

        <Accordion items={accordionItems} />

      </div>
    </section>
  );
}
