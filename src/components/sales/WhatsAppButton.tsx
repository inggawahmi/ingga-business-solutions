"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  source: string;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "amber" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
}

export function WhatsAppButton({
  message = "Halo Ingga, saya ingin mendiskusikan kebutuhan website/sistem bisnis saya.",
  source,
  label = "Diskusikan via WhatsApp",
  className = "",
  variant = "primary",
  size = "md",
  icon = true,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message);

  const variantClasses = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow-sm focus-visible:ring-blue-600",
    secondary:
      "bg-teal-700 hover:bg-teal-800 text-white shadow-xs hover:shadow-sm focus-visible:ring-teal-700",
    amber:
      "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-xs hover:shadow-sm focus-visible:ring-amber-500",
    outline:
      "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 focus-visible:ring-blue-600",
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold rounded-xl gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
    lg: "px-6 py-3.5 text-base font-bold rounded-2xl gap-2.5",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-source={source}
      className={
        "inline-flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
        variantClasses[variant] +
        " " +
        sizeClasses[size] +
        " " +
        className
      }
    >
      {icon && <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
