"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/lib/languageContext";
import { Language } from "@/types/language";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const idBtnRef = useRef<HTMLButtonElement>(null);
  const enBtnRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (lang: Language) => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const nextLang: Language = language === "id" ? "en" : "id";
      setLanguage(nextLang);
      if (nextLang === "id") idBtnRef.current?.focus();
      else enBtnRef.current?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setLanguage("id");
      idBtnRef.current?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setLanguage("en");
      enBtnRef.current?.focus();
    }
  };

  const accessibleLabel = language === "id" ? "Ganti bahasa" : "Change language";

  return (
    <div
      role="radiogroup"
      aria-label={accessibleLabel}
      onKeyDown={handleKeyDown}
      className={
        "inline-flex items-center bg-[#F7F7F3] border border-[#DCE3E5] p-1 rounded-xl shadow-2xs " +
        className
      }
    >
      <button
        ref={idBtnRef}
        type="button"
        role="radio"
        tabIndex={language === "id" ? 0 : -1}
        aria-checked={language === "id"}
        aria-label="Bahasa Indonesia"
        onClick={() => handleSelect("id")}
        className={
          "px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568] " +
          (language === "id"
            ? "bg-[#17324D] text-white shadow-xs"
            : "text-[#667681] hover:text-[#101C24] hover:bg-white")
        }
      >
        ID
      </button>

      <button
        ref={enBtnRef}
        type="button"
        role="radio"
        tabIndex={language === "en" ? 0 : -1}
        aria-checked={language === "en"}
        aria-label="English"
        onClick={() => handleSelect("en")}
        className={
          "px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#177568] " +
          (language === "en"
            ? "bg-[#17324D] text-white shadow-xs"
            : "text-[#667681] hover:text-[#101C24] hover:bg-white")
        }
      >
        EN
      </button>
    </div>
  );
}
