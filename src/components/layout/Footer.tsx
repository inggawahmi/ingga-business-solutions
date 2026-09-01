"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/config/business";
import { CONFIDENTIALITY_NOTICE_BILINGUAL } from "@/data/caseStudies";
import { useLanguage } from "@/lib/languageContext";
import { MapPin, Mail, MessageCircle, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#101C24] text-[#DCE3E5] pt-16 pb-12 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Col 1-2: Brand & Developer Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#17324D] text-white flex items-center justify-center font-extrabold text-sm">
                IBS
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  {BUSINESS_CONFIG.brand}
                </span>
                <span className="text-xs text-[#8D9B9D]">
                  {language === "id" ? `Oleh ${BUSINESS_CONFIG.owner}` : `By ${BUSINESS_CONFIG.owner}`}
                </span>
              </div>
            </div>

            <p className="text-[#8D9B9D] leading-relaxed font-normal max-w-sm">
              {language === "id"
                ? "Membangun website profesional, aplikasi bisnis internal, dan sistem ERP yang dirancang khusus mengikuti proses kerja nyata perusahaan."
                : "Building professional websites, internal workflows, and custom ERP systems tailored to real business operations."}
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#8D9B9D]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D79445] shrink-0" />
                <span>
                  {BUSINESS_CONFIG.location} • {language === "id" ? `Melayani ${BUSINESS_CONFIG.serviceArea}` : "Serving Jabodetabek & Remote Nationwide"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#177568] shrink-0" />
                <span>
                  {language === "id"
                    ? "Komunikasi langsung dengan developer tanpa perantara"
                    : "Direct developer communication with zero middlemen"}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Solusi */}
          <div className="space-y-3">
            <strong className="text-xs font-bold uppercase tracking-wider text-white block">
              {language === "id" ? "Solusi Sistem" : "Solutions"}
            </strong>
            <ul className="space-y-2 text-[#8D9B9D]">
              <li>
                <Link href="/#solusi" className="hover:text-white transition-colors">
                  {language === "id" ? "Website & Kehadiran Digital" : "Websites & Digital Presence"}
                </Link>
              </li>
              <li>
                <Link href="/solusi/inventory-pos" className="hover:text-white transition-colors">
                  {language === "id" ? "Sistem Inventory & Mutasi" : "Inventory & Stock Control"}
                </Link>
              </li>
              <li>
                <Link href="/solusi/erp-insurance-reinsurance" className="hover:text-white transition-colors">
                  {language === "id" ? "ERP Asuransi & Reasuransi" : "Insurance & Reinsurance ERP"}
                </Link>
              </li>
              <li>
                <Link href="/#erp" className="hover:text-white transition-colors">
                  {language === "id" ? "Kemampuan Sistem Perusahaan" : "Enterprise Capability"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigasi */}
          <div className="space-y-3">
            <strong className="text-xs font-bold uppercase tracking-wider text-white block">
              {language === "id" ? "Navigasi" : "Navigation"}
            </strong>
            <ul className="space-y-2 text-[#8D9B9D]">
              <li>
                <Link href="/#pengalaman" className="hover:text-white transition-colors">
                  {language === "id" ? "Pengalaman Proyek Nyata" : "Proven Experience"}
                </Link>
              </li>
              <li>
                <Link href="/#cara-kerja" className="hover:text-white transition-colors">
                  {language === "id" ? "Cara Kerja & Model Kerjasama" : "Process & Engagement"}
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  {language === "id" ? "Tanya Jawab (FAQ)" : "FAQ"}
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="hover:text-white transition-colors">
                  {language === "id" ? "Konsultasi Kebutuhan" : "Contact & Consultation"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak */}
          <div className="space-y-3">
            <strong className="text-xs font-bold uppercase tracking-wider text-white block">
              {language === "id" ? "Kontak" : "Direct Contact"}
            </strong>
            <p className="text-xs text-[#8D9B9D] leading-relaxed font-normal">
              {language === "id"
                ? "Diskusikan kebutuhan website atau sistem bisnis Anda secara langsung."
                : "Discuss your website or custom business system directly."}
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={BUSINESS_CONFIG.links.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#4ADE80] hover:underline font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+62 852-1537-4285</span>
              </a>
              <a
                href={"mailto:" + BUSINESS_CONFIG.email}
                className="flex items-center gap-2 text-[#8D9B9D] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Confidentiality Notice & Copyright */}
        <div className="pt-8 border-t border-[#1D2B34] space-y-3 text-xs text-[#667681]">
          <p className="text-[11px] leading-relaxed max-w-3xl">
            {t(CONFIDENTIALITY_NOTICE_BILINGUAL)}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-[#1D2B34]/60">
            <p>© {currentYear} {BUSINESS_CONFIG.brand}. {language === "id" ? "Seluruh hak cipta dilindungi." : "All rights reserved."}</p>
            <p>{language === "id" ? "Membantu bisnis tampil meyakinkan dan beroperasi lebih rapi." : "Helping businesses build credibility and operate with greater clarity."}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
