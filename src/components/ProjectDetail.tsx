"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CircleCheck,
  ExternalLink,
  X,
} from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-[#080808] pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="mb-12 inline-flex items-center gap-2 font-medium text-white/50 transition-colors hover:text-white"
          data-aos="fade-right"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mb-16" data-aos="fade-up">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            {project.title}
            <span className="text-accent">.</span>
          </h1>

          <p
            className="mb-10 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {project.description}
          </p>

          <div
            className="flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex max-w-2xl flex-wrap gap-2.5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
                >
                  {item}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <div className="flex shrink-0 items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(197,255,65,0.3)]"
                >
                  <ExternalLink className="h-[18px] w-[18px]" />
                  Live Demo
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mb-20" data-aos="fade-up">
          <h2 className="mb-8 text-2xl font-bold text-white">Key Features</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:border-accent/30"
                data-aos="fade-up"
                data-aos-delay={String((index % 2) * 100)}
              >
                <CircleCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <span className="font-medium leading-relaxed text-white/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20" data-aos="fade-up">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white">
            Gallery
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.gallery.map((src, index) => (
              <button
                type="button"
                key={src}
                className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#050505] text-left"
                data-aos="fade-up"
                data-aos-delay={String((index % 2) * 100)}
                onClick={() => setLightbox(src)}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#050505]/0 transition-colors duration-500 group-hover:bg-[#050505]/40">
                  <span className="translate-y-4 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Expand
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
            aria-label="Close gallery"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt={`${project.title} expanded screenshot`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
