import React from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/config/business";
import { MessageCircle, Mail, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Col 1-2: Brand & Personal Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                IW
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  {BUSINESS_CONFIG.brand}
                </span>
                <span className="text-xs text-slate-400">
                  Oleh {BUSINESS_CONFIG.owner}
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-normal max-w-sm">
              {BUSINESS_CONFIG.tagline}. Membantu pemilik usaha, cafe, dan perusahaan membangun kehadiran digital yang meyakinkan serta operasional yang lebih rapi.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{BUSINESS_CONFIG.location} • Melayani {BUSINESS_CONFIG.serviceArea}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Komunikasi langsung dengan developer tanpa perantara</span>
              </div>
            </div>
          </div>

          {/* Col 3: Halaman Solusi */}
          <div className="space-y-3">
            <strong className="text-xs font-bold uppercase tracking-wider text-white block">
              Solusi Bisnis
            </strong>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/solusi/cafe-umkm" className="hover:text-blue-400 transition-colors">
                  Website Cafe & Menu Digital
                </Link>
              </li>
              <li>
                <Link href="/solusi/inventory-pos" className="hover:text-blue-400 transition-colors">
                  Sistem POS & Inventory
                </Link>
              </li>
              <li>
                <Link href="/solusi/insurance-erp" className="hover:text-blue-400 transition-colors">
                  Sistem Asuransi & ERP
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Company Profile Bisnis
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigasi Cepat */}
          <div className="space-y-3">
            <strong className="text-xs font-bold uppercase tracking-wider text-white block">
              Informasi
            </strong>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/#experience" className="hover:text-blue-400 transition-colors">
                  Pengalaman Sistem
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-blue-400 transition-colors">
                  Cara Kerja & Alur
                </Link>
              </li>
              <li>
                <Link href="/#engagement" className="hover:text-blue-400 transition-colors">
                  Pilihan Scope Project
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-400 transition-colors">
                  Tanya Jawab (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-400 transition-colors">
                  Konsultasi Kebutuhan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak Langsung */}
          <div className="space-y-3">
            <strong className="text-xs font-bold uppercase tracking-wider text-white block">
              Hubungi Langsung
            </strong>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Siap mendiskusikan kebutuhan website atau sistem bisnis Anda kapan saja.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={BUSINESS_CONFIG.links.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+62 852-1537-4285</span>
              </a>
              <a
                href={"mailto:" + BUSINESS_CONFIG.email}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {BUSINESS_CONFIG.brand}. Seluruh hak cipta dilindungi.</p>
          <p className="text-center sm:text-right">
            Dibuat khusus untuk membantu digitalisasi bisnis di Jabodetabek & seluruh Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
