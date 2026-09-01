import { BUSINESS_CONFIG } from "@/config/business";
import { Language, LocalizedText } from "@/types/language";

export type RequirementType =
  | "website"
  | "custom-system"
  | "inventory"
  | "erp"
  | "insurance-erp"
  | "unsure";

export interface RequirementOption {
  value: RequirementType;
  label: LocalizedText;
}

export const REQUIREMENT_OPTIONS: RequirementOption[] = [
  {
    value: "website",
    label: {
      id: "Website profesional",
      en: "Professional website",
    },
  },
  {
    value: "custom-system",
    label: {
      id: "Sistem bisnis custom",
      en: "Custom business system",
    },
  },
  {
    value: "inventory",
    label: {
      id: "Inventory atau operasional",
      en: "Inventory or operations",
    },
  },
  {
    value: "erp",
    label: {
      id: "ERP",
      en: "ERP",
    },
  },
  {
    value: "insurance-erp",
    label: {
      id: "ERP asuransi atau reasuransi",
      en: "Insurance or reinsurance ERP",
    },
  },
  {
    value: "unsure",
    label: {
      id: "Belum yakin",
      en: "Not sure yet",
    },
  },
];

export interface InquiryFormData {
  name: string;
  companyName?: string;
  contact: string;
  requirementType: RequirementType;
  problemDescription: string;
  currentWorkflow?: string;
}

export function formatInquiryMessage(data: InquiryFormData, lang: Language = "id"): string {
  const opt =
    REQUIREMENT_OPTIONS.find((o) => o.value === data.requirementType) || REQUIREMENT_OPTIONS[0];
  const reqLabel = lang === "en" ? opt.label.en : opt.label.id;

  if (lang === "en") {
    const company = data.companyName && data.companyName.trim().length > 0
      ? data.companyName.trim()
      : "Business/Company";

    const lines = [
      `Hello Ingga, my name is ${data.name.trim()} from ${company}.`,
      "",
      `Contact: ${data.contact.trim()}`,
      `Type of requirement: ${reqLabel}`,
      `Problem or process to improve: ${data.problemDescription.trim()}`,
    ];

    if (data.currentWorkflow && data.currentWorkflow.trim().length > 0) {
      lines.push(`Current process: ${data.currentWorkflow.trim()}`);
    }

    lines.push("", "I would like to discuss this requirement further.");
    return lines.join("\n");
  } else {
    const company = data.companyName && data.companyName.trim().length > 0
      ? data.companyName.trim()
      : "Bisnis/Perusahaan";

    const lines = [
      `Halo Ingga, saya ${data.name.trim()} dari ${company}.`,
      "",
      `Kontak: ${data.contact.trim()}`,
      `Jenis kebutuhan: ${reqLabel}`,
      `Masalah atau proses yang ingin diperbaiki: ${data.problemDescription.trim()}`,
    ];

    if (data.currentWorkflow && data.currentWorkflow.trim().length > 0) {
      lines.push(`Cara kerja saat ini: ${data.currentWorkflow.trim()}`);
    }

    lines.push("", "Saya ingin mendiskusikan kebutuhan ini lebih lanjut.");
    return lines.join("\n");
  }
}

export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, "");
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}
