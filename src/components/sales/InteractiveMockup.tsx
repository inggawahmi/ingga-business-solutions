"use client";

import React, { useState } from "react";
import { MessageCircle, MapPin, Clock, Star, Plus } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export function InteractiveMockup() {
  const [selectedItem, setSelectedItem] = useState("Kopi Susu Gula Aren");

  const sampleItems = [
    { name: "Kopi Susu Gula Aren", price: "Rp 22.000", tag: "Favorit", desc: "Espresso robusta + aren organik + fresh milk" },
    { name: "Matcha Latte Oat", price: "Rp 26.000", tag: "Non-Coffee", desc: "Pure Uji matcha with creamy oat milk" },
    { name: "Butter Croissant", price: "Rp 24.000", tag: "Artisan Bakery", desc: "Freshly baked daily, flaky & buttery" },
  ];

  const orderUrl = buildWhatsAppUrl(
    "Halo Kopi Senja, saya ingin memesan menu: " + selectedItem + "\n\nNama:\nAlamat / Meja:"
  );

  return (
    <div className="relative w-full max-w-lg mx-auto">

      {/* Main Desktop/Tablet Browser Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border border-[#E8E1D6] shadow-xl overflow-hidden"
      >
        {/* Browser Top Bar */}
        <div className="bg-[#FFF8ED] px-4 py-3 border-b border-[#E8E1D6] flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97745]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6DFC7]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F5A44]/50" />
          </div>
          <div className="bg-white px-3 py-1 rounded-full text-[11px] text-[#667068] border border-[#E8E1D6] font-mono truncate max-w-xs w-full text-center">
            kopisenja.id/menu
          </div>
          <div className="w-8" />
        </div>

        {/* Mockup Website Content */}
        <div className="p-5 sm:p-6 space-y-5 text-[#17211B]">

          {/* Cafe Mini Banner */}
          <div className="bg-[#17211B] text-white p-5 rounded-2xl space-y-2 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F6DFC7] block">
                  Kedai Kopi & Bakery
                </span>
                <strong className="text-lg sm:text-xl font-bold block mt-0.5">
                  Kopi Senja Nusantara
                </strong>
              </div>
              <div className="bg-[#1F5A44] text-[#4ADE80] px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                <span>Buka Hari Ini</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] text-[#9FA8A1] pt-1">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#F6DFC7]" /> 08.00 - 22.00</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D97745]" /> Bekasi Timur</span>
              <span className="flex items-center gap-1 text-[#F6DFC7] font-semibold"><Star className="w-3.5 h-3.5 fill-current" /> 4.9 (240+ ulasan)</span>
            </div>
          </div>

          {/* Menu Selection List */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-[#667068] block">Pilihan Menu Unggulan:</span>
            {sampleItems.map((item) => {
              const isSelected = selectedItem === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedItem(item.name)}
                  className={
                    "p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 " +
                    (isSelected
                      ? "bg-[#FFF8ED] border-[#D97745] shadow-xs"
                      : "bg-white border-[#E8E1D6] hover:border-[#667068]")
                  }
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#17211B]">{item.name}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#F6DFC7] text-[#D97745] font-semibold">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#667068] font-normal">{item.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#1F5A44] block">{item.price}</span>
                    <span className="text-[10px] text-[#D97745] font-semibold flex items-center justify-end gap-0.5">
                      <Plus className="w-3 h-3" /> Pilih
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Direct Order Bar */}
          <div className="pt-2">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              data-source="hero-mockup-direct-order"
              className="w-full py-3 px-4 rounded-xl bg-[#1F5A44] hover:bg-[#174535] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan {selectedItem} via WhatsApp</span>
            </a>
          </div>

        </div>
      </motion.div>

      {/* Floating Overlapping Mobile Card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-3.5 rounded-2xl border border-[#E8E1D6] shadow-lg max-w-[200px] items-center gap-3 z-10"
      >
        <div className="w-9 h-9 rounded-xl bg-[#F6DFC7] text-[#D97745] flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] text-[#667068] block">Alur Otomatis</span>
          <strong className="text-xs text-[#17211B] leading-tight block">
            Format Pesanan Siap Kirim
          </strong>
        </div>
      </motion.div>

    </div>
  );
}
