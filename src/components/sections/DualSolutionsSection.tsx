import React from "react";
import Link from "next/link";
import { Globe, LayoutGrid, Check, ArrowRight } from "lucide-react";

export function DualSolutionsSection() {
  return (
    <section id="solusi" className="py-20 sm:py-24 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#177568] block">
            Dua Jalur Solusi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101C24] tracking-tight">
            Solusi untuk Sisi Depan dan Belakang Bisnis
          </h2>
          <p className="text-sm sm:text-base text-[#667681] leading-relaxed font-normal">
            Mulai dari membangun kepercayaan customer hingga merapikan proses kerja internal.
          </p>
        </div>

        {/* 2 Large Panels (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* PANEL A: DI DEPAN CUSTOMER */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white border border-[#DCE3E5] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#17324D] text-white">
                  Di Depan Customer
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F3] text-[#17324D] flex items-center justify-center border border-[#DCE3E5]">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#101C24] tracking-tight">
                  Tampilkan Bisnis dengan Lebih Meyakinkan
                </h3>
                <span className="text-xs font-bold text-[#177568] block mt-1">
                  Website & Digital Presence
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#667681] leading-relaxed font-normal">
                Website profesional yang membantu calon customer memahami bisnis, layanan, pengalaman, dan langkah berikutnya dengan lebih jelas.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                <strong className="text-xs font-bold text-[#101C24] block">
                  Cocok untuk:
                </strong>
                <p className="text-xs text-[#667681]">
                  Company profile, bisnis jasa, vendor corporate, F&B, UMKM berkembang, dan landing page layanan.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                <strong className="text-xs font-bold text-[#101C24] block">
                  Hasil yang Anda Dapatkan:
                </strong>
                <ul className="space-y-1.5 text-xs text-[#667681] font-normal">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Informasi bisnis tersusun lebih terstruktur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Layanan dan portfolio tersaji secara profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Jalur inquiry dan konsultasi calon klien lebih jelas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Performa traffic dapat diukur melalui analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCE3E5]">
              <Link
                href="#kontak"
                className="w-full inline-flex items-center justify-between py-3.5 px-5 rounded-2xl bg-[#17324D] hover:bg-[#101C24] text-white text-xs font-bold transition-colors shadow-xs"
              >
                <span>Pelajari Website & Digital Presence</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* PANEL B: DI BALIK LAYAR */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white border border-[#DCE3E5] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#177568] text-white">
                  Di Balik Layar
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F3] text-[#177568] flex items-center justify-center border border-[#DCE3E5]">
                  <LayoutGrid className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#101C24] tracking-tight">
                  Rapikan Proses yang Masih Manual dan Terpisah
                </h3>
                <span className="text-xs font-bold text-[#D79445] block mt-1">
                  Sistem Bisnis Custom
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#667681] leading-relaxed font-normal">
                Aplikasi internal yang dibuat berdasarkan workflow bisnis, sehingga data, tanggung jawab, dan progress pekerjaan lebih mudah dipantau.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                <strong className="text-xs font-bold text-[#101C24] block">
                  Contoh Kebutuhan:
                </strong>
                <p className="text-xs text-[#667681]">
                  Inquiry & quotation, project tracking, inventory & perpindahan stok, purchase request, approval workflow, dan dashboard owner.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#DCE3E5]">
                <strong className="text-xs font-bold text-[#101C24] block">
                  Hasil yang Anda Dapatkan:
                </strong>
                <ul className="space-y-1.5 text-xs text-[#667681] font-normal">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Mengurangi pencatatan data berulang antar divisi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Mempermudah pencarian status pekerjaan dan approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Mengurangi ketergantungan pada spreadsheet terpisah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#177568] shrink-0 mt-0.5" />
                    <span>Memberikan ringkasan laporan lebih cepat kepada pimpinan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCE3E5]">
              <Link
                href="/solusi/inventory-pos"
                className="w-full inline-flex items-center justify-between py-3.5 px-5 rounded-2xl bg-[#F7F7F3] hover:bg-[#177568] hover:text-white text-[#101C24] border border-[#DCE3E5] text-xs font-bold transition-colors shadow-2xs"
              >
                <span>Pelajari Sistem Bisnis Custom</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
