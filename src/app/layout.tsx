import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AosInit from "@/components/AosInit";
import { buildSeo, Seo } from "@/components/Seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = buildSeo({ root: true });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className="min-h-full bg-black font-sans text-white"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="800"
      >
        <Seo />
        <AosInit />
        {children}
      </body>
    </html>
  );
}
