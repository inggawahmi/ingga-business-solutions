import { ImageResponse } from "next/og";
import { BUSINESS_CONFIG } from "@/config/business";

export const runtime = "edge";
export const alt = "Ingga Business Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#101C24",
          padding: "64px",
          fontFamily: "sans-serif",
          color: "#FFFFFF",
        }}
      >
        {/* Top Bar: Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              backgroundColor: "#17324D",
              border: "1px solid #177568",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "20px",
            }}
          >
            IBS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", fontWeight: 800, color: "#FFFFFF" }}>
              {BUSINESS_CONFIG.brand}
            </span>
            <span style={{ fontSize: "14px", color: "#D79445", fontWeight: 600 }}>
              Website & Custom Business Systems
            </span>
          </div>
        </div>

        {/* Center: Strategic Headline & Pillars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#177568",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Website • Business Systems • Insurance & Reinsurance ERP
          </div>
          <div style={{ fontSize: "44px", fontWeight: 800, lineHeight: 1.15, color: "#FFFFFF" }}>
            Website Profesional, <br />
            Sistem Bisnis Custom & ERP
          </div>
          <div style={{ fontSize: "22px", color: "#DCE3E5", maxWidth: "880px", lineHeight: 1.4 }}>
            Lebih meyakinkan bagi pelanggan. Lebih rapi di balik layar.
          </div>
        </div>

        {/* Bottom Bar: Direct Developer Notice */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1D2B34",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#8D9B9D",
          }}
        >
          <span>Oleh {BUSINESS_CONFIG.owner} • Sistem & ERP Specialist</span>
          <span style={{ color: "#4ADE80", fontWeight: 600 }}>Direct WhatsApp: +62 852-1537-4285</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
