"use client";

import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-blue-600 focus:text-white focus:font-semibold focus:rounded-xl focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Langsung ke konten utama
    </a>
  );
}
