import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SOLUTIONS_MAP_BILINGUAL } from "@/data/solutions";
import { SITE_URL } from "@/config/site";
import { BUSINESS_CONFIG } from "@/config/business";
import SolutionClientView from "./SolutionClientView";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS_MAP_BILINGUAL).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUTIONS_MAP_BILINGUAL[slug];

  if (!sol) {
    return {
      title: "Solusi Tidak Ditemukan",
    };
  }

  const pageUrl = `${SITE_URL}/solusi/${slug}`;
  const fullTitle = `${sol.seoTitle.id} | ${BUSINESS_CONFIG.brand}`;

  return {
    title: sol.seoTitle.id,
    description: sol.seoDescription.id,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: fullTitle,
      description: sol.seoDescription.id,
      url: pageUrl,
      siteName: BUSINESS_CONFIG.brand,
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: sol.seoDescription.id,
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const sol = SOLUTIONS_MAP_BILINGUAL[slug];

  if (!sol) {
    notFound();
  }

  return <SolutionClientView data={sol} />;
}
