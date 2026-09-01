import React from "react";
import { ENGAGEMENT_MODELS } from "@/data/engagement";
import { CheckCircle2, MessageSquare, Search, Cpu, Rocket } from "lucide-react";

export function ProcessAndTrustSection() {
  const workflowSteps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Ceritakan Kebutuhan",
      desc: "Diskusikan kondisi bisnis, proses sekarang, dan hasil yang ingin dicapai melalui diskusi santai dan terarah."
    },
    {
      num: "02",
      icon: Search,
      title: "Pemetaan Masalah",
      desc: "Identifikasi bagian yang paling penting untuk diperbaiki terlebih dahulu dan tentukan ruang lingkup solusinya."
    },
    {
      num: "03",
      icon: Cpu,
      title: "Perancangan & Implementasi",
      desc: "Solusi dibuat berdasarkan scope, prioritas, dan alur workflow yang telah disepakati bersama."
    },
    {
      num: "04",
      icon: Rocket,
      title: "Review & Pendampingan",
      desc: "Sistem diuji bersama pengguna, disempurnakan, lalu didampingi hingga siap digunakan harian oleh tim."
    }
  ];

  const trustPoints = [
    "Pengalaman menangani sistem dengan proses bisnis kompleks.",
    "Komunikasi langsung dengan developer tanpa perantara.",
    "Scope dan progress pengerjaan yang transparan.",
    "Pendampingan dan dukungan setelah sistem digunakan."
  ];

  return (
    <section id="cara-kerja" className="py-20 sm:py-24 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* PART 1: 3 ENGAGEMENT MODELS */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#177568] block">
              Pilihan Model Kerjasama
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
              Sesuai dengan Skala & Tahapan Bisnis
            </h2>
            <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
              Setiap proyek dimulai dengan memahami masalahnya, bukan langsung menentukan teknologinya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.id}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCE3E5] shadow-2xs space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F7F7F3] text-[#17324D] border border-[#DCE3E5] inline-block">
                    {model.badge}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#101C24]">
                      {model.title}
                    </h3>
                    <p className="text-xs text-[#667681] mt-1">
                      {model.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#667681] leading-relaxed font-normal">
                    {model.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                    <strong className="text-xs font-bold text-[#101C24] block">Tahapan Kerja:</strong>
                    <ul className="space-y-1 text-xs text-[#667681]">
                      {model.steps.map((st, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="font-mono text-[#177568] font-bold text-[11px] shrink-0">{idx + 1}.</span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DCE3E5] text-[11px] text-[#667681]">
                  <strong>Ideal untuk:</strong> {model.recommendedFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: 4-STAGE PROCESS TIMELINE */}
        <div className="space-y-8 pt-6 border-t border-[#DCE3E5]">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-[#101C24] tracking-tight">
              4 Langkah Menuju Sistem yang Bekerja
            </h3>
            <p className="text-xs sm:text-sm text-[#667681]">
              Scope, timeline, biaya, dan tanggung jawab dijelaskan sebelum pengerjaan dimulai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((st) => {
              const Icon = st.icon;
              return (
                <div key={st.num} className="bg-white p-5 rounded-2xl border border-[#DCE3E5] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[#17324D] text-white font-mono font-bold text-xs flex items-center justify-center">
                      {st.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#D79445]" />
                  </div>
                  <strong className="text-sm font-bold text-[#101C24] block">
                    {st.title}
                  </strong>
                  <p className="text-xs text-[#667681] leading-relaxed">
                    {st.desc}
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
              Prinsip Kerja & Komitmen
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#101C24] tracking-tight">
              Membangun Solusi yang Nyata Digunakan
            </h3>
            <p className="text-xs sm:text-sm text-[#667681] leading-relaxed italic">
              &ldquo;Tujuannya bukan membuat sistem dengan fitur sebanyak mungkin, tetapi membangun solusi yang benar-benar dapat digunakan oleh bisnis.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#DCE3E5] text-xs font-semibold text-[#101C24]">
            {trustPoints.map((tp, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2">
                <CheckCircle2 className="w-4 h-4 text-[#177568] shrink-0 mt-0.5" />
                <span className="leading-snug">{tp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
