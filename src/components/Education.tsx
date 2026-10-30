"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import SectionBadge from "./SectionBadge";

const education = [
  {
    title: "Bsc Computer Science",
    school: "The University of Agriculture, Peshawar",
    period: "Sep 2016 - Dec 2020",
    description:
      "Earned a Bachelor's degree in Computer Science from The University of Agriculture, Peshawar, building a strong foundation in software development, programming, database management, and computer systems. Developed analytical thinking, problem-solving, and technical skills through academic coursework and practical projects, laying the groundwork for a career in full-stack web development and software engineering.",
    highlights: [],
  },
];

export default function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="education"
      aria-label="Education and Certifications"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <SectionBadge
            label="Academic Journey"
            icon={GraduationCap}
            aos="fade-down"
          />
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Education & Certifications<span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              My formal education and continuous learning path, building a strong
              foundation in software engineering, artificial intelligence, and
              business management.
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {education.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/8 bg-card p-6 transition duration-500 hover:border-accent/20 sm:p-8"
              data-aos="fade-up"
              data-aos-delay={String(index * 150)}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.school}</p>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>

              {item.highlights.length > 0 && (
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:underline"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    aria-expanded={openIndex === index}
                  >
                    View Course Highlights
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <ul className="mt-4 space-y-3">
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-white/65"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
