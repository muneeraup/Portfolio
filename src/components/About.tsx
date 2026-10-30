import Image from "next/image";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import SectionBadge from "./SectionBadge";

const details = [
  { label: "Name", value: "Muneer Ahmad", icon: User },
  { label: "Email", value: "themuneerahmad@gmail.com", icon: Mail },
  { label: "Phone", value: "+92 3139027798", icon: Phone },
  { label: "Location", value: "Islamabad, Pakistan", icon: MapPin },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionBadge
            label="Discover My Journey"
            icon={Sparkles}
            aos="fade-right"
          />
          <div className="mb-8 mt-5" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Me<span className="text-accent">.</span>
            </h2>
          </div>

          <div
            className="mb-10 space-y-5 text-base leading-relaxed text-white/85 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>
              I&apos;m a passionate{" "}
              <span className="highlight-pill">Full-Stack Developer</span> with
              a knack for building innovative,{" "}
              <span className="highlight-pill">user-focused applications</span>{" "}
              that solve real-world problems.
            </p>
            <p>
              From crafting sleek, responsive{" "}
              <span className="highlight-pill">front-end interfaces</span> to
              architecting robust{" "}
              <span className="highlight-pill">back-end systems</span>, I&apos;ve
              built a diverse portfolio of projects, including dynamic
              single-page apps, e-commerce platforms, and productivity tools.
            </p>
            <p>
              I&apos;m also deeply interested in using{" "}
              <span className="highlight-pill">Python</span> for{" "}
              <span className="highlight-pill">Artificial Intelligence</span>,{" "}
              <span className="highlight-pill">Machine Learning</span>, and{" "}
              <span className="highlight-pill">Data Analytics</span>, leveraging
              data-driven insights to build smarter, more impactful solutions.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <a
              href="/cv.pdf"
              download="Muneer_Ahmad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-accent"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        <div
          className="glass-card relative w-full max-w-md overflow-hidden rounded-3xl p-3 sm:p-4 lg:max-w-none"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/muneer-ahmad.png"
              alt="Muneer Ahmad Full Stack Developer"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
            {details.map((item) => (
              <div
                key={item.label}
                className="group/item flex flex-col justify-center rounded-[1.5rem] border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 sm:p-5"
              >
                <div className="mb-2 flex items-center gap-3 text-accent">
                  <item.icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover/item:scale-110" strokeWidth={2.5} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <p className="truncate text-sm font-medium text-white sm:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
