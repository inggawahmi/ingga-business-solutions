import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SOLUTIONS_MAP } from "@/data/solutions";
import { SITE_URL } from "@/config/site";
import { BUSINESS_CONFIG } from "@/config/business";
import { WhatsAppButton } from "@/components/sales/WhatsAppButton";
import { CafeLivePreview } from "@/components/sales/CafeLivePreview";
import { InventoryLivePreview } from "@/components/sales/InventoryLivePreview";
import { InsuranceLivePreview } from "@/components/sales/InsuranceLivePreview";
import { Accordion } from "@/components/ui/Accordion";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Layers,
  Utensils,
  MessageCircle,
  MapPin,
  QrCode,
  Smartphone,
  ShoppingBag,
  Boxes,
  ClipboardCheck,
  AlertTriangle,
  Truck,
  BarChart3,
  FileCheck2,
  Calculator,
  Landmark,
  FileSpreadsheet,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS_MAP).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUTIONS_MAP[slug];

  if (!sol) {
    return {
      title: "Solusi Tidak Ditemukan",
    };
  }

  const pageUrl = `${SITE_URL}/solusi/${slug}`;

  return {
    title: sol.seoTitle,
    description: sol.seoDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: sol.seoTitle,
      description: sol.seoDescription,
      url: pageUrl,
      siteName: BUSINESS_CONFIG.brand,
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: sol.seoTitle,
      description: sol.seoDescription,
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const sol = SOLUTIONS_MAP[slug];

  if (!sol) {
    notFound();
  }

  // Icon map for key features
  const iconLookup: Record<string, React.ElementType> = {
    Utensils,
    MessageCircle,
    MapPin,
    Sparkles,
    QrCode,
    Smartphone,
    ShoppingBag,
    Boxes,
    ClipboardCheck,
    AlertTriangle,
    Truck,
    BarChart3,
    FileCheck2,
    Calculator,
    Landmark,
    FileSpreadsheet,
    ShieldAlert,
  };

  const accordionFaqs = sol.faqs.map((f, i) => ({
    id: `sol-faq-${i}`,
    title: f.q,
    content: f.a,
  }));

  return (
    <div className="pt-24 pb-20 space-y-20">

      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-12 bg-gradient-to-b from-[#FFFBF5] via-[#F8FAFC] to-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold tracking-wide shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{sol.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {sol.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            {sol.heroSubheadline}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              source={sol.ctaSource}
              label={sol.ctaText}
              size="lg"
              variant="primary"
            />
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm shadow-2xs transition-colors"
            >
              <span>Lihat Demo Konsep</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>

          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-500 max-w-xl mx-auto">
            <strong className="text-slate-800">Target Usaha:</strong> {sol.targetAudience}
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Tantangan Bisnis Saat Ini</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kendala yang Sering Menghambat Operasional
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sol.painPoints.map((pp, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2"
            >
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {pp.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 pl-4 leading-relaxed font-normal">
                {pp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. KEY FEATURES SECTION */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              Fitur Lengkap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Fitur yang Dirancang Menyelesaikan Masalah Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sol.keyFeatures.map((kf, idx) => {
              const IconComp = iconLookup[kf.iconName] || Layers;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-3 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {kf.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {kf.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LIVE INTERACTIVE CONCEPT DEMO */}
      <section id="demo" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
            Simulasi Konsep
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Lihat Cara Kerjanya Secara Langsung
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Demo interaktif di bawah ini dibangun dengan kode murni untuk memberikan gambaran alur transaksi.
          </p>
        </div>

        {sol.demoType === "cafe" && <CafeLivePreview />}
        {sol.demoType === "inventory" && <InventoryLivePreview />}
        {sol.demoType === "insurance" && <InsuranceLivePreview />}
      </section>

      {/* 5. DELIVERABLES & WORKFLOW STEPS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Deliverables */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1">
                  Hasil yang Anda Dapatkan
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Deliverables Project
                </h3>
              </div>

              <div className="space-y-3">
                {sol.deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                  Tahapan Pengerjaan
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Alur dari Diskusi hingga Go-Live
                </h3>
              </div>

              <div className="space-y-3">
                {sol.workflowSteps.map((wf) => (
                  <div
                    key={wf.step}
                    className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-4"
                  >
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {wf.step}
                    </span>
                    <div className="space-y-0.5">
                      <strong className="text-xs sm:text-sm font-bold text-white block">
                        {wf.title}
                      </strong>
                      <p className="text-xs text-slate-400 font-normal leading-relaxed">
                        {wf.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DEDICATED SOLUTION FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan Seputar Solusi Ini
          </h2>
        </div>

        <Accordion items={accordionFaqs} />
      </section>

      {/* 7. BOTTOM LEAD GENERATION CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Siap Membangun {sol.title}?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed font-normal">
            Hubungi saya untuk mendiskusikan kebutuhan, estimasi pengerjaan, dan alur integrasi terbaik bagi bisnis Anda.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              source={`${sol.ctaSource}-bottom`}
              label="Diskusikan via WhatsApp Sekarang"
              size="lg"
              variant="amber"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
