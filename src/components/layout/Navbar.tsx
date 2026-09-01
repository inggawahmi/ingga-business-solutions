"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/config/business";
import { Menu, X, ChevronDown, Utensils, Boxes, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "../sales/WhatsAppButton";
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

  // Lock body scroll when mobile menu is open & handle Escape key
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
      title: "Cafe & UMKM Kuliner",
      desc: "Menu digital, katalog, dan WhatsApp order",
      href: "/solusi/cafe-umkm",
      icon: Utensils,
    },
    {
      title: "POS & Manajemen Inventory",
      desc: "Kasir, mutasi stok & digital stock opname",
      href: "/solusi/inventory-pos",
      icon: Boxes,
    },
    {
      title: "Asuransi, Reasuransi & ERP",
      desc: "Placing, ledger premi & custom ERP",
      href: "/solusi/insurance-erp",
      icon: ShieldCheck,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 px-4 sm:px-6 transition-all duration-200">
      <div
        className={
          "max-w-7xl mx-auto rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md transition-all duration-200 " +
          (scrolled ? "py-2.5 px-4 sm:px-6 shadow-sm" : "py-3 px-5 sm:px-7 shadow-2xs")
        }
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl"
            aria-label={BUSINESS_CONFIG.brand + " - Beranda"}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center font-extrabold text-sm shadow-2xs group-hover:scale-105 transition-transform">
              IW
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                {BUSINESS_CONFIG.brand}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Website & Custom Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-200/80 text-xs font-semibold text-slate-700" aria-label="Navigasi Utama">
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Beranda
            </Link>

            {/* Solusi Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setSolusiDropdown(true)}
              onMouseLeave={() => setSolusiDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
                aria-expanded={solusiDropdown}
                aria-haspopup="true"
              >
                <span>Solusi Bisnis</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {solusiDropdown && (
                <div className="absolute top-full left-0 mt-1.5 w-72 bg-white rounded-2xl border border-slate-200 shadow-lg p-2 flex flex-col gap-1 z-50">
                  {solutionLinks.map((sol) => {
                    const Icon = sol.icon;
                    return (
                      <Link
                        key={sol.href}
                        href={sol.href}
                        onClick={() => setSolusiDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="block text-xs font-bold text-slate-900 group-hover:text-blue-700">
                            {sol.title}
                          </strong>
                          <span className="text-[11px] text-slate-500 font-normal leading-tight block">
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
              href="/#services"
              className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Layanan
            </Link>
            <Link
              href="/#experience"
              className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Pengalaman
            </Link>
            <Link
              href="/#process"
              className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Cara Kerja
            </Link>
            <Link
              href="/#faq"
              className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="px-3.5 py-1.5 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Hubungi Saya
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <WhatsAppButton
              source="navbar-desktop"
              label="Diskusikan Kebutuhan"
              size="sm"
              variant="primary"
            />
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 focus-visible:ring-2 focus-visible:ring-blue-600"
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
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-xl p-5 space-y-4 overflow-hidden"
          >
            <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-800" aria-label="Navigasi Mobile">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-slate-50"
              >
                Beranda
              </Link>

              <div className="px-4 py-1.5 text-xs font-bold uppercase text-slate-400">
                Solusi Berdasarkan Kategori
              </div>
              {solutionLinks.map((sol) => (
                <Link
                  key={sol.href}
                  href={sol.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 rounded-xl hover:bg-blue-50 text-blue-950 font-medium text-xs flex items-center justify-between"
                >
                  <span>{sol.title}</span>
                  <span className="text-[10px] text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">Buka</span>
                </Link>
              ))}

              <div className="my-1 border-t border-slate-100" />
              <Link
                href="/#services"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-slate-50"
              >
                Layanan yang Tersedia
              </Link>
              <Link
                href="/#experience"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-slate-50"
              >
                Pengalaman Sistem Nyata
              </Link>
              <Link
                href="/#process"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-slate-50"
              >
                Cara Kerja
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-slate-50"
              >
                Tanya Jawab (FAQ)
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-slate-50"
              >
                Hubungi Saya
              </Link>
            </nav>

            <div className="pt-2 border-t border-slate-100">
              <WhatsAppButton
                source="navbar-mobile"
                label="Diskusikan via WhatsApp"
                size="md"
                variant="primary"
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
