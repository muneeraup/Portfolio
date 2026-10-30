"use client";

import { useState } from "react";
import {
  Database,
  LayoutDashboard,
  ShoppingBag,
  BrainCircuit,
  Server,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting sleek, responsive, and accessible user interfaces using React, Next.js, TypeScript, and Tailwind CSS. Focused on fluid animations and pixel-perfect design.",
    icon: LayoutDashboard,
  },
  {
    title: "Backend Development",
    description:
      "Building robust, scalable server-side architectures and microservices with Laravel and Next.js tailored for high performance.",
    icon: Server,
  },
  {
    title: "API & Database Management",
    description:
      "Designing efficient RESTful APIs and managing complex data schemas utilizing PostgreSQL, and MySQL for secure, scalable data storage.",
    icon: Database,
  },
  {
    title: "WordPress & E-commerce Development",
    description:
      "Building custom WordPress themes, dynamic websites, and headless WordPress solutions using PHP, ACF, and modern frontend technologies. Experienced in developing scalable Shopify and WooCommerce stores with custom functionality, seamless API integrations, and responsive user experiences.",
    icon: ShoppingBag,
  },
  {
    title: "AI Integration & Automation",
    description:
      "Integrating AI APIs, intelligent chatbots, and automated workflows to build smarter, more efficient web applications.",
    icon: BrainCircuit,
  },
];

export default function Services() {
  const [active, setActive] = useState(1);

  return (
    <section
      id="services"
      aria-label="My Services"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              My Services<span className="text-accent">.</span>
            </h2>
          </div>
          <p
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Delivering end-to-end solutions from conceptualization to
            deployment, ensuring performance, scalability, and exceptional user
            experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = active === index;
            const wide =
              index === 3
                ? "lg:col-span-2"
                : index === 4
                  ? "lg:col-span-1"
                  : "";

            return (
              <div
                key={service.title}
                className={wide}
                data-aos="fade-up"
                data-aos-delay={String(index * 100)}
              >
                <article
                  className={`service-card group relative h-full cursor-pointer overflow-hidden rounded-3xl p-7 sm:p-8 ${
                    isActive ? "active" : ""
                  }`}
                  onMouseEnter={() => setActive(index)}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div
                    className={`relative mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                      isActive
                        ? "border-accent/40 bg-accent/10 text-accent shadow-[0_0_16px_rgba(197,255,65,0.25)]"
                        : "border-white/10 text-white/50 group-hover:border-accent/30 group-hover:text-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="relative text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {service.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
