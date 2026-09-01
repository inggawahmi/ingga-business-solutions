import { BUSINESS_CONFIG } from "@/config/business";

export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, "");
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

export interface WhatsAppInquiryData {
  name: string;
  businessName: string;
  businessCategory: string;
  service: string;
  problem: string;
  budgetRange?: string;
  source?: string;
}

export function formatInquiryMessage(data: WhatsAppInquiryData): string {
  const lines = [
    `Halo Ingga, saya ${data.name} dari ${data.businessName}.`,
    "",
    "Kategori bisnis:",
    data.businessCategory,
    "",
    "Layanan yang dibutuhkan:",
    data.service,
    "",
    "Kendala saat ini:",
    data.problem,
  ];

  if (data.budgetRange && data.budgetRange.trim().length > 0) {
    lines.push("", "Estimasi budget:", data.budgetRange);
  }

  lines.push("", "Saya ingin mendiskusikan kebutuhan website/sistem lebih lanjut.");

  return lines.join("\n");
}
