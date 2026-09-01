import { ImageResponse } from "next/og";
import { BUSINESS_CONFIG } from "@/config/business";

export const runtime = "edge";
export const alt = "Ingga Web & Business Systems";
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
          backgroundColor: "#0F172A",
          padding: "64px",
          fontFamily: "sans-serif",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "20px",
            }}
          >
            IW
          </div>
          <span style={{ fontSize: "24px", fontWeight: 700, color: "#94A3B8" }}>
            {BUSINESS_CONFIG.brand}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#38BDF8",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Jasa Website & Sistem Bisnis • Jabodetabek
          </div>
          <div style={{ fontSize: "44px", fontWeight: 800, lineHeight: 1.2 }}>
            Website yang Meyakinkan. <br />
            Sistem Bisnis yang Merapikan Operasional.
          </div>
          <div style={{ fontSize: "20px", color: "#94A3B8", maxWidth: "850px" }}>
            Website Cafe, Menu Digital, POS, Inventory Gudang & Custom ERP Enterprise.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #334155",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#64748B",
          }}
        >
          <span>Oleh {BUSINESS_CONFIG.owner}</span>
          <span style={{ color: "#34D399" }}>WhatsApp: +62 852-1537-4285</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
