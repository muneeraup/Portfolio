import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Muneer Ahmad",
  description:
    "Selected works — full-stack platforms, frontend experiences, and AI-powered applications.",
};

const summaries: Record<string, string> = {
  proqure:
    "An AI-powered procurement analytics platform that evaluates suppliers, analyzes ESG metrics, and delivers real-time sustainability insights.",
  zidallie:
    "Zidallie provides safe and reliable transportation for school students. We redesigned their landing page to create a clean and modern experience that builds immediate trust with parents and school admins.",
  robofarm:
    "An AI-powered platform that analyzes soil data and provides sustainable land management recommendations.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080808] pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16" data-aos="fade-up">
            <Link
              href="/"
              className="mb-10 inline-flex text-sm font-medium text-white/50 transition hover:text-white"
            >
              Home
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Selected Works<span className="text-accent">.</span>
            </h1>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="grid items-center gap-8 border-b border-white/10 pb-16 last:border-0 md:grid-cols-2 md:gap-12"
                data-aos="fade-up"
                data-aos-delay={String(index * 100)}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5"
                  aria-label={`View full case study for ${project.title}`}
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
                      {project.tag}
                    </span>
                    <span className="text-sm text-white/50">{project.year}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
                    {summaries[project.slug] ?? project.description.slice(0, 160)}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:underline"
                  >
                    Read Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
