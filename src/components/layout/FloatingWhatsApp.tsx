"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const url = buildWhatsAppUrl("Halo Ingga, saya ingin mendiskusikan kebutuhan website/sistem bisnis saya.");

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex items-center"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp"
        data-source="floating-button"
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        aria-label="Buka WhatsApp untuk mendiskusikan kebutuhan bisnis"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full" />
        </div>
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">
          Diskusikan Kebutuhan
        </span>
      </a>
    </aside>
  );
}
