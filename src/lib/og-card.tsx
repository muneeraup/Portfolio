import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = site.ogImageAlt;

async function loadPortrait() {
  const file = await readFile(
    join(process.cwd(), "public", site.portrait.replace(/^\//, "")),
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

export async function OgCard() {
  const host = new URL(site.url).host;
  const portraitSrc = await loadPortrait();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#080808",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 480,
            height: "100%",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={portraitSrc}
            alt=""
            width={480}
            height={630}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(to right, rgba(8,8,8,0) 55%, rgba(8,8,8,0.88) 100%)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 64px 64px 40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "#c5ff41",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              M
            </div>
            <div
              style={{
                marginLeft: 16,
                fontSize: 24,
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
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: -1.5,
                lineHeight: 1.05,
              }}
            >
              {site.name}
            </div>
            <div style={{ marginTop: 16, fontSize: 30, color: "#c5ff41" }}>
              {site.jobTitle}
            </div>
          </div>

          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.72)" }}>
            Laravel, React, Next.js, and WordPress
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
