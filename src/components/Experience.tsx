import {
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import SectionBadge from "./SectionBadge";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Farid and Sons Travel Agency",
    location: "Swabi, Pakistan",
    type: "Contract",
    period: "Jan 2026 -  Current",
    gradient: true,
    bullets: [
      "Developed a comprehensive flight booking platform using Laravel, PHP, MySQL, and modern frontend technologies.",
      "Integrated airline NDC APIs to support flight search, fare verification, passenger management, seat selection, and booking workflows.",
      "Built a B2B agency management system featuring wallet management, credit tracking, transaction ledgers, and agency-specific pricing.",
      "Integrated payment gateway workflows and developed secure booking processes with payment verification and transaction handling.",
      "Implemented backend architecture, REST APIs, role-based access control, database management, and booking activity logs to ensure scalability and maintainability.",
      "Developed booking management features to handle reservations, PNR retrieval, booking status updates, cancellations, and post-booking operations.",
      "Implemented asynchronous processing and queue-based operations for improved backend performance and reliable task execution.",
      "Built responsive dashboards for administrators and travel agencies to manage bookings, transactions, balances, and business operations.",
      "Followed MVC architecture and reusable coding practices to maintain scalable, secure, and maintainable application code.",
    ],
  },
  {
    title: "Frontend Developer (WordPress)",
    company: "PSX Ascend",
    location: "USA",
    type: "Remote",
    period: "Aug 2024 - Current",
    gradient: true,
    bullets: [
      "Building custom interfaces using Elementor, ACF, PHP, JavaScript, and CSS.",
      "Built dynamic layouts using Elementor and Advanced Custom Fields.",
      "Integrating CRM APIs for real-time vehicle inventory and lead management.",
      "Validated UI/UX design feasibility, reducing implementation issues by 15%.",
      "Developing and maintaining new website features based on evolving business requirements.",
      "Providing ongoing website maintenance, troubleshooting, bug fixes, and technical support.",
      "Optimizing website performance, SEO, and user experience.",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Sigma Digital Solution",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    period: "Jun 2023 - July 2024",
    gradient: true,
    bullets: [
      "Applied UI/UX best practices from Figma/XD prototypes, ensuring optimized conversion paths and accessibility compliance by 20%.",
      "Developed custom WordPress themes and websites from Figma designs, delivering pixel-perfect, responsive interfaces using PHP, HTML5, CSS3, Bootstrap 5, JavaScript, and jQuery.",
      "Built custom WordPress plugins, reusable PHP components, and dynamic functionalities to meet specific client requirements while maintaining upgrade-safe architecture.",
      "Designed scalable content management systems using Advanced Custom Fields (ACF), Custom Post Types (CPTs), custom taxonomies, and structured field groups.",
    ],
  },
  {
    title: "Junior PHP Developer",
    company: "Dynamo Web solution",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    period: "May 2022 - Dec 2022",
    gradient: true,
    bullets: [
      "Developed dynamic web applications using PHP, Laravel, CodeIgniter, and MySQL.",
      "Built backend functionality using MVC architecture, reusable components, controllers, models, and database migrations.",
      "Implemented CRUD operations, REST API integrations, form validation, authentication, and session management.",
      "Worked with MySQL databases, writing optimized queries and managing relationships to support application functionality.",
      "Troubleshot bugs, maintained existing applications, and collaborated with senior developers to deliver reliable and maintainable solutions."
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="Career Path" icon={Sparkles} aos="fade-down" />
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Professional Experience<span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              A timeline of my professional journey, highlighting my roles,
              responsibilities, and the impact I&apos;ve delivered across various
              organizations.
            </p>
          </div>
        </div>

        <div className="relative mt-14 space-y-8 overflow-x-clip pl-8 sm:pl-10">
          <div className="absolute bottom-4 left-[7px] top-3 w-px bg-accent/20 sm:left-[9px]" />

          {experiences.map((job, index) => (
            <article
              key={`${job.company}-${job.title}`}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={String(index * 150)}
            >
              <div className="absolute -left-[25px] top-8 flex h-5 w-5 items-center justify-center sm:-left-[31px]">
                <span className="absolute h-5 w-5 rounded-full border border-accent/40" />
                <span className="timeline-dot relative h-2.5 w-2.5 rounded-full bg-accent" />
              </div>

              <div className="rounded-3xl border border-white/8 bg-card p-6 transition duration-500 hover:border-accent/20 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        job.gradient
                          ? "bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
                          : "text-white"
                      }`}
                    >
                      {job.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-accent" />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                      <Calendar className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-white/65"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
