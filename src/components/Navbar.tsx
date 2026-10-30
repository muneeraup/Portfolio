"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Minus, Plus, X } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  {
    href: "/#projects",
    label: "Portfolio",
    children: [
      { href: "/#skills", label: "Skills" },
      { href: "/projects", label: "Projects" },
      { href: "/#experience", label: "Experience" },
    ],
  },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const { body, documentElement } = document;
    if (open) {
      body.style.overflow = "hidden";
      documentElement.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      documentElement.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
      documentElement.style.overflow = "";
    };
  }, [open]);

  const openMenu = () => setOpen(true);

  const closeMenu = () => {
    setOpen(false);
    setMobilePortfolioOpen(false);
  };

  const sectionId = (href: string) => href.replace(/^\/?#/, "").split("/")[0];

  const isActive = (href: string, children?: { href: string }[]) => {
    if (children) {
      return (
        children.some((c) => active === sectionId(c.href)) ||
        active === "skills" ||
        active === "projects" ||
        active === "experience"
      );
    }
    return active === sectionId(href);
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "border-b border-white/5 bg-black/80 py-0 backdrop-blur-xl"
          : "bg-transparent py-1"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-lg font-bold text-black transition hover:scale-105"
          aria-label="Muneer Ahmad – Back to Home"
        >
          M
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                    isActive(link.href, link.children)
                      ? "text-accent"
                      : "text-white/70 hover:text-white"
                  }`}
                  onMouseEnter={() => setPortfolioOpen(true)}
                  onMouseLeave={() => setPortfolioOpen(false)}
                  onClick={() => setPortfolioOpen((v) => !v)}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div
                  className={`absolute left-1/2 top-full z-50 mt-3 w-40 -translate-x-1/2 rounded-xl border border-white/10 bg-black/95 p-2 shadow-xl transition ${
                    portfolioOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                  onMouseEnter={() => setPortfolioOpen(true)}
                  onMouseLeave={() => setPortfolioOpen(false)}
                >
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wider text-white/70 transition hover:bg-white/5 hover:text-accent"
                      onClick={() => setPortfolioOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-[0.16em] transition ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-accent sm:inline-flex"
          >
            Get Started
          </Link>
          <button
            type="button"
            className={`relative z-[60] flex h-11 w-11 cursor-pointer flex-col items-end justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 md:hidden ${
              open ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-sidebar"
            onClick={openMenu}
          >
            <span className="block h-0.5 w-full bg-white" />
            <span className="block h-0.5 w-3/4 bg-white" />
          </button>
        </div>
      </nav>
    </header>

      {/* Clip wrapper prevents closed drawer from creating horizontal scroll */}
      <div
        className={`fixed inset-0 z-[70] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <aside
          id="mobile-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute inset-y-0 right-0 flex h-full w-[min(100%,24rem)] flex-col border-l border-white/20 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
        <div className="relative z-10 flex h-full flex-col overflow-x-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="mb-8 flex items-center justify-between border-b border-white/20 pb-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-white">
              Menu
            </h2>
            <button
              type="button"
              className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors duration-300 hover:border-accent/40 hover:text-accent focus-visible:outline-none"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X
                className="transition-transform duration-500 group-hover:rotate-90"
                size={28}
                strokeWidth={1.5}
              />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link, index) => {
                const delay = open ? 120 + index * 80 : 0;
                const itemActive = isActive(link.href, link.children);

                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className={`overflow-hidden border-b border-white/10 transition-all duration-500 ease-out ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${delay}ms` }}
                    >
                      <button
                        type="button"
                        className="group flex w-full items-center justify-between py-6 transition-colors duration-300 focus-visible:outline-none"
                        onClick={() => setMobilePortfolioOpen((v) => !v)}
                        aria-expanded={mobilePortfolioOpen}
                      >
                            <span
                              className={`text-3xl font-black uppercase tracking-tighter transition-colors duration-300 sm:text-5xl ${
                                itemActive || mobilePortfolioOpen
                                  ? "text-accent"
                                  : "text-white group-hover:text-accent"
                              }`}
                            >
                              {link.label}
                            </span>
                        {mobilePortfolioOpen ? (
                          <Minus className="h-6 w-6 text-white group-hover:text-accent" />
                        ) : (
                          <Plus className="h-6 w-6 text-white group-hover:text-accent" />
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          mobilePortfolioOpen
                            ? "mb-4 max-h-48 opacity-100"
                            : "mb-0 max-h-0 opacity-0"
                        }`}
                      >
                        <ul
                          className="mt-2 flex flex-col gap-4 border-l-2 border-accent pl-6"
                          role="list"
                        >
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="group flex items-center gap-4 py-2 text-white/50 transition-colors duration-300 hover:text-white"
                                onClick={closeMenu}
                              >
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                <span className="text-lg font-bold uppercase tracking-widest">
                                  {child.label}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`group flex items-center justify-between border-b border-white/10 py-6 transition-all duration-500 ease-out focus-visible:outline-none ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                    onClick={closeMenu}
                  >
                    <span
                      className={`text-3xl font-black uppercase tracking-tighter transition-colors duration-300 sm:text-5xl ${
                        itemActive
                          ? "text-accent"
                          : "text-white group-hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div
            className={`pt-8 transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
          >
            <Link
              href="/#contact"
              className="flex w-full items-center justify-center bg-white py-5 text-lg font-black uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:scale-[1.02] active:scale-95 focus-visible:outline-none"
              onClick={closeMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
        </aside>
      </div>
    </>
  );
}
