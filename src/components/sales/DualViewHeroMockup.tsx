"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, LayoutGrid, ArrowRight, ShieldCheck } from "lucide-react";

export function DualViewHeroMockup() {
  const [activeTab, setActiveTab] = useState<"customer" | "operations">("customer");

  return (
    <div className="relative w-full max-w-xl mx-auto space-y-3">

      {/* View Switcher Controls */}
      <div className="flex items-center justify-between bg-white p-1.5 rounded-2xl border border-[#DCE3E5] shadow-xs">
        <button
          type="button"
          onClick={() => setActiveTab("customer")}
          className={
            "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer " +
            (activeTab === "customer"
              ? "bg-[#17324D] text-white shadow-xs"
              : "text-[#667681] hover:text-[#101C24] hover:bg-[#F7F7F3]")
          }
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Customer Experience</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("operations")}
          className={
            "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer " +
            (activeTab === "operations"
              ? "bg-[#177568] text-white shadow-xs"
              : "text-[#667681] hover:text-[#101C24] hover:bg-[#F7F7F3]")
          }
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Business Operations</span>
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

        {/* Dynamic Interactive View */}
        <div className="p-5 sm:p-6">
          {activeTab === "customer" ? (
            /* VIEW 1: CUSTOMER-FACING EXPERIENCE */
            <motion.div
              key="customer-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-[#101C24]"
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
                  Layanan & Solusi
                </span>
                <strong className="text-base sm:text-lg font-bold block text-[#17324D]">
                  Konsultasi Pengadaan & Sistem Manajemen Bisnis
                </strong>
                <p className="text-xs text-[#667681] leading-relaxed">
                  Menyediakan layanan konsultasi manajemen, integrasi rantai pasok, dan pengadaan perangkat korporasi terverifikasi.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#DCE3E5] space-y-1">
                  <span className="text-[11px] font-bold text-[#101C24] block">Katalog Layanan</span>
                  <span className="text-[10px] text-[#667681] block">4 Kategori Solusi</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#DCE3E5] space-y-1">
                  <span className="text-[11px] font-bold text-[#101C24] block">Jalur Inquiry</span>
                  <span className="text-[10px] text-[#177568] font-bold block">Formulir Terstruktur</span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between bg-[#17324D] text-white p-3 rounded-xl text-xs font-semibold">
                <span className="text-[11px]">Butuh proposal layanan untuk perusahaan Anda?</span>
                <span className="inline-flex items-center gap-1 text-[#D79445] font-bold text-xs">
                  Minta Penawaran <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ) : (
            /* VIEW 2: BUSINESS OPERATIONS VIEW */
            <motion.div
              key="operations-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-[#101C24]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE3E5]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#177568] text-white flex items-center justify-center font-bold text-xs">
                    ERP
                  </div>
                  <strong className="text-sm font-bold">Pipeline Approval & Tracking</strong>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Sistem Aktif
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-[#DCE3E5] bg-[#F7F7F3] flex items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <strong className="text-xs text-[#101C24] block">PO-2026/08/94 - Pengadaan Raw Materials</strong>
                    <span className="text-[10px] text-[#667681]">Diajukan: Divisi Logistik ? Nilai: Rp 48.500.000</span>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold shrink-0">
                    Approved
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-[#DCE3E5] bg-[#F7F7F3] flex items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <strong className="text-xs text-[#101C24] block">TRX-PL-4402 - Reinsurance Placing Slip (USD)</strong>
                    <span className="text-[10px] text-[#667681]">Multi-currency ledger ? Verifikasi Rate Pajak</span>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-amber-100 text-amber-800 font-bold shrink-0">
                    Review Finance
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                <div className="p-2 bg-white rounded-xl border border-[#DCE3E5]">
                  <span className="text-[10px] text-[#667681] block">Data Terpusat</span>
                  <strong className="text-xs text-[#177568] font-bold">1 Database</strong>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#DCE3E5]">
                  <span className="text-[10px] text-[#667681] block">Audit Log</span>
                  <strong className="text-xs text-[#17324D] font-bold">Tertelusuri</strong>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#DCE3E5]">
                  <span className="text-[10px] text-[#667681] block">Hak Akses</span>
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
          Arsitektur Disesuaikan dengan Workflow Nyata
        </span>
        <span className="font-semibold text-[#17324D]">
          {activeTab === "customer" ? "Sisi Depan Customer" : "Sisi Operasional Internal"}
        </span>
      </div>

    </div>
  );
}
