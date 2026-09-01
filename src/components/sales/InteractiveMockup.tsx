"use client";

import React, { useState } from "react";
import { MessageCircle, ShoppingCart, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function InteractiveMockup() {
  const [activeTab, setActiveTab] = useState<"menu" | "inventory">("menu");
  const [cartCount, setCartCount] = useState(2);

  const demoOrderUrl = buildWhatsAppUrl(
    "Halo, saya ingin memesan:\n- 2x Kopi Susu Aren (Reguler)\n- 1x Croissant Butter\n\nTotal: Rp 68.000\nNama: Budi\nAlamat: Jl. Juanda No. 12, Bekasi"
  );

  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-100 flex flex-col text-xs">

      {/* Top Browser Bar */}
      <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Mock Address Bar */}
        <div className="bg-slate-900 px-3.5 py-1 rounded-full text-[11px] text-slate-400 border border-slate-800 flex items-center gap-1.5 font-mono max-w-xs w-full justify-center truncate">
          <span className="text-emerald-400 font-bold">https://</span>
          <span>kopi-nusantara.id/menu</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("menu")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              activeTab === "menu" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Menu Digital
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("inventory")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              activeTab === "inventory" ? "bg-teal-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Status Stok
          </button>
        </div>
      </div>

      {/* Main Mockup Body */}
      <div className="p-4 sm:p-5 space-y-4 bg-slate-900/90 min-h-[320px]">
        {activeTab === "menu" ? (
          <div className="space-y-4">
            {/* Cafe Brand Hero Mini */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  Menu Unggulan Cafe
                </span>
                <strong className="text-sm font-bold text-white block">
                  Kopi Nusantara • Bekasi Timur
                </strong>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-rose-400" /> Buka: 08.00 - 22.00 WIB
                </p>
              </div>

              <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Buka Sekarang</span>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-100 block text-xs">
                    Kopi Susu Gula Aren
                  </span>
                  <span className="text-[11px] text-amber-400 font-semibold block">
                    Rp 22.000
                  </span>
                  <span className="text-[10px] text-slate-400">Espresso + Aren Organik</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] cursor-pointer"
                >
                  + Tambah
                </button>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-100 block text-xs">
                    Croissant Butter Flaky
                  </span>
                  <span className="text-[11px] text-amber-400 font-semibold block">
                    Rp 24.000
                  </span>
                  <span className="text-[10px] text-slate-400">Freshly Baked Daily</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] cursor-pointer"
                >
                  + Tambah
                </button>
              </div>
            </div>

            {/* Order Summary & WhatsApp CTA */}
            <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-900/60 text-blue-400 flex items-center justify-center font-bold">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Keranjang Belanja ({cartCount} item)</span>
                  <strong className="text-white text-xs font-bold">Total: Rp 68.000</strong>
                </div>
              </div>

              <a
                href={demoOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-source="hero-interactive-demo"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Kirim Pesanan ke WA</span>
              </a>
            </div>
          </div>
        ) : (
          /* Inventory Tab */
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 text-center">
                <span className="text-[10px] text-slate-400 block">Total SKU</span>
                <strong className="text-sm font-bold text-white">128 Produk</strong>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 text-center">
                <span className="text-[10px] text-slate-400 block">Stok Aman</span>
                <strong className="text-sm font-bold text-emerald-400">122 Produk</strong>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 text-center">
                <span className="text-[10px] text-slate-400 block">Restock Segera</span>
                <strong className="text-sm font-bold text-amber-400">6 Produk</strong>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/40 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-200">Biji Kopi Arabika Gayo 1kg</span>
                <span className="text-emerald-400 font-bold">Stok: 45 pack</span>
              </div>
              <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/40 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-200">Susu UHT Fresh 1L</span>
                <span className="text-amber-400 font-bold">Stok: 8 kotak (Tipis)</span>
              </div>
              <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/40 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-200">Cup Dingin 16oz</span>
                <span className="text-emerald-400 font-bold">Stok: 850 pcs</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-teal-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Audit Stock Opname sinkron
              </span>
              <span>Update: Realtime</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Trust Bar */}
      <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <span className="flex items-center gap-1 text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Code-native UI • Siap disesuaikan dengan SOP bisnis Anda
        </span>
        <span className="text-slate-500 font-mono">Mobile & Desktop Responsive</span>
      </div>

    </div>
  );
}
