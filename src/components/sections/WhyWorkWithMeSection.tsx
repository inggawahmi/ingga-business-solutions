import React from "react";
import { MessageSquare, Cpu, ShieldCheck, FileText, Layers, TrendingUp } from "lucide-react";

export function WhyWorkWithMeSection() {
  const reasons = [
    {
      icon: MessageSquare,
      title: "Komunikasi Langsung dengan Developer",
      desc: "Tidak ada birokrasi sales atau perantara. Kebutuhan teknis dan revisi dibahas langsung dengan orang yang menulis kode.",
    },
    {
      icon: Cpu,
      title: "Solusi Disesuaikan dengan Workflow",
      desc: "Saya tidak memaksakan software jadi yang kaku. Struktur aplikasi dirancang mengikuti kebiasaan kerja Anda.",
    },
    {
      icon: ShieldCheck,
      title: "Pengalaman Menangani Sistem Produksi",
      desc: "Biasa mengelola sistem enterprise kritis (keuangan, inventory, dan asuransi) dengan standar keandalan tinggi.",
    },
    {
      icon: FileText,
      title: "Dokumentasi & Handover yang Jelas",
      desc: "Anda mendapatkan panduan pengoperasian yang praktis agar staf atau tim Anda dapat menggunakannya tanpa bingung.",
    },
    {
      icon: Layers,
      title: "Bisa Dimulai dari Scope Kecil",
      desc: "Tidak perlu langsung membangun sistem raksasa. Kita bisa mulai dari fitur inti yang paling mendesak terlebih dahulu.",
    },
    {
      icon: TrendingUp,
      title: "Mendukung Pengembangan Bertahap",
      desc: "Arsitektur kode yang bersih dan scalable membuat fitur baru mudah ditambahkan seiring pertumbuhan usaha Anda.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Kelebihan Kerjasama Personal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kenapa Bekerja Langsung dengan Saya?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Kombinasi fleksibilitas komunikasi personal dengan kualitas standar engineering sistem produksi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
