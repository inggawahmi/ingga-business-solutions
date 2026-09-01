"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/config/business";
import { Menu, X, ChevronDown, Globe, LayoutGrid, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solusiDropdown, setSolusiDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const solutionLinks = [
    {
      title: "Website & Digital Presence",
      desc: "Company profile, bisnis jasa, dan portal customer",
      href: "/#solusi",
      icon: Globe,
    },
    {
      title: "Sistem Bisnis Custom",
      desc: "Workflow internal, approval & mutasi inventory",
      href: "/solusi/inventory-pos",
      icon: LayoutGrid,
    },
    {
      title: "ERP Insurance & Reinsurance",
      desc: "Placing workflow, multi-currency ledger & audit trail",
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
            aria-label={BUSINESS_CONFIG.brand + " - Beranda"}
          >
            <div className="w-9 h-9 rounded-xl bg-[#17324D] text-white flex items-center justify-center font-extrabold text-sm shadow-xs group-hover:bg-[#177568] transition-colors">
              IBS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[#101C24] group-hover:text-[#177568] transition-colors leading-tight">
                {BUSINESS_CONFIG.brand}
              </span>
              <span className="text-[11px] text-[#667681] font-medium">
                {BUSINESS_CONFIG.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#101C24]"
            aria-label="Navigasi Utama"
          >
            {/* Dropdown Solusi */}
            <div
              className="relative"
              onMouseEnter={() => setSolusiDropdown(true)}
              onMouseLeave={() => setSolusiDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors cursor-pointer"
                aria-expanded={solusiDropdown}
                aria-haspopup="true"
              >
                <span>Solusi</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#667681]" />
              </button>

              {solusiDropdown && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl border border-[#DCE3E5] shadow-lg p-2 flex flex-col gap-1 z-50">
                  {solutionLinks.map((sol) => {
                    const Icon = sol.icon;
                    return (
                      <Link
                        key={sol.href}
                        href={sol.href}
                        onClick={() => setSolusiDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F7F3] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F7F7F3] text-[#17324D] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#177568] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="block text-xs font-bold text-[#101C24] group-hover:text-[#177568]">
                            {sol.title}
                          </strong>
                          <span className="text-[11px] text-[#667681] font-normal leading-tight block">
                            {sol.desc}
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
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors"
            >
              ERP
            </Link>
            <Link
              href="/#pengalaman"
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors"
            >
              Pengalaman
            </Link>
            <Link
              href="/#cara-kerja"
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors"
            >
              Cara Kerja
            </Link>
            <Link
              href="/#tentang"
              className="px-3.5 py-2 rounded-xl hover:bg-white hover:text-[#177568] transition-colors"
            >
              Tentang
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#kontak"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#17324D] hover:bg-[#101C24] text-white text-xs font-bold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
            >
              Diskusikan Kebutuhan
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl bg-white border border-[#DCE3E5] text-[#101C24] focus-visible:ring-2 focus-visible:ring-[#177568]"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu navigasi"}
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
            <nav className="flex flex-col gap-1 text-sm font-semibold text-[#101C24]" aria-label="Navigasi Mobile">
              <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#667681]">
                Solusi Sistem
              </div>
              {solutionLinks.map((sol) => (
                <Link
                  key={sol.href}
                  href={sol.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3] text-xs flex items-center justify-between"
                >
                  <span className="font-bold text-[#101C24]">{sol.title}</span>
                  <span className="text-[10px] text-[#177568] font-semibold">Buka →</span>
                </Link>
              ))}

              <div className="my-1 border-t border-[#DCE3E5]" />
              <Link
                href="/#erp"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                ERP & Insurance Specialization
              </Link>
              <Link
                href="/#pengalaman"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                Pengalaman Proyek Nyata
              </Link>
              <Link
                href="/#cara-kerja"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                Cara Kerja & Engagement
              </Link>
              <Link
                href="/#tentang"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-[#F7F7F3]"
              >
                Tentang Developer
              </Link>
            </nav>

            <div className="pt-2 border-t border-[#DCE3E5]">
              <Link
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#17324D] hover:bg-[#101C24] text-white text-xs font-bold transition-colors"
              >
                Diskusikan Kebutuhan Bisnis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
