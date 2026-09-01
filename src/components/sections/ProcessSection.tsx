import React from "react";
import { CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Diskusi Kebutuhan Awal",
      desc: "Kita membahas masalah utama, target audiens, dan tujuan pembuatan website atau sistem secara langsung via chat atau call.",
    },
    {
      num: "02",
      title: "Pemetaan Masalah & Fitur Prioritas",
      desc: "Menyaring fitur esensial yang benar-benar dibutuhkan agar biaya dan waktu pengerjaan tetap efisien.",
    },
    {
      num: "03",
      title: "Proposal Scope & Estimasi Transparan",
      desc: "Saya mengirimkan ringkasan cakupan kerja, estimasi waktu, dan rincian biaya yang jelas tanpa biaya tersembunyi.",
    },
    {
      num: "04",
      title: "Desain & Development",
      desc: "Proses pembuatan tampilan dan logika sistem dengan update berkala agar Anda dapat memantau progres.",
    },
    {
      num: "05",
      title: "Review & Uji Coba Bersama",
      desc: "Testing alur sistem, responsivitas di HP, dan penyesuaian detail sebelum dipublikasikan.",
    },
    {
      num: "06",
      title: "Deployment & Handover",
      desc: "Website/sistem di-deploy ke domain resmi Anda, disertai panduan pengoperasian yang mudah dipahami.",
    },
    {
      num: "07",
      title: "Maintenance & Dukungan Lanjutan",
      desc: "Dukungan teknis berkala dan kesiapan menambah fitur baru saat skala bisnis Anda semakin berkembang.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Alur Kerjasama Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cara Kerja yang Jelas dari Awal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Estimasi waktu dan biaya diberikan setelah kebutuhan dipahami secara komprehensif, sehingga tidak ada ekspektasi yang meleset di tengah jalan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              className={`p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] flex flex-col justify-between space-y-4 ${
                idx === steps.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-2xs">
                  {st.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-teal-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Tahap transparan</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
