"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function InventoryLivePreview() {
  const [items, setItems] = useState([
    { id: "BRG-01", name: "Biji Kopi Arabika 1kg", systemStock: 50, physicalStock: 48, minStock: 10, unit: "pack" },
    { id: "BRG-02", name: "Sirup Karamel 750ml", systemStock: 12, physicalStock: 12, minStock: 5, unit: "botol" },
    { id: "BRG-03", name: "Paper Cup 12oz (Isi 50)", systemStock: 6, physicalStock: 4, minStock: 8, unit: "slop" },
  ]);

  const [activeTab, setActiveTab] = useState<"pos" | "opname">("pos");

  const adjustStock = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, systemStock: Math.max(0, item.systemStock + delta) }
          : item
      )
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-2xl mx-auto text-xs">
      <div className="bg-amber-500 text-slate-950 font-bold px-4 py-2 text-center text-xs tracking-wide">
        Demo Konsep • Bukan Proyek Klien
      </div>

      {/* Control Tabs */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
        <div>
          <strong className="text-sm sm:text-base font-bold text-white block">
            Dashboard POS & Mutasi Gudang
          </strong>
          <span className="text-[11px] text-slate-400">
            Simulasi pemotongan stok kasir dan audit stock opname
          </span>
        </div>

        <div className="flex gap-1 bg-slate-800 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab("pos")}
            className={`px-3 py-1 rounded-lg font-semibold text-[11px] ${
              activeTab === "pos" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Kasir (POS)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("opname")}
            className={`px-3 py-1 rounded-lg font-semibold text-[11px] ${
              activeTab === "opname" ? "bg-teal-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Stock Opname
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 space-y-4 bg-slate-50/60">
        {activeTab === "pos" ? (
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-200 text-[11px]">
              Klik tombol <strong>Jual (-1)</strong> untuk mensimulasikan pemotongan stok otomatis saat kasir memproses struk.
            </div>

            <div className="space-y-2.5">
              {items.map((item) => {
                const isLow = item.systemStock <= item.minStock;
                return (
                  <div
                    key={item.id}
                    className="bg-white p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {item.id}
                        </span>
                        <span className="font-bold text-slate-900 text-xs">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-[11px]">
                        <span className="text-slate-600">
                          Tersedia: <strong>{item.systemStock} {item.unit}</strong>
                        </span>
                        {isLow && (
                          <span className="text-amber-600 font-bold flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Stok Menipis
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => adjustStock(item.id, -1)}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs cursor-pointer"
                      >
                        Jual (-1)
                      </button>
                      <button
                        type="button"
                        onClick={() => adjustStock(item.id, 5)}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer"
                        title="Restock barang"
                      >
                        +5 Restock
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="p-3 bg-teal-50 text-teal-900 rounded-xl border border-teal-200 text-[11px]">
              Tabel Stock Opname membandingkan saldo catatan sistem dengan hitungan fisik riil di gudang.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-semibold">
                    <th className="py-2">Kode / Nama</th>
                    <th className="py-2 text-center">Data Sistem</th>
                    <th className="py-2 text-center">Fisik Riil</th>
                    <th className="py-2 text-right">Selisih Mutasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {items.map((item) => {
                    const diff = item.physicalStock - item.systemStock;
                    return (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="py-2.5">
                          <span className="font-bold text-slate-900 block">{item.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{item.id}</span>
                        </td>
                        <td className="py-2.5 text-center font-semibold text-slate-700">
                          {item.systemStock} {item.unit}
                        </td>
                        <td className="py-2.5 text-center font-bold text-slate-900">
                          {item.physicalStock} {item.unit}
                        </td>
                        <td className="py-2.5 text-right font-bold">
                          {diff === 0 ? (
                            <span className="text-emerald-600 flex items-center justify-end gap-1">
                              <CheckCircle2 className="w-3 h-3" /> 0 (Sesuai)
                            </span>
                          ) : (
                            <span className="text-rose-600">
                              {diff > 0 ? `+${diff}` : diff} {item.unit}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
