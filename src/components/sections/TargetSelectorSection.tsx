import React from "react";
import Link from "next/link";
import { Utensils, Boxes, ShieldCheck, ArrowRight } from "lucide-react";

export function TargetSelectorSection() {
  const cards = [
    {
      id: "cafe",
      icon: Utensils,
      badge: "Untuk Cafe & Kuliner",
      title: "Cafe & UMKM",
      description: "Website, menu digital, katalog, dan alur pemesanan yang memudahkan pelanggan menemukan serta menghubungi bisnis Anda.",
      cta: "Lihat Solusi Cafe & UMKM",
      href: "/solusi/cafe-umkm",
      color: "border-amber-200 bg-amber-50/40 hover:border-amber-400 text-amber-900",
      btnColor: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold",
    },
    {
      id: "inventory",
      icon: Boxes,
      badge: "Untuk Toko & Gudang",
      title: "POS & Inventory",
      description: "Pencatatan penjualan, pergerakan stok, stock opname, dan laporan operasional dalam satu sistem yang lebih rapi.",
      cta: "Lihat Solusi POS & Inventory",
      href: "/solusi/inventory-pos",
      color: "border-teal-200 bg-teal-50/40 hover:border-teal-400 text-teal-950",
      btnColor: "bg-teal-700 hover:bg-teal-800 text-white font-bold",
    },
    {
      id: "insurance",
      icon: ShieldCheck,
      badge: "Untuk Enterprise & Asuransi",
      title: "Insurance & Custom ERP",
      description: "Sistem custom untuk workflow asuransi, reasuransi, finance, approval, rekonsiliasi, dan proses bisnis enterprise.",
      cta: "Lihat Solusi Insurance & ERP",
      href: "/solusi/insurance-erp",
      color: "border-blue-200 bg-blue-50/40 hover:border-blue-400 text-blue-950",
      btnColor: "bg-blue-600 hover:bg-blue-700 text-white font-bold",
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Pilih Kategori Kebutuhan Bisnis Anda
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Solusi yang Disesuaikan dengan Skala Usaha
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Pilih kategori bisnis Anda untuk melihat detail fitur, demo konsep tampilan, dan alur pengerjaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-3xl p-6 sm:p-8 border shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-6 ${card.color}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-slate-900">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={card.href}
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow-2xs ${card.btnColor}`}
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
