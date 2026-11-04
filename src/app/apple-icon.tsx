import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#c5ff41",
          borderRadius: 40,
          color: "#000000",
          fontSize: 100,
          fontWeight: 700,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
