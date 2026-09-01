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
    <section id="faq" className="py-20 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tanya Jawab Seputar Layanan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Jawaban transparan seputar proses pembuatan, biaya, kepemilikan source code, hingga dukungan teknis.
          </p>
        </div>

        <Accordion items={accordionItems} />

      </div>
    </section>
  );
}
