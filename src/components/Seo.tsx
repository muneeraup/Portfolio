import type { Metadata } from "next";
import type { Project } from "@/data/projects";
import { absoluteUrl, site } from "@/lib/site";

export type SeoOptions = {
  /** Short page title. The root template appends " | Muneer Ahmad". */
  title?: string;
  description?: string;
  keywords?: string[];
  /** Path (`/projects`) or absolute URL. */
  canonical?: string;
  image?: string;
  imageAlt?: string;
  ogType?: "website" | "profile" | "article";
  index?: boolean;
  follow?: boolean;
  /** Shorthand for `index: false` while still following links. */
  noIndex?: boolean;
  /** Skip the title template and use `title` exactly. */
  absolute?: boolean;
  /** Root layout only: sets the title template, metadata base, and site defaults. */
  root?: boolean;
};

type SchemaNode = Record<string, unknown>;

type ShareImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

const DESCRIPTION_LIMIT = 155;

function toMetaDescription(value: string) {
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length <= DESCRIPTION_LIMIT) return text;

  const slice = text.slice(0, DESCRIPTION_LIMIT);
  const boundary = slice.lastIndexOf(" ");
  const trimmed = (boundary > 80 ? slice.slice(0, boundary) : slice).replace(
    /[.,;:\s]+$/,
    "",
  );
  return `${trimmed}…`;
}

function keywordsFor(extra?: string[]) {
  const seen = new Set<string>();
  const keywords: string[] = [];

  for (const keyword of [...(extra ?? []), ...site.keywords]) {
    const value = keyword.trim();
    const id = value.toLowerCase();
    if (!value || seen.has(id)) continue;
    seen.add(id);
    keywords.push(value);
  }

  return keywords;
}

function shareImages(image: string | undefined, alt: string): ShareImage[] {
  const portrait: ShareImage = {
    url: site.ogImage,
    alt: site.ogImageAlt,
    width: site.ogImageWidth,
    height: site.ogImageHeight,
  };
  const branded: ShareImage = {
    url: "/opengraph-image",
    alt: site.ogImageAlt,
    width: 1200,
    height: 630,
  };

  if (!image || image === site.ogImage || image === site.portrait) {
    return [portrait, branded];
  }

  return [{ url: image, alt }, portrait, branded];
}

function openGraphFor(
  type: SeoOptions["ogType"],
  socialTitle: string,
  description: string,
  canonical: string | undefined,
  images: ShareImage[],
  keywords: string[],
): Metadata["openGraph"] {
  const shared = {
    locale: site.locale,
    url: canonical,
    siteName: site.name,
    title: socialTitle,
    description,
    images,
  };

  if (type === "profile") {
    return {
      ...shared,
      type: "profile",
      firstName: site.givenName,
      lastName: site.familyName,
    };
  }

  if (type === "article") {
    return {
      ...shared,
      type: "article",
      tags: keywords,
    };
  }

  return { ...shared, type: "website" };
}

/**
 * Builds the Next.js Metadata object for a route.
 * Assign the result to `export const metadata` or return it from `generateMetadata`.
 * Head tags are rendered by the App Router; use `<Seo />` for JSON-LD.
 */
export function buildSeo(options: SeoOptions = {}): Metadata {
  const pageTitle = options.title?.trim() || site.title;
  const description = toMetaDescription(options.description ?? site.description);
  const canonical = options.canonical ?? (options.root ? "/" : undefined);
  const socialTitle =
    options.root || options.absolute ? pageTitle : `${pageTitle} | ${site.name}`;
  const keywords = keywordsFor(options.keywords);
  const index = options.noIndex ? false : (options.index ?? true);
  const follow = options.follow ?? true;
  const images = shareImages(options.image, options.imageAlt ?? socialTitle);

  const title: Metadata["title"] = options.root
    ? { default: site.title, template: `%s | ${site.name}` }
    : options.absolute
      ? { absolute: pageTitle }
      : pageTitle;

  return {
    ...(options.root ? { metadataBase: new URL(site.url) } : {}),
    title,
    description,
    ...(options.root
      ? {
          applicationName: site.name,
          authors: [{ name: site.name, url: site.url }],
          creator: site.name,
          publisher: site.name,
          category: "technology",
        }
      : {}),
    keywords,
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: openGraphFor(
      options.ogType,
      socialTitle,
      description,
      canonical,
      images,
      keywords,
    ),
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images,
    },
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressCountry: site.country,
  };
}

export function personSchema(): SchemaNode {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: site.name,
    givenName: site.givenName,
    familyName: site.familyName,
    jobTitle: site.jobTitle,
    description: site.description,
    url: absoluteUrl("/"),
    image: absoluteUrl(site.portrait),
    email: site.email,
    telephone: site.telephone,
    address: postalAddress(),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.alumniOf,
    },
    sameAs: site.sameAs,
    knowsAbout: [...site.keywords, ...site.services],
  };
}

export function professionalServiceSchema(): SchemaNode {
  return {
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#professional-service"),
    name: site.name,
    url: absoluteUrl("/"),
    image: [absoluteUrl(site.portrait), absoluteUrl(site.ogImage)],
    description: site.description,
    provider: { "@id": absoluteUrl("/#person") },
    areaServed: "Worldwide",
    serviceType: site.services,
    email: site.email,
    telephone: site.telephone,
    address: postalAddress(),
  };
}

export function projectSchema(project: Project): SchemaNode {
  return {
    "@type": "CreativeWork",
    "@id": absoluteUrl(`/projects/${project.slug}#work`),
    name: project.title,
    headline: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.cover),
    dateCreated: project.year,
    keywords: project.tech.join(", "),
    creator: { "@id": absoluteUrl("/#person") },
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };
}

type SeoProps = {
  /** Extra schema nodes for this route. */
  nodes?: SchemaNode[];
  /** Include Person and ProfessionalService. Turn off when the layout already renders them. */
  identity?: boolean;
};

function jsonLd(data: SchemaNode[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": data,
  }).replace(/</g, "\\u003c");
}

/** JSON-LD structured data. Mount once in the root layout, and again on routes that need extra schema. */
export function Seo({ nodes = [], identity = true }: SeoProps) {
  const data = [
    ...(identity ? [personSchema(), professionalServiceSchema()] : []),
    ...nodes,
  ];

  if (data.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
