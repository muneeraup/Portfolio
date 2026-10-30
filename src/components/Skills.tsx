import Image from "next/image";
import SectionBadge from "./SectionBadge";

const skills = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/next.svg" },
  { name: "Vue.js", icon: "/icons/vue.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "Shopify", icon: "/icons/shopify.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="Skills & Technologies" aos="fade-down" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-chip group relative flex items-center gap-3 rounded-2xl px-4 py-3.5 transition"
              data-aos="fade-up"
              data-aos-delay={String((index % 5) * 100)}
            >
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={28}
                height={28}
                className="h-7 w-7 object-contain transition duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-medium text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <p
          className="mt-12 text-center text-lg font-semibold text-white/80 sm:text-xl"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          You&apos;ve Got A Challenge?{" "}
          <a
            href="#contact"
            className="font-semibold text-accent transition hover:underline"
          >
            Let&apos;s Talk!
          </a>
        </p>
      </div>
    </section>
  );
}
