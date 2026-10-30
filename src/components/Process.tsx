import { Code2, Rocket, Settings2 } from "lucide-react";
import SectionBadge from "./SectionBadge";

const steps = [
  {
    title: "Development",
    description:
      "We provide cutting-edge development solutions, including web, mobile.",
    icon: Code2,
  },
  {
    title: "Deployment & Launch",
    description:
      "We ensure a smooth deployment and launch by setting up servers, optimizing performance.",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance and support, including updates, security patches.",
    icon: Settings2,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Development Process"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="How It Works" aos="fade-up" />
          <div className="mt-5" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              My Development Process<span className="text-accent">.</span>
            </h2>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-8 hidden h-px bg-white/10 md:block sm:top-10" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative flex flex-col items-center text-center"
                  data-aos="fade-up"
                  data-aos-delay={String(index * 150)}
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-[#080808] text-accent/70 transition-all duration-500 group-hover:scale-110 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_30px_rgba(197,255,65,0.25)] sm:h-20 sm:w-20">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
