import React from "react";
import { PROBLEM_SIGNALS, PROBLEM_CLOSING_STATEMENT } from "@/data/problems";

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-y border-[#DCE3E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D79445] block">
            Apakah Ini Terjadi di Bisnis Anda?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
            Bisnis Sudah Berjalan, tetapi Prosesnya Belum Benar-Benar Terhubung
          </h2>
          <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
            Semakin bisnis berkembang, semakin sulit mengandalkan chat, spreadsheet, dan pencatatan yang tersebar.
          </p>
        </div>

        {/* 6 Problem Signals Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_SIGNALS.map((signal) => (
            <div
              key={signal.num}
              className="p-6 rounded-2xl bg-[#F7F7F3] border border-[#DCE3E5] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#177568] px-2 py-0.5 rounded-md bg-white border border-[#DCE3E5] inline-block">
                  {signal.num}
                </span>
                <h3 className="text-base font-bold text-[#101C24] leading-snug">
                  {signal.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667681] leading-relaxed font-normal">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Box */}
        <div className="p-6 rounded-2xl bg-[#F7F7F3] border border-[#DCE3E5] text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#17324D] leading-relaxed">
            {PROBLEM_CLOSING_STATEMENT}
          </p>
        </div>

      </div>
    </section>
  );
}
