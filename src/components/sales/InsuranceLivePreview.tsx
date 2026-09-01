"use client";

import React from "react";
import { Calculator } from "lucide-react";

export function InsuranceLivePreview() {
  return (
    <div className="bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-xl overflow-hidden max-w-2xl mx-auto text-xs">
      <div className="bg-amber-500 text-slate-950 font-bold px-4 py-2 text-center text-xs tracking-wide">
        Demo Konsep Arsitektur • Bukan Proyek Klien
      </div>

      {/* Header */}
      <div className="p-6 border-b border-slate-800 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
          Reinsurance Brokerage & ERP Placement Flow
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
          Alur Transaksi & Settlement Statement of Account (SOA)
        </h3>
        <p className="text-xs text-slate-400 font-normal">
          Perhitungan arbitrer berpresisi tinggi (BCMath) tanpa selisih pembulatan desimal.
        </p>
      </div>

      {/* Workflow Steps Preview */}
      <div className="p-6 space-y-4 bg-slate-900/60">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 space-y-1">
            <span className="text-[10px] text-teal-400 font-bold block">1. PLACING SLIP</span>
            <strong className="text-xs text-white block">Treaty / Facultative</strong>
            <span className="text-[11px] text-slate-400 block">Multi-reinsurer share %</span>
          </div>

          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 space-y-1">
            <span className="text-[10px] text-blue-400 font-bold block">2. DEBIT/CREDIT NOTE</span>
            <strong className="text-xs text-white block">Auto Invoicing</strong>
            <span className="text-[11px] text-slate-400 block">Premi gross, komisi & pajak</span>
          </div>

          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 space-y-1">
            <span className="text-[10px] text-amber-400 font-bold block">3. SETTLEMENT SOA</span>
            <strong className="text-xs text-white block">Bank Reconciliation</strong>
            <span className="text-[11px] text-slate-400 block">Matching AR/AP piutang</span>
          </div>
        </div>

        {/* BCMath Calculation Snippet Container */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-[11px]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="flex items-center gap-1.5 text-teal-400 font-bold">
              <Calculator className="w-3.5 h-3.5" /> BCMath Precision Ledger
            </span>
            <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-300">InnoDB ACID</span>
          </div>

          <div className="space-y-1 text-slate-300">
            <p><span className="text-purple-400">Gross Premium:</span> USD 150,000.00</p>
            <p><span className="text-blue-400">Brokerage Rate (15%):</span> USD 22,500.00</p>
            <p><span className="text-amber-400">Configured Tax Withholding:</span> USD 2,475.00</p>
            <p className="pt-1 border-t border-slate-800 text-emerald-400 font-bold">
              Net Reinsurance Payable: USD 129,975.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
