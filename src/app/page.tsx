import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DualSolutionsSection } from "@/components/sections/DualSolutionsSection";
import { ErpSpecialistSection } from "@/components/sections/ErpSpecialistSection";
import { SelectedExperienceSection } from "@/components/sections/SelectedExperienceSection";
import { ProcessAndTrustSection } from "@/components/sections/ProcessAndTrustSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Strategic Value Proposition & Dual-View Mockup */}
      <HeroSection />

      {/* 2. Problem Recognition: 6 Business Problem Signals */}
      <ProblemSection />

      {/* 3. Dual Solution Paths: Di Depan Customer & Di Balik Layar */}
      <DualSolutionsSection />

      {/* 4. ERP Specialist Section: Deep Navy Enterprise & Insurance/Reinsurance Highlight */}
      <ErpSpecialistSection />

      {/* 5. Selected Project Experience: 3 Real Production Case Studies */}
      <SelectedExperienceSection />

      {/* 6. Process, Engagement Models & Trust Principles */}
      <ProcessAndTrustSection />

      {/* 7. FAQ Section: 5 Concise Answers */}
      <FaqSection />

      {/* 8. Final CTA & 6-Field Qualification Form */}
      <FinalCtaSection />
    </>
  );
}
