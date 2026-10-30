"use client";

import { FormEvent, useState } from "react";
import { Info, Mail, PenLine, Phone, Send, User } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "./SocialIcons";

const contactItems = [
  {
    index: "01",
    label: "Email",
    value: "themuneerahmad.80@gmail.com",
    href: "mailto:themuneerahmad.80@gmail.com",
  },
  {
    index: "02",
    label: "Phone",
    value: "+92 3139027798",
    href: "tel:+923139027798",
  },
  {
    index: "03",
    label: "Location",
    value: "Islamabad, Pakistan",
    href: "#",
  },
];

const socials = [
  {
    label: "Visit my GitHub",
    href: "https://github.com/muneeraup",
    icon: GitHubIcon,
  },
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      aria-label="Contact Me"
      className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl"
          data-aos="fade-down"
        >
          Contacts<span className="text-accent">.</span>
        </h2>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h3 className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Have a{" "}
              <span className="text-accent">cool project?</span>
              <br />
              Get in touch!
            </h3>

            <div className="mt-12 space-y-10">
              {contactItems.map((item) => (
                <div key={item.label} className="relative">
                  <span className="pointer-events-none absolute -left-2 -top-6 text-5xl font-bold text-white/[0.04] sm:text-6xl">
                    {item.index}
                  </span>
                  <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="relative mt-2 block text-lg font-semibold text-white transition hover:text-accent sm:text-xl"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-accent hover:text-accent hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/8 bg-card p-6 sm:p-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Field icon={User} name="name" placeholder="Name" required />
            <Field icon={Phone} name="phone" placeholder="Phone" type="tel" />
            <Field
              icon={Mail}
              name="email"
              placeholder="Email Address"
              type="email"
              required
            />
            <Field icon={Info} name="subject" placeholder="Subject" required />
            <Field
              icon={PenLine}
              name="message"
              placeholder="How can we help you? Feel free to get in touch!"
              textarea
              required
            />

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              {submitted ? "Message Sent!" : "Get In Touch"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  name,
  placeholder,
  type = "text",
  textarea = false,
  required = false,
}: {
  icon: typeof User;
  name: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const shared =
    "w-full bg-transparent py-3 pl-10 pr-2 text-sm text-white placeholder:text-white/35 outline-none";

  return (
    <div className="relative mb-5 border-b border-white/10 focus-within:border-accent/50">
      <Icon className="pointer-events-none absolute left-0 top-3.5 h-4 w-4 text-white/35" />
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={3}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={shared}
        />
      )}
    </div>
  );
}
