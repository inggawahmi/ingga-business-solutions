"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/languageContext";
import { formatInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Send, AlertCircle, Sparkles, ShieldCheck } from "lucide-react";

export function FinalCtaSection() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    contact: "",
    requirementType: "Website profesional",
    problemDescription: "",
    currentWorkflow: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const options = {
    id: [
      "Website profesional",
      "Sistem bisnis custom",
      "Inventory atau operasional",
      "ERP",
      "ERP asuransi atau reasuransi",
      "Belum yakin",
    ],
    en: [
      "Professional website",
      "Custom business system",
      "Inventory or operations",
      "ERP",
      "Insurance or reinsurance ERP",
      "Not sure yet",
    ],
  };

  const labels = {
    bannerEyebrow: { id: "Mulai Diskusi Kebutuhan", en: "Start the Conversation" },
    bannerHeading: {
      id: "Punya Proses Bisnis yang Masih Terasa Ribet?",
      en: "Have a Business Workflow That Still Feels Complicated?"
    },
    bannerSub: {
      id: "Ceritakan kondisi saat ini. Kebutuhan akan dipelajari terlebih dahulu untuk menentukan apakah solusi terbaiknya berupa website, perbaikan proses kerja, sistem custom, atau ERP.",
      en: "Share your current situation. We will review your operational context to determine whether a professional website, workflow improvement, custom system, or ERP is the most practical path forward."
    },
    bannerMicro: {
      id: "Tidak harus sudah memiliki requirement teknis. Cukup jelaskan masalah dan proses yang sedang berjalan.",
      en: "No technical specifications are required. Simply describe what is happening in your business."
    },
    formTitle: { id: "Ceritakan Kebutuhan Anda", en: "Tell Me What You Need" },
    formDesc: {
      id: "Berikan gambaran singkat mengenai bisnis dan proses yang ingin diperbaiki. Tidak perlu menggunakan istilah teknis.",
      en: "Share a brief overview of your business and the process you want to improve. No technical requirements are needed."
    },
    name: { id: "Nama", en: "Name" },
    company: { id: "Perusahaan atau Bisnis", en: "Company or Business" },
    contact: { id: "Email atau Nomor Kontak", en: "Email or Contact Number" },
    requirementType: { id: "Jenis Kebutuhan", en: "Type of Requirement" },
    problem: { id: "Masalah atau Proses yang Ingin Diperbaiki", en: "Problem or Process to Improve" },
    currentWorkflow: { id: "Cara Kerja Saat Ini", en: "Current Process" },
    submit: { id: "Kirim Kebutuhan", en: "Send Requirement" },
    optional: { id: "(Opsional)", en: "(Optional)" },
    privacy: {
      id: "Informasi yang dikirim hanya digunakan untuk menindaklanjuti kebutuhan Anda.",
      en: "The information you submit will only be used to follow up on your request."
    },
    validation: {
      name: { id: "Nama wajib diisi", en: "Name is required" },
      contact: { id: "Email atau nomor kontak wajib diisi", en: "Email or contact number is required" },
      problem: { id: "Ceritakan ringkas masalah atau proses yang ingin diperbaiki", en: "Please describe the process or problem" },
    }
  };

  const validate = () => {
    const err: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      err.name = language === "id" ? labels.validation.name.id : labels.validation.name.en;
    }
    if (!formData.contact.trim()) {
      err.contact = language === "id" ? labels.validation.contact.id : labels.validation.contact.en;
    }
    if (!formData.problemDescription.trim()) {
      err.problemDescription = language === "id" ? labels.validation.problem.id : labels.validation.problem.en;
    }
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

  const currentOptions = language === "id" ? options.id : options.en;

  return (
    <section id="kontak" className="py-20 sm:py-24 bg-[#17324D] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Banner Copy */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C24] text-[#D79445] text-xs font-bold border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "id" ? labels.bannerEyebrow.id : labels.bannerEyebrow.en}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {language === "id" ? labels.bannerHeading.id : labels.bannerHeading.en}
          </h2>

          <p className="text-sm sm:text-base text-[#DCE3E5] max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "id" ? labels.bannerSub.id : labels.bannerSub.en}
          </p>

          <p className="text-xs text-[#D79445] font-semibold">
            {language === "id" ? labels.bannerMicro.id : labels.bannerMicro.en}
          </p>
        </div>

        {/* 6-Field Lead Qualification Form */}
        <div className="bg-white text-[#101C24] p-6 sm:p-9 rounded-3xl border border-[#DCE3E5] shadow-xl space-y-6">
          <div className="space-y-1 border-b border-[#DCE3E5] pb-4">
            <h3 className="text-lg font-bold text-[#101C24]">
              {language === "id" ? labels.formTitle.id : labels.formTitle.en}
            </h3>
            <p className="text-xs text-[#667681]">
              {language === "id" ? labels.formDesc.id : labels.formDesc.en}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm" noValidate>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nama */}
              <div className="space-y-1.5">
                <label htmlFor="input-name" className="font-bold text-[#101C24] block text-xs">
                  {language === "id" ? labels.name.id : labels.name.en} <span className="text-rose-600">*</span>
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
                  placeholder={language === "id" ? "Contoh: Budi Santoso" : "e.g. Alex Graham"}
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

              {/* Perusahaan */}
              <div className="space-y-1.5">
                <label htmlFor="input-comp" className="font-bold text-[#101C24] block text-xs">
                  {language === "id" ? labels.company.id : labels.company.en} <span className="text-[#667681] font-normal">{language === "id" ? labels.optional.id : labels.optional.en}</span>
                </label>
                <input
                  id="input-comp"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder={language === "id" ? "Contoh: PT Surya Logistik" : "e.g. Apex Logistics"}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCE3E5] text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Kontak */}
              <div className="space-y-1.5">
                <label htmlFor="input-contact" className="font-bold text-[#101C24] block text-xs">
                  {language === "id" ? labels.contact.id : labels.contact.en} <span className="text-rose-600">*</span>
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
                  placeholder={language === "id" ? "Email kantor atau nomor WhatsApp" : "Work email or phone number"}
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
                  {language === "id" ? labels.requirementType.id : labels.requirementType.en}
                </label>
                <select
                  id="input-req"
                  value={formData.requirementType}
                  onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCE3E5] text-[#101C24] bg-[#F7F7F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#177568] transition-all cursor-pointer"
                >
                  {currentOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Masalah / Proses */}
            <div className="space-y-1.5">
              <label htmlFor="input-prob" className="font-bold text-[#101C24] block text-xs">
                {language === "id" ? labels.problem.id : labels.problem.en} <span className="text-rose-600">*</span>
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
                placeholder={
                  language === "id"
                    ? "Contoh: laporan masih dibuat manual dari beberapa file dan owner sulit memantau progress tanpa bertanya kepada tim."
                    : "e.g. reports are compiled manually across spreadsheets and management lacks real-time progress visibility."
                }
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

            {/* Cara Kerja Saat Ini */}
            <div className="space-y-1.5">
              <label htmlFor="input-curr" className="font-bold text-[#101C24] block text-xs">
                {language === "id" ? labels.currentWorkflow.id : labels.currentWorkflow.en} <span className="text-[#667681] font-normal">{language === "id" ? labels.optional.id : labels.optional.en}</span>
              </label>
              <input
                id="input-curr"
                type="text"
                value={formData.currentWorkflow}
                onChange={(e) => setFormData({ ...formData, currentWorkflow: e.target.value })}
                placeholder={
                  language === "id"
                    ? "Contoh: Menggunakan grup chat dan spreadsheet Google Sheets terpisah"
                    : "e.g. Using chat groups and disparate spreadsheets"
                }
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
                <span>{language === "id" ? labels.submit.id : labels.submit.en}</span>
              </button>
            </div>

            {/* Privacy Microcopy */}
            <div className="pt-2 text-center">
              <span className="text-[11px] text-[#667681] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#177568]" />
                {language === "id" ? labels.privacy.id : labels.privacy.en}
              </span>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
