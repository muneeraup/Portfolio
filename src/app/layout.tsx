import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AosInit from "@/components/AosInit";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muneer Ahmad | Full Stack Software Engineer",
  description:
    "Engineering modern and scalable software solutions. Transforming ideas into scalable, performant apps for real-world impact.",
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
        <AosInit />
        {children}
      </body>
    </html>
  );
}
