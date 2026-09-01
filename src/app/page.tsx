import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TargetSelectorSection } from "@/components/sections/TargetSelectorSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceProofSection } from "@/components/sections/ExperienceProofSection";
import { CafeDemoSection } from "@/components/sections/CafeDemoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { WhyWorkWithMeSection } from "@/components/sections/WhyWorkWithMeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Target Business Selector Cards */}
      <TargetSelectorSection />

      {/* 3. Common Business Problems & Solutions */}
      <ProblemsSection />

      {/* 4. Full Services Catalog */}
      <ServicesSection />

      {/* 5. Production Experience & Real Systems Proof */}
      <ExperienceProofSection />

      {/* 6. Cafe & UMKM Concept Demo */}
      <CafeDemoSection />

      {/* 7. Clear Process & Steps */}
      <ProcessSection />

      {/* 8. Engagement Options */}
      <EngagementSection />

      {/* 9. Why Work with Developer Directly */}
      <WhyWorkWithMeSection />

      {/* 10. FAQ Accordion */}
      <FaqSection />

      {/* 11. Contact & WhatsApp Lead Qualification Form */}
      <ContactSection />
    </>
  );
}
