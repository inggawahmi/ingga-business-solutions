"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Language, LocalizedText } from "@/types/language";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (localized: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "id",
  setLanguage: () => {},
  t: (loc) => loc.id,
});

const STORAGE_KEY = "ingga-business-language";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("languagechange-custom", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("languagechange-custom", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "id";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

function getServerSnapshot(): Language {
  return "id";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      window.dispatchEvent(new Event("languagechange-custom"));
    } catch {
      // localStorage may be disabled
    }
  };

  const t = (localized: LocalizedText): string => {
    if (!localized) return "";
    return language === "en" ? localized.en : localized.id;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
