"use client";

import React, { useState } from "react";
import { MessageCircle, MapPin, Clock, Plus, Minus, QrCode } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CafeLivePreview() {
  const [cart, setCart] = useState<{ [key: string]: number }>({
    "Signature Aren Latte": 1,
    "Almond Croissant": 1,
  });

  const menuItems = [
    { id: "Signature Aren Latte", category: "Coffee", price: 24000, desc: "Double espresso, fresh milk, and organic palm sugar." },
    { id: "Caramel Macchiato", category: "Coffee", price: 28000, desc: "Vanilla syrup, steamed milk, espresso, caramel drizzle." },
    { id: "Matcha Latte Supreme", category: "Non-Coffee", price: 26000, desc: "Pure Uji Matcha blend with silky oat milk." },
    { id: "Almond Croissant", category: "Bakery", price: 25000, desc: "Crispy outer layer filled with rich almond paste." },
  ];

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const orderLines = Object.entries(cart).map(([id, qty]) => {
    const item = menuItems.find((m) => m.id === id);
    return `- ${qty}x ${id} (Rp ${((item?.price || 0) * qty).toLocaleString("id-ID")})`;
  });

  const whatsappMessage = [
    "Halo, saya ingin memesan menu:",
    ...orderLines,
    "",
    `Total: Rp ${total.toLocaleString("id-ID")}`,
    "Nama:",
    "Alamat / Nomor Meja:",
  ].join("\n");

  const waUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-2xl mx-auto">
      {/* Concept demo disclaimer banner */}
      <div className="bg-amber-500 text-slate-950 font-bold px-4 py-2 text-center text-xs tracking-wide">
        Demo Konsep • Bukan Proyek Klien
      </div>

      {/* Header Info */}
      <div className="bg-slate-900 text-white p-6 sm:p-7 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Contoh Menu Digital Cafe
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Kopi Senja & Pastry
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Spesialis Kopi Nusantara, Artisan Bakery & Cold Brew
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
            <QrCode className="w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-teal-400" /> Buka: 08.00 - 23.00 WIB</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-400" /> Jl. Boulevard Hijau, Bekasi</span>
        </div>
      </div>

      {/* Menu List */}
      <div className="p-6 space-y-4 bg-slate-50/50">
        <strong className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
          Pilihan Menu Favorit
        </strong>

        <div className="space-y-3">
          {menuItems.map((item) => {
            const qty = cart[item.id] || 0;
            return (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{item.id}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                  <strong className="text-xs font-bold text-blue-700 block">
                    Rp {item.price.toLocaleString("id-ID")}
                  </strong>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {qty > 0 ? (
                    <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-white text-slate-700 hover:bg-slate-50 flex items-center justify-center font-bold text-xs cursor-pointer shadow-2xs"
                        aria-label={`Kurangi ${item.id}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center text-slate-900">{qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center font-bold text-xs cursor-pointer shadow-2xs"
                        aria-label={`Tambah ${item.id}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, 1)}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-200 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      + Pesan
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Cart & WhatsApp Trigger */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 mt-6">
          <div>
            <span className="text-xs text-slate-400 block">Total Pesanan ({Object.keys(cart).length} jenis)</span>
            <strong className="text-lg sm:text-xl font-extrabold text-amber-400">
              Rp {total.toLocaleString("id-ID")}
            </strong>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-source="cafe-concept-demo"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pesan Langsung via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
