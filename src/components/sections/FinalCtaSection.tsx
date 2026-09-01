"use client";

import React, { useState } from "react";
import { formatInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Send, AlertCircle, Sparkles, ShieldCheck } from "lucide-react";

export function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    contact: "",
    requirementType: "Website & digital presence",
    problemDescription: "",
    currentWorkflow: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const requirementOptions = [
    "Website & digital presence",
    "Sistem bisnis custom",
    "Inventory atau operasional",
    "ERP",
    "ERP insurance/reinsurance",
    "Belum yakin",
  ];

  const validate = () => {
    const err: { [key: string]: string } = {};
    if (!formData.name.trim()) err.name = "Nama wajib diisi";
    if (!formData.contact.trim()) err.contact = "Email atau nomor WhatsApp wajib diisi";
    if (!formData.problemDescription.trim()) err.problemDescription = "Ceritakan ringkas masalah atau proses yang ingin diperbaiki";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatInquiryMessage({
      name: formData.name,
      businessName: formData.companyName || "Bisnis/Perusahaan",
      businessCategory: formData.requirementType,
      service: formData.requirementType,
      problem: formData.problemDescription + (formData.currentWorkflow ? " \n(Cara kerja saat ini: " + formData.currentWorkflow + ")" : ""),
    });

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kontak" className="py-20 sm:py-24 bg-[#17324D] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Banner Copy */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C24] text-[#D79445] text-xs font-bold border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mulai Diskusi Kebutuhan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Punya Proses Bisnis yang Masih Terasa Ribet?
          </h2>

          <p className="text-sm sm:text-base text-[#DCE3E5] max-w-2xl mx-auto leading-relaxed font-normal">
            Ceritakan kondisi saat ini. Kebutuhan akan dipelajari terlebih dahulu untuk menentukan apakah solusi terbaiknya berupa website, perbaikan workflow, sistem custom, atau ERP.
          </p>

          <p className="text-xs text-[#D79445] font-semibold">
            Tidak harus sudah memiliki requirement teknis. Cukup jelaskan masalah dan proses yang sedang berjalan.
          </p>
        </div>

        {/* 6-Field Lead Qualification Form */}
        <div className="bg-white text-[#101C24] p-6 sm:p-9 rounded-3xl border border-[#DCE3E5] shadow-xl space-y-6">
          <div className="space-y-1 border-b border-[#DCE3E5] pb-4">
            <h3 className="text-lg font-bold text-[#101C24]">
              Formulir Kualifikasi Kebutuhan
            </h3>
            <p className="text-xs text-[#667681]">
              Informasi ini membantu saya memahami konteks sebelum sesi konsultasi awal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm" noValidate>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nama */}
              <div className="space-y-1.5">
                <label htmlFor="input-name" className="font-bold text-[#101C24] block text-xs">
                  Nama Anda <span className="text-rose-600">*</span>
                </label>
                <input
                  id="input-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="Contoh: Budi Santoso"
                  className={
                    "w-full px-4 py-2.5 rounded-xl border text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all " +
                    (errors.name ? "border-rose-400 bg-rose-50/50" : "border-[#DCE3E5]")
                  }
                />
                {errors.name && (
                  <p role="alert" className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Nama Perusahaan */}
              <div className="space-y-1.5">
                <label htmlFor="input-comp" className="font-bold text-[#101C24] block text-xs">
                  Nama Perusahaan / Bisnis <span className="text-[#667681] font-normal">(Opsional)</span>
                </label>
                <input
                  id="input-comp"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Contoh: PT Surya Kencana Logistik"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCE3E5] text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Kontak */}
              <div className="space-y-1.5">
                <label htmlFor="input-contact" className="font-bold text-[#101C24] block text-xs">
                  Email atau Nomor Kontak <span className="text-rose-600">*</span>
                </label>
                <input
                  id="input-contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                    if (errors.contact) setErrors({ ...errors, contact: "" });
                  }}
                  placeholder="Email kantor atau nomor WhatsApp aktif"
                  className={
                    "w-full px-4 py-2.5 rounded-xl border text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all " +
                    (errors.contact ? "border-rose-400 bg-rose-50/50" : "border-[#DCE3E5]")
                  }
                />
                {errors.contact && (
                  <p role="alert" className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.contact}
                  </p>
                )}
              </div>

              {/* Jenis Kebutuhan */}
              <div className="space-y-1.5">
                <label htmlFor="input-req" className="font-bold text-[#101C24] block text-xs">
                  Jenis Kebutuhan
                </label>
                <select
                  id="input-req"
                  value={formData.requirementType}
                  onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCE3E5] text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all cursor-pointer"
                >
                  {requirementOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Masalah / Proses */}
            <div className="space-y-1.5">
              <label htmlFor="input-prob" className="font-bold text-[#101C24] block text-xs">
                Masalah atau Proses yang Ingin Diperbaiki <span className="text-rose-600">*</span>
              </label>
              <textarea
                id="input-prob"
                required
                rows={3}
                value={formData.problemDescription}
                onChange={(e) => {
                  setFormData({ ...formData, problemDescription: e.target.value });
                  if (errors.problemDescription) setErrors({ ...errors, problemDescription: "" });
                }}
                placeholder="Contoh: laporan masih dibuat manual dari beberapa file dan owner sulit memantau progress tanpa bertanya kepada tim."
                className={
                  "w-full px-4 py-2.5 rounded-xl border text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all resize-y " +
                  (errors.problemDescription ? "border-rose-400 bg-rose-50/50" : "border-[#DCE3E5]")
                }
              />
              {errors.problemDescription && (
                <p role="alert" className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3 h-3" /> {errors.problemDescription}
                </p>
              )}
            </div>

            {/* Cara Kerja Saat Ini (Opsional) */}
            <div className="space-y-1.5">
              <label htmlFor="input-curr" className="font-bold text-[#101C24] block text-xs">
                Cara Kerja Saat Ini <span className="text-[#667681] font-normal">(Opsional)</span>
              </label>
              <input
                id="input-curr"
                type="text"
                value={formData.currentWorkflow}
                onChange={(e) => setFormData({ ...formData, currentWorkflow: e.target.value })}
                placeholder="Contoh: Menggunakan grup WhatsApp dan spreadsheet Google Sheets terpisah"
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCE3E5] text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                data-cta="submit-inquiry"
                data-source="final-cta-form"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#17324D] hover:bg-[#101C24] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Kebutuhan</span>
              </button>
            </div>

            {/* Privacy Microcopy */}
            <div className="pt-2 text-center">
              <span className="text-[11px] text-[#667681] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#177568]" />
                Kerahasiaan informasi dan proses bisnis Anda terjamin.
              </span>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
