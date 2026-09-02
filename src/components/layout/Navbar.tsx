"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/config/business";
import { useLanguage } from "@/lib/languageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X, ChevronDown, Globe, LayoutGrid, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solusiDropdown, setSolusiDropdown] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!solusiDropdown) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolusiDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [solusiDropdown]);

  // Mobile menu body scroll lock & Escape listener
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  // Keyboard navigation for desktop dropdown
  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSolusiDropdown(true);
      setTimeout(() => {
        firstItemRef.current?.focus();
      }, 50);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setSolusiDropdown(false);
    }
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setSolusiDropdown(false);
      triggerRef.current?.focus();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
      setSolusiDropdown(false);
    }
  };

  const navLabels = {
    solutions: { id: "Solusi", en: "Solutions" },
    erp: { id: "ERP", en: "ERP" },
    experience: { id: "Pengalaman", en: "Experience" },
    process: { id: "Cara Kerja", en: "Process" },
    about: { id: "Tentang", en: "About" },
    cta: { id: "Diskusikan Kebutuhan", en: "Discuss Your Needs" },
    mobileMenu: { id: "Menu Navigasi", en: "Navigation Menu" },
    closeMenu: { id: "Tutup menu", en: "Close menu" },
    openMenu: { id: "Buka menu navigasi", en: "Open menu" },
  };

  const solutionLinks = [
    {
      title: { id: "Website & Kehadiran Digital", en: "Website & Digital Presence" },
      desc: { id: "Profil perusahaan dan portal pelanggan", en: "Company profiles and customer portals" },
      href: "/#solusi",
      icon: Globe,
    },
    {
      title: { id: "Sistem Bisnis Custom", en: "Custom Business Systems" },
      desc: { id: "Proses internal dan pengelolaan persediaan", en: "Internal workflows & inventory control" },
      href: "/solusi/inventory-pos",
      icon: LayoutGrid,
    },
    {
      title: { id: "ERP Asuransi & Reasuransi", en: "Insurance & Reinsurance ERP" },
      desc: { id: "Penempatan risiko dan pencatatan transaksi lintas mata uang", en: "Placement pipelines & multi-currency ledgers" },
      href: "/solusi/erp-insurance-reinsurance",
      icon: ShieldCheck,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 px-4 sm:px-6 transition-all duration-300">
      <div
        className={
          "max-w-6xl mx-auto rounded-2xl transition-all duration-300 " +
          (scrolled
            ? "bg-white/95 border border-[#DCE3E5] backdrop-blur-md py-2.5 px-4 sm:px-6 shadow-sm"
            : "bg-transparent py-3 px-2 sm:px-4")
        }
      >
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568] rounded-xl"
            aria-label={BUSINESS_CONFIG.brand + " - " + (language === "id" ? "Beranda" : "Home")}
          >
            <div className="w-9 h-9 rounded-xl bg-[#17324D] text-white flex items-center justify-center font-extrabold text-sm shadow-xs group-hover:bg-[#177568] transition-colors">
              IBS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[#101C24] group-hover:text-[#177568] transition-colors leading-tight">
                {BUSINESS_CONFIG.brand}
              </span>
              <span className="text-[11px] text-[#667681] font-medium">
                {language === "id" ? "Website & Sistem Bisnis" : "Websites & Business Systems"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#101C24]"
            aria-label={t(navLabels.mobileMenu)}
          >
            {/* Dropdown Solusi (Pure Click Toggle, Full Keyboard, No Hover) */}
            <div
              ref={dropdownRef}
              className="relative"
              onBlur={handleBlur}
              onKeyDown={handleDropdownKeyDown}
            >
              <button
                ref={triggerRef}
                type="button"
                id="desktop-solutions-trigger"
                aria-expanded={solusiDropdown}
                aria-haspopup="true"
                aria-controls="desktop-solutions-menu"
                onClick={() => setSolusiDropdown((prev) => !prev)}
                onKeyDown={handleTriggerKeyDown}
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
              >
                <span>{t(navLabels.solutions)}</span>
                <ChevronDown
                  className={
                    "w-3.5 h-3.5 text-[#667681] transition-transform duration-200 " +
                    (solusiDropdown ? "rotate-180" : "")
                  }
                />
              </button>

              {solusiDropdown && (
                <div
                  id="desktop-solutions-menu"
                  role="menu"
                  aria-labelledby="desktop-solutions-trigger"
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl border border-[#DCE3E5] shadow-lg p-2 flex flex-col gap-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  {solutionLinks.map((sol, idx) => {
                    const Icon = sol.icon;
                    return (
                      <Link
                        key={sol.href}
                        ref={idx === 0 ? firstItemRef : undefined}
                        href={sol.href}
                        role="menuitem"
                        onClick={() => setSolusiDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F7F3] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F7F7F3] text-[#17324D] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#177568] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="block text-xs font-bold text-[#101C24] group-hover:text-[#177568]">
                            {t(sol.title)}
                          </strong>
                          <span className="text-[11px] text-[#667681] font-normal leading-tight block">
                            {t(sol.desc)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/#erp"
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
            >
              {t(navLabels.erp)}
            </Link>
            <Link
              href="/#pengalaman"
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
            >
              {t(navLabels.experience)}
            </Link>
            <Link
              href="/#cara-kerja"
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
            >
              {t(navLabels.process)}
            </Link>
            <Link
              href="/#tentang"
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
            >
              {t(navLabels.about)}
            </Link>
          </nav>

          {/* Desktop Right Side: Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Link
              href="#kontak"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#17324D] hover:bg-[#101C24] text-white text-xs font-bold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
            >
              {t(navLabels.cta)}
            </Link>
          </div>

          {/* Mobile Right Controls: Toggle + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl bg-white border border-[#DCE3E5] text-[#101C24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
              aria-label={mobileOpen ? t(navLabels.closeMenu) : t(navLabels.openMenu)}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white border border-[#DCE3E5] shadow-xl p-5 space-y-4 overflow-hidden"
          >
            <nav className="flex flex-col gap-1 text-sm font-semibold text-[#101C24]" aria-label={t(navLabels.mobileMenu)}>
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#667681]">
                {t(navLabels.solutions)}
              </div>
              {solutionLinks.map((sol) => (
                <Link
                  key={sol.href}
                  href={sol.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3] text-xs flex items-center justify-between"
                >
                  <span className="font-bold text-[#101C24]">{t(sol.title)}</span>
                  <span className="text-[10px] text-[#177568] font-semibold">
                    {language === "id" ? "Buka →" : "Open →"}
                  </span>
                </Link>
              ))}

              <div className="my-1 border-t border-[#DCE3E5]" />
              <Link
                href="/#erp"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                {language === "id" ? "ERP & Keahlian Asuransi" : "ERP & Insurance Specialization"}
              </Link>
              <Link
                href="/#pengalaman"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                {t(navLabels.experience)}
              </Link>
              <Link
                href="/#cara-kerja"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                {t(navLabels.process)}
              </Link>
              <Link
                href="/#tentang"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                {t(navLabels.about)}
              </Link>
            </nav>

            <div className="pt-2 border-t border-[#DCE3E5]">
              <Link
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#17324D] hover:bg-[#101C24] text-white text-xs font-bold transition-colors"
              >
                {t(navLabels.cta)}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
