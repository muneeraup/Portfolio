"use client";

import { useEffect, useState } from "react";
import { ArrowRight, FolderKanban } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

const rotatingWords = ["Scalable", "Modern"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 hero-rings" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,255,65,0.08)_0%,transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-1 text-center">
        <div className="mb-8 cursor-default sm:mb-10" data-aos="fade-up">
          <p className="text-[15px] font-medium leading-relaxed text-white/70 sm:text-base md:text-lg">
            <TypingAnimation startOnView={false}>
              I am Muneer Ahmad. A Full Stack Software Engineer.
            </TypingAnimation>
          </p>
        </div>

        <h1
          className="mb-6 text-[2.5rem] leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <span className="inline-flex flex-wrap items-center justify-center">
            Engineering&nbsp;
            <span className="inline-grid text-left">
              <span className="invisible col-start-1 row-start-1 pointer-events-none whitespace-nowrap">
                Scalable
              </span>
              <span
                className="col-start-1 row-start-1 inline-block whitespace-nowrap transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                }}
              >
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </span>
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-emerald-600">
            Software Solutions
          </span>
        </h1>

        <p
          className="mb-10 max-w-2xl px-2 text-[15px] leading-relaxed font-medium text-white/60 sm:mb-12 sm:text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Transforming ideas into scalable, performant apps for real-world
          impact.
        </p>

        <div
          className="flex w-full flex-col items-center justify-center gap-3.5 px-4 sm:w-auto sm:flex-row sm:gap-6 sm:px-0"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(197,255,65,0.35)]"
          >
            Collaborate with Me
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <FolderKanban className="h-4 w-4" />
            My Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
