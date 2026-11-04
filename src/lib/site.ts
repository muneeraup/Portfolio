const DEFAULT_SITE_URL = "https://muneer-ahmad.vercel.app";

function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (configured || DEFAULT_SITE_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Muneer Ahmad",
  givenName: "Muneer",
  familyName: "Ahmad",
  title: "Muneer Ahmad | Full Stack Software Engineer",
  jobTitle: "Full Stack Software Engineer",
  description:
    "Engineering modern and scalable software solutions. Transforming ideas into scalable, performant apps for real-world impact.",
  url: resolveSiteUrl(),
  locale: "en_US",
  email: "themuneerahmad.80@gmail.com",
  telephone: "+923139027798",
  locality: "Islamabad",
  country: "PK",
  alumniOf: "The University of Agriculture, Peshawar",
  portrait: "/muneer-ahmad.png",
  ogImage: "/opengraph-image",
  ogImageAlt: "Muneer Ahmad — Full Stack Software Engineer",
  sameAs: [
    "https://github.com/muneeraup",
    "https://www.linkedin.com/in/muneer-ahmad-770792212/",
  ],
  keywords: [
    "Muneer Ahmad",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "PHP Developer",
    "Islamabad",
  ],
  services: [
    "Frontend Development",
    "Backend Development",
    "API & Database Management",
    "WordPress & E-commerce Development",
    "AI Integration & Automation",
  ],
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  if (path === "/" || path === "") return site.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
}
