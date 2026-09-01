"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/languageContext";
import { Globe, LayoutGrid, ArrowRight, ShieldCheck } from "lucide-react";

export function DualViewHeroMockup() {
  const [activeTab, setActiveTab] = useState<"customer" | "operations">("customer");
  const customerTabRef = useRef<HTMLButtonElement>(null);
  const operationsTabRef = useRef<HTMLButtonElement>(null);
  const { language } = useLanguage();

  const labels = {
    customerView: { id: "Tampilan Pelanggan", en: "Customer Experience" },
    operationsView: { id: "Operasional Bisnis", en: "Business Operations" },
    footerMicrocopy: {
      id: "Dibuat mengikuti proses bisnis",
      en: "Built around real business processes"
    },
    viewIndicatorCustomer: { id: "Sisi Depan Pelanggan", en: "Customer-Facing Side" },
    viewIndicatorOperations: { id: "Sisi Operasional Internal", en: "Internal Operations Side" },
  };

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const nextTab = activeTab === "customer" ? "operations" : "customer";
      setActiveTab(nextTab);
      if (nextTab === "customer") customerTabRef.current?.focus();
      else operationsTabRef.current?.focus();
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto space-y-3">

      {/* View Switcher Semantic Tabs */}
      <div
        role="tablist"
        aria-label={language === "id" ? "Pilihan Tampilan Sistem" : "System View Switcher"}
        onKeyDown={handleTabKeyDown}
        className="flex items-center justify-between bg-white p-1.5 rounded-2xl border border-[#DCE3E5] shadow-xs"
      >
        <button
          ref={customerTabRef}
          type="button"
          role="tab"
          id="hero-tab-customer"
          aria-selected={activeTab === "customer"}
          aria-controls="hero-tabpanel-customer"
          tabIndex={activeTab === "customer" ? 0 : -1}
          onClick={() => setActiveTab("customer")}
          className={
            "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568] " +
            (activeTab === "customer"
              ? "bg-[#17324D] text-white shadow-xs"
              : "text-[#667681] hover:text-[#101C24] hover:bg-[#F7F7F3]")
          }
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{language === "id" ? labels.customerView.id : labels.customerView.en}</span>
        </button>

        <button
          ref={operationsTabRef}
          type="button"
          role="tab"
          id="hero-tab-operations"
          aria-selected={activeTab === "operations"}
          aria-controls="hero-tabpanel-operations"
          tabIndex={activeTab === "operations" ? 0 : -1}
          onClick={() => setActiveTab("operations")}
          className={
            "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568] " +
            (activeTab === "operations"
              ? "bg-[#177568] text-white shadow-xs"
              : "text-[#667681] hover:text-[#101C24] hover:bg-[#F7F7F3]")
          }
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>{language === "id" ? labels.operationsView.id : labels.operationsView.en}</span>
        </button>
      </div>

      {/* Main Mockup Container */}
      <div className="relative bg-white rounded-3xl border border-[#DCE3E5] shadow-lg overflow-hidden min-h-[380px]">

        {/* Browser Top Window Header */}
        <div className="bg-[#F7F7F3] px-4 py-3 border-b border-[#DCE3E5] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D79445]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#177568]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#17324D]/60" />
          </div>
          <div className="bg-white px-4 py-1 rounded-full text-[11px] text-[#667681] border border-[#DCE3E5] font-mono max-w-xs w-full text-center truncate">
            {activeTab === "customer" ? "portal.perusahaan.co.id" : "ops.perusahaan.co.id/workflow"}
          </div>
          <div className="w-8" />
        </div>

        {/* Dynamic View Panel with initial={false} to prevent blank render */}
        <div className="p-5 sm:p-6">
          {activeTab === "customer" ? (
            /* VIEW 1: CUSTOMER VIEW */
            <motion.div
              key="customer-view"
              role="tabpanel"
              id="hero-tabpanel-customer"
              aria-labelledby="hero-tab-customer"
              tabIndex={0}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 text-[#101C24] focus-visible:outline-none"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE3E5]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#17324D] text-white flex items-center justify-center font-bold text-xs">
                    AC
                  </div>
                  <strong className="text-sm font-bold">Artha Cipta Solusindo</strong>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F7F7F3] text-[#667681] border border-[#DCE3E5] font-semibold">
                  Corporate Portal
                </span>
              </div>

              <div className="bg-[#F7F7F3] p-4 rounded-2xl border border-[#DCE3E5] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D79445] block">
                  {language === "id" ? "Layanan & Portofolio" : "Services & Portfolio"}
                </span>
                <strong className="text-base sm:text-lg font-bold block text-[#17324D]">
                  {language === "id"
                    ? "Konsultasi Manajemen & Solusi Pengadaan Korporasi"
                    : "Corporate Management & Procurement Advisory"}
                </strong>
                <p className="text-xs text-[#667681] leading-relaxed">
                  {language === "id"
                    ? "Menyediakan layanan konsultasi operasional, integrasi rantai pasok, dan pengadaan sistem bisnis terverifikasi."
                    : "Providing operations advisory, verified supply-chain integrations, and enterprise procurement management."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#DCE3E5] space-y-1">
                  <span className="text-[11px] font-bold text-[#101C24] block">
                    {language === "id" ? "Katalog Layanan" : "Service Catalog"}
                  </span>
                  <span className="text-[10px] text-[#667681] block">
                    {language === "id" ? "4 Bidang Keahlian" : "4 Practice Areas"}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#DCE3E5] space-y-1">
                  <span className="text-[11px] font-bold text-[#101C24] block">
                    {language === "id" ? "Jalur Konsultasi" : "Consultation Path"}
                  </span>
                  <span className="text-[10px] text-[#177568] font-bold block">
                    {language === "id" ? "Formulir Terstruktur" : "Structured Form"}
                  </span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between bg-[#17324D] text-white p-3 rounded-xl text-xs font-semibold">
                <span className="text-[11px]">
                  {language === "id" ? "Butuh proposal kerja sama?" : "Need a formal proposal?"}
                </span>
                <span className="inline-flex items-center gap-1 text-[#D79445] font-bold text-xs">
                  {language === "id" ? "Minta Penawaran" : "Request Proposal"} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ) : (
            /* VIEW 2: OPERATIONS VIEW */
            <motion.div
              key="operations-view"
              role="tabpanel"
              id="hero-tabpanel-operations"
              aria-labelledby="hero-tab-operations"
              tabIndex={0}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 text-[#101C24] focus-visible:outline-none"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE3E5]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#177568] text-white flex items-center justify-center font-bold text-xs">
                    ERP
                  </div>
                  <strong className="text-sm font-bold">
                    {language === "id" ? "Alur Persetujuan & Pelacakan" : "Approval & Tracking Pipeline"}
                  </strong>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  {language === "id" ? "Sistem Aktif" : "Active System"}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-[#DCE3E5] bg-[#F7F7F3] flex items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <strong className="text-xs text-[#101C24] block">
                      PO-2026/08/94 - {language === "id" ? "Pengadaan Bahan Baku" : "Raw Materials Procurement"}
                    </strong>
                    <span className="text-[10px] text-[#667681]">
                      {language === "id" ? "Diajukan: Divisi Logistik • Nilai: Rp 48.500.000" : "Submitted: Logistics • Total: Rp 48,500,000"}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold shrink-0">
                    {language === "id" ? "Disetujui" : "Approved"}
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-[#DCE3E5] bg-[#F7F7F3] flex items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <strong className="text-xs text-[#101C24] block">
                      TRX-PL-4402 - {language === "id" ? "Slip Penempatan Reasuransi (USD)" : "Reinsurance Placing Slip (USD)"}
                    </strong>
                    <span className="text-[10px] text-[#667681]">
                      {language === "id" ? "Ledger lintas mata uang • Verifikasi pajak" : "Multi-currency ledger • Tax validation"}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-amber-100 text-amber-800 font-bold shrink-0">
                    {language === "id" ? "Review Keuangan" : "Finance Review"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                <div className="p-2 bg-white rounded-xl border border-[#DCE3E5]">
                  <span className="text-[10px] text-[#667681] block">
                    {language === "id" ? "Data Terpusat" : "Centralized Data"}
                  </span>
                  <strong className="text-xs text-[#177568] font-bold">1 Database</strong>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#DCE3E5]">
                  <span className="text-[10px] text-[#667681] block">Audit Trail</span>
                  <strong className="text-xs text-[#17324D] font-bold">
                    {language === "id" ? "Tertelusuri" : "Traceable"}
                  </strong>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#DCE3E5]">
                  <span className="text-[10px] text-[#667681] block">
                    {language === "id" ? "Hak Akses" : "Access Control"}
                  </span>
                  <strong className="text-xs text-[#101C24] font-bold">Role-Based</strong>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>

      {/* Trust Micro Signal */}
      <div className="flex items-center justify-between px-2 text-[11px] text-[#667681]">
        <span className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#177568]" />
          {language === "id" ? labels.footerMicrocopy.id : labels.footerMicrocopy.en}
        </span>
        <span className="font-semibold text-[#17324D]">
          {activeTab === "customer"
            ? (language === "id" ? labels.viewIndicatorCustomer.id : labels.viewIndicatorCustomer.en)
            : (language === "id" ? labels.viewIndicatorOperations.id : labels.viewIndicatorOperations.en)}
        </span>
      </div>

    </div>
  );
}
