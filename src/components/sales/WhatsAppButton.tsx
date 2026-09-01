"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  source: string;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "terracotta" | "amber" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
}

export function WhatsAppButton({
  message = "Halo Ingga, saya ingin mendiskusikan kebutuhan website/sistem bisnis saya.",
  source,
  label = "Konsultasi via WhatsApp",
  className = "",
  variant = "primary",
  size = "md",
  icon = true,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message);

  const variantClasses = {
    primary:
      "bg-[#1F5A44] hover:bg-[#174535] text-white shadow-sm hover:shadow-md focus-visible:ring-[#1F5A44]",
    secondary:
      "bg-[#D97745] hover:bg-[#C26535] text-white shadow-sm hover:shadow-md focus-visible:ring-[#D97745]",
    terracotta:
      "bg-[#D97745] hover:bg-[#C26535] text-white shadow-sm hover:shadow-md focus-visible:ring-[#D97745]",
    amber:
      "bg-[#D97745] hover:bg-[#C26535] text-white shadow-sm hover:shadow-md focus-visible:ring-[#D97745]",
    outline:
      "bg-white hover:bg-[#FFF8ED] text-[#17211B] border border-[#E8E1D6] hover:border-[#D97745] focus-visible:ring-[#1F5A44]",
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
        "inline-flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
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
