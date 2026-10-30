import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-center text-3xl font-bold uppercase tracking-[0.12em] text-white sm:text-4xl md:text-5xl"
          data-aos="fade-up"
        >
          My Works
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5"
              data-aos="fade-up"
              data-aos-delay={String(index * 150)}
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 transition duration-500 group-hover:from-black/70" />

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="rounded-xl bg-black/45 px-5 py-2.5 backdrop-blur-md transition duration-500 group-hover:scale-105 group-hover:bg-black/55">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {project.tag}
                </span>
                <span className="text-sm font-medium text-white/90">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="mt-12 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
