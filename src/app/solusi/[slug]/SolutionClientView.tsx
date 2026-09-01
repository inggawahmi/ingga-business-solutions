"use client";

import React from "react";
import Link from "next/link";
import { SolutionPageDataBilingual } from "@/data/solutions";
import { useLanguage } from "@/lib/languageContext";
import { Accordion } from "@/components/ui/Accordion";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calculator,
  FileSpreadsheet,
  Lock,
  Boxes,
  ClipboardCheck,
  Globe,
  MapPin,
  MessageCircle,
} from "lucide-react";

interface SolutionClientViewProps {
  data: SolutionPageDataBilingual;
}

export default function SolutionClientView({ data }: SolutionClientViewProps) {
  const { language, t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Calculator,
    FileSpreadsheet,
    Lock,
    Boxes,
    ClipboardCheck,
    CheckCircle2,
    Globe,
    MapPin,
    MessageCircle,
  };

  const labels = {
    painPointsHeader: {
      id: "Tanda Bisnis Membutuhkan Solusi Ini",
      en: "Signs Your Business Needs This Solution"
    },
    featuresHeader: {
      id: "Proses yang Dapat Dirapikan",
      en: "Processes That Can Be Structured"
    },
    deliverablesHeader: {
      id: "Hasil yang Akan Dibangun",
      en: "Deliverables You Will Receive"
    },
    workflowHeader: {
      id: "Cara Pengerjaan",
      en: "How We Work Together"
    },
    faqHeader: {
      id: "Pertanyaan yang Sering Diajukan",
      en: "Frequently Asked Questions"
    },
    ctaDiscuss: {
      id: "Diskusikan Kebutuhan Ini",
      en: "Discuss This Requirement"
    },
    backHome: {
      id: "Kembali ke Beranda",
      en: "Back to Home"
    }
  };

  const accordionItems = data.faqs.map((f, idx) => ({
    id: `sol-faq-${idx}`,
    title: t(f.q),
    content: t(f.a),
  }));

  return (
    <div className="pt-28 pb-20 space-y-20 bg-[#F7F7F3] text-[#101C24]">

      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#17324D] border border-[#DCE3E5] text-xs font-bold tracking-wide shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D79445] shrink-0" />
          <span>{t(data.badge)}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101C24] tracking-tight leading-tight max-w-4xl mx-auto">
          {t(data.heroHeadline)}
        </h1>

        <p className="text-base sm:text-lg text-[#667681] leading-relaxed max-w-2xl mx-auto font-normal">
          {t(data.heroSubheadline)}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#kontak"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#17324D] hover:bg-[#101C24] text-white font-bold text-sm transition-colors shadow-xs"
          >
            <span>{t(data.ctaText)}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F7F7F3] text-[#101C24] border border-[#DCE3E5] font-bold text-sm transition-colors shadow-2xs"
          >
            <span>{t(labels.backHome)}</span>
          </Link>
        </div>
      </section>

      {/* 2. PAIN POINTS / TANDA BISNIS MEMBUTUHKAN */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101C24]">
            {t(labels.painPointsHeader)}
          </h2>
          <p className="text-xs sm:text-sm text-[#667681]">
            {t(data.targetAudience)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.painPoints.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#DCE3E5] shadow-2xs space-y-2"
            >
              <div className="flex items-center gap-2 text-rose-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <strong className="text-sm font-bold text-[#101C24]">
                  {t(p.title)}
                </strong>
              </div>
              <p className="text-xs sm:text-sm text-[#667681] leading-relaxed">
                {t(p.desc)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROSES YANG DAPAT DIRAPIKAN */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101C24]">
            {t(labels.featuresHeader)}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.keyFeatures.map((f, idx) => {
            const Icon = iconMap[f.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#DCE3E5] shadow-2xs space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F3] text-[#177568] flex items-center justify-center border border-[#DCE3E5]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#101C24]">
                  {t(f.title)}
                </h3>
                <p className="text-xs sm:text-sm text-[#667681] leading-relaxed">
                  {t(f.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HASIL YANG AKAN DIBANGUN & CARA PENGERJAAN */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Deliverables */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#DCE3E5] shadow-2xs space-y-4">
            <h3 className="text-lg font-bold text-[#101C24]">
              {t(labels.deliverablesHeader)}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#667681]">
              {data.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#177568] shrink-0 mt-0.5" />
                  <span>{t(del)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow Steps */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#DCE3E5] shadow-2xs space-y-4">
            <h3 className="text-lg font-bold text-[#101C24]">
              {t(labels.workflowHeader)}
            </h3>
            <div className="space-y-3">
              {data.workflowSteps.map((ws) => (
                <div key={ws.step} className="flex items-start gap-3 text-xs sm:text-sm">
                  <span className="w-6 h-6 rounded-lg bg-[#17324D] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {ws.step}
                  </span>
                  <div>
                    <strong className="text-[#101C24] block font-bold">
                      {t(ws.title)}
                    </strong>
                    <span className="text-[#667681] text-xs">
                      {t(ws.desc)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. FAQ */}
      {accordionItems.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-[#101C24]">
              {t(labels.faqHeader)}
            </h2>
          </div>
          <Accordion items={accordionItems} />
        </section>
      )}

      {/* 6. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17324D] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {language === "id" ? "Siap Memulai Pembahasan?" : "Ready to Start the Conversation?"}
          </h2>
          <p className="text-xs sm:text-sm text-[#DCE3E5] max-w-xl mx-auto leading-relaxed">
            {language === "id"
              ? "Ceritakan proses atau kendala bisnis Anda. Saya akan mempelajari konteks operasional Anda terlebih dahulu."
              : "Describe your workflow or current operational challenge. We will review your context without hard selling."}
          </p>
          <div className="pt-2">
            <Link
              href="/#kontak"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#177568] hover:bg-[#136055] text-white font-bold text-sm transition-colors shadow-xs"
            >
              <span>{t(labels.ctaDiscuss)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
