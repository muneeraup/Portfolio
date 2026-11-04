import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = site.ogImageAlt;

export function OgCard() {
  const host = new URL(site.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#c5ff41",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div
            style={{
              marginLeft: 20,
              fontSize: 28,
              color: "#c5ff41",
              fontWeight: 600,
            }}
          >
            {host}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div style={{ marginTop: 18, fontSize: 36, color: "#c5ff41" }}>
            {site.jobTitle}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.72)" }}>
          Laravel, React, Next.js, and WordPress
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
