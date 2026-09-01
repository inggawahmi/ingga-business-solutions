"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { formatInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessCategory: "Cafe/Coffee Shop",
    service: "Website",
    problem: "",
    budgetRange: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const categories = [
    "Cafe/Coffee Shop",
    "UMKM Makanan & Minuman",
    "Retail",
    "Manufacturing",
    "Insurance",
    "Reinsurance",
    "Professional Services",
    "Lainnya",
  ];

  const services = [
    "Website",
    "Company Profile",
    "Menu/Katalog Digital",
    "POS",
    "Inventory",
    "Custom ERP",
    "Insurance/Reinsurance System",
    "Belum yakin",
  ];

  const budgetOptions = [
    "",
    "Di bawah Rp 5 Juta",
    "Rp 5 Juta - Rp 15 Juta",
    "Rp 15 Juta - Rp 35 Juta",
    "Di atas Rp 35 Juta",
    "Menyesuaikan Scope Pembahasan",
  ];

  const validate = () => {
    const err: { [key: string]: string } = {};
    if (!formData.name.trim()) err.name = "Nama wajib diisi";
    if (!formData.businessName.trim()) err.businessName = "Nama bisnis/perusahaan wajib diisi";
    if (!formData.problem.trim()) err.problem = "Ceritakan kendala atau kebutuhan Anda";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = formatInquiryMessage(formData);
    const waUrl = buildWhatsAppUrl(message);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold tracking-wide">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mulai Konsultasi Kebutuhan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ceritakan Kebutuhan Bisnis Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Isi formulir singkat di bawah ini. Sistem akan merangkum pesan Anda dan langsung membuka chat WhatsApp resmi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Info Panel */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Kontak Langsung
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {BUSINESS_CONFIG.brand}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Oleh {BUSINESS_CONFIG.owner} (Technical Team Lead & Developer)
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Saya siap berdiskusi santai untuk memetakan alur yang paling efisien bagi bisnis Anda sebelum menentukan scope atau biaya pengerjaan.
            </p>

            <div className="space-y-3.5 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">WhatsApp Aktif:</span>
                  <a href={BUSINESS_CONFIG.links.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-emerald-600">
                    +62 852-1537-4285
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Email Resmi:</span>
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="font-bold text-slate-900 hover:text-blue-600">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Domisili & Cakupan:</span>
                  <span className="font-bold text-slate-900">{BUSINESS_CONFIG.location} ({BUSINESS_CONFIG.serviceArea})</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-teal-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Tanpa komitmen sebelum proposal disetujui</span>
              </div>
              <div className="flex items-center gap-2 text-teal-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Kerahasiaan data bisnis terjamin</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm" noValidate>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="font-bold text-slate-800 block text-xs">
                    Nama Anda <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Contoh: Hendra Wijaya"
                    className={`w-full px-4 py-2.5 rounded-xl border text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.name ? "border-rose-400 bg-rose-50/50" : "border-slate-300"
                    }`}
                  />
                  {errors.name && (
                    <p role="alert" className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label htmlFor="form-biz" className="font-bold text-slate-800 block text-xs">
                    Nama Bisnis / Usaha <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-biz"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      if (errors.businessName) setErrors({ ...errors, businessName: "" });
                    }}
                    placeholder="Contoh: Kopi Kembara / PT Maju Retail"
                    className={`w-full px-4 py-2.5 rounded-xl border text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.businessName ? "border-rose-400 bg-rose-50/50" : "border-slate-300"
                    }`}
                  />
                  {errors.businessName && (
                    <p role="alert" className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category */}
                <div className="space-y-1.5">
                  <label htmlFor="form-cat" className="font-bold text-slate-800 block text-xs">
                    Kategori Bisnis
                  </label>
                  <select
                    id="form-cat"
                    value={formData.businessCategory}
                    onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Service Needed */}
                <div className="space-y-1.5">
                  <label htmlFor="form-srv" className="font-bold text-slate-800 block text-xs">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="form-srv"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all cursor-pointer"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Problem / Needs */}
              <div className="space-y-1.5">
                <label htmlFor="form-prob" className="font-bold text-slate-800 block text-xs">
                  Ceritakan Kendala / Kebutuhan Utama <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="form-prob"
                  required
                  rows={4}
                  value={formData.problem}
                  onChange={(e) => {
                    setFormData({ ...formData, problem: e.target.value });
                    if (errors.problem) setErrors({ ...errors, problem: "" });
                  }}
                  placeholder="Contoh: Kami butuh menu digital yang bisa langsung order ke WhatsApp admin dan stok kasir bisa tercatat otomatis..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-y ${
                    errors.problem ? "border-rose-400 bg-rose-50/50" : "border-slate-300"
                  }`}
                />
                {errors.problem && (
                  <p role="alert" className="text-[11px] text-rose-600 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.problem}
                  </p>
                )}
              </div>

              {/* Budget Range (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="form-budget" className="font-bold text-slate-800 block text-xs">
                  Estimasi Budget <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <select
                  id="form-budget"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all cursor-pointer"
                >
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b ? b : "-- Belum ditentukan / Bebas --"}</option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                <button
                  type="submit"
                  data-cta="whatsapp"
                  data-source="contact-form"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Lanjutkan via WhatsApp</span>
                </button>

                <a
                  href={`mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(`Konsultasi Bisnis: ${formData.businessName || "Website / Sistem"}`)}`}
                  data-cta="email"
                  data-source="contact-form-email"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kirim Email</span>
                </a>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
