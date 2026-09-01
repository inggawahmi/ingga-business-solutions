import React from "react";
import { CafeLivePreview } from "../sales/CafeLivePreview";
import { Utensils } from "lucide-react";

export function CafeDemoSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#FFFBF5] border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold tracking-wide">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Simulasi Antarmuka Interaktif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contoh Tampilan Menu Digital & WhatsApp Order
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Coba simulasi penambahan pesanan di bawah ini untuk melihat bagaimana website memformat pesan WhatsApp pesanan secara otomatis.
          </p>
        </div>

        {/* Live Interactive Concept Demo */}
        <CafeLivePreview />

      </div>
    </section>
  );
}
