"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/languageContext";
import { MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [inContactSection, setInContactSection] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Hide sticky CTA when #kontak section is in viewport
    const contactEl = document.getElementById("kontak");
    let observer: IntersectionObserver | null = null;
    if (contactEl) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setInContactSection(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(contactEl);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && contactEl) observer.unobserve(contactEl);
    };
  }, []);

  const showButton = visible && !inContactSection;
  const label = language === "id" ? "Diskusikan Kebutuhan" : "Discuss Your Needs";

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-5 right-5 z-30"
        >
          <Link
            href="#kontak"
            data-cta="sticky-consultation"
            aria-label={label}
            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#17324D] hover:bg-[#101C24] text-white font-bold text-xs sm:text-sm shadow-lg border border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568]"
          >
            <MessageSquare className="w-4 h-4 text-[#D79445]" />
            <span>{label}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
