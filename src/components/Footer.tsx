import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./SocialIcons";

const columns = [
  {
    title: "Discover",
    links: [
      { href: "/#home", label: "Home" },
      { href: "/#about", label: "About" },
      { href: "/#services", label: "Services" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { href: "/#process", label: "Process" },
      { href: "/#skills", label: "Skills" },
      { href: "/projects", label: "Projects" },
    ],
  },
  {
    title: "Journey",
    links: [
      { href: "/#experience", label: "Experience" },
      { href: "/#education", label: "Education" },
      { href: "/#contact", label: "Contact" },
    ],
  },
];

const socials = [
  { label: "Visit my GitHub", href: "https://github.com/muneeraup", icon: GitHubIcon },
  {
    label: "Visit my LinkedIn",
    href: "https://www.linkedin.com/in/muneer-ahmad-770792212/",
    icon: LinkedInIcon,
  },
  {
    label: "Visit my WhatsApp",
    href: "https://wa.me/923139027798",
    icon: WhatsAppIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              Muneer Ahmad<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Engineering modern and scalable software solutions. Transforming
              ideas into scalable, performant apps for real-world impact.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-white/85 transition hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Ready to Start?
            </h3>
            <a
              href="/#contact"
              className="mt-4 inline-block text-xl font-bold text-white transition hover:text-accent"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>© 2026 Muneer Ahmad. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
