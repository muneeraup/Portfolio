export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  cover: string;
  description: string;
  tech: string[];
  features: string[];
  gallery: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "farid-and-sons-travel-agency",
    title: "Farid and sons travel agency",
    tag: "Full-Stack",
    year: "2026",
    cover: "/projects/fst-1.png",
    description:
   "Faridsons Travel is a full-stack travel agency platform for flight booking, B2B agent operations, visa requests, and payments. It connects airline NDC APIs with a public booking site and a staff admin portal so guests, B2C customers, and B2B agents can search, book, and pay in one system.",
    tech: [
      "Laravel",
      "PHP",
      "Blade",
      "Bootstrap",
      "AJAX",
      "MYSQL",
      "DomPDF",
      "PhpSpreadsheet",
      "JazzCash",
      "Stripe",
    ],
    features: [
      "Parallel airline search (V1 + V2) merged into one results list with fare brands and shareable SEO flight URLs",
      "Full booking journey from search to passengers, seats & extras, payment, then live airline confirmation",
      "Local + card payments via JazzCash (card & wallet) and optional Stripe — tickets issue only after payment succeeds",
      "B2B agency wallet with balance, credit limit, outstanding tracking, and downloadable PDF statements",
      "Role-based access for Super Admin, B2B agents, and customers — each agent sees only their own bookings and wallet",
      "Multi-currency pricing so customers see fares in their currency while agency books stay accurate in PKR",
      "Visa request desk — guests and agents submit with documents; Super Admin reviews everything in one inbox",
      "Ops-ready tools — e-ticket PDFs, Excel booking exports, and a staff portal for bookings, wallet, and support",
    ],
    gallery: [
      "/projects/fst-1.png",
      "/projects/fst-2.png",
      "/projects/fst-3.png",
      "/projects/fst-4.png",
    ],
    liveUrl: "https://faridandsons.com",
  },
  {
    slug: "farm-house",
    title: "Farm House",
    tag: "Full-Stack",
    year: "2026",
    cover: "/projects/frm-1.png",
    description:
    "Farm House is a full-stack web application designed for streamlined property/farm management. Built using Laravel on the backend and React js for a seamless single-page user experience, the platform features secure user authentication (Laravel Sanctum), dynamic reporting tools, structured catalog setup, and role-based operational dashboards.",
    tech: [
      "React",
      "Laravel",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
    ],
    features: [
      "Centralized dashboard to manage farm applications and setup catalogs",
      "Built-in reporting tools to generate structured operational insights",
      "Role-based access controls, session management, and encrypted authentication.",
      "Fast single-page application built using Laravel and React js",
    ],
    gallery: [
      "/projects/frm-1.png",
      "/projects/frm-2.png",
      "/projects/frm-3.png",
      "/projects/frm-4.png",
    ],
    liveUrl: "https://farm.theaiofficial.com/",
  },
  {
    slug: "keystone-triumph",
    title: "Keystone Triumph",
    tag: "Wordpress",
    year: "2025",
    cover: "/projects/kt-1.png",
    description:
      "Keystone Triumph is a specialized dealership web platform designed for motorcycle enthusiasts. The site features an interactive vehicle catalog with advanced model sorting, online financing & trade-in valuation forms, service scheduling tools, and localized landing pages optimized for regional buyers.",
    tech: [
      "Wordpress",
      "Elementor",
      "PHP",
      "CSS",
      "HTML",
      "JavaScript",
      "jQuery",
      "AJAX",
    ],
    features: [
      "Seamless browsing for new and pre-owned motorcycles, parts, and apparel with detailed specs.",
      "Automated API integration that pulls vehicle stock, images, pricing, and specs directly from the CRM to the website",
      "Real-time search and filter functionality allowing users to browse vehicles by make, model, year, and price range",
      "Uses webhooks/API endpoints to trigger immediate lead confirmation emails and notify the sales team in real time",
      "Captured test-ride and inquiry leads on the site and routed them instantly to the CRM",
      "Maps form fields (customer name, email, phone, target vehicle) directly to the CRM for sales team follow-up.",
    ],
    gallery: [
      "/projects/kt-1.png",
      "/projects/kt-2.png",
      "/projects/kt-3.png",
      "/projects/kt-4.png",
    ],
    liveUrl: "https://keystonetriumph.com/",
  },
  {
    slug: "my-client-wave",
    title: "My Client Wave",
    tag: "Full-Stack",
    year: "2025",
    cover: "/projects/mct-1.png",
    description:
       "My Client Wave is a feature-rich, cloud-based CRM and business management solution built to help companies track leads, manage appointments, and close deals efficiently. The platform features customizable pipeline stages, real-time analytics dashboards, secure role-based access control, and integrated calendar scheduling.",
    tech: [
      "Laravel",
      "PHP",
      "Blade",
      "Bootstrap",
      "MySQL",
      "CSS",
      "HTML",
      "JavaScript",
      "jQuery",
      "GSAP",
      "AJAX",
      "Stripe",
    ],
    features: [
      "Centralized dashboard to track, categorize, and transition deals through customizable workflow stages.",
      "Built-in appointment tools for booking and managing client meetings without scheduling conflicts.",
      "Interactive charts and custom data tracking to give businesses visibility into revenue and conversion metrics.",
      "Integrated Pusher WebSockets with Laravel Echo to power real-time client messaging, live chat, and instant CRM notifications without page reloads."
        ],
    gallery: [
      "/projects/mct-1.png",
      "/projects/mct-2.png",
      "/projects/mct-3.png",
    ],
    liveUrl: "https://myclientwave.com",
  },
  {
    slug: "tailor",
    title: "Tailor",
    tag: "Full-Stack",
    year: "2024",
    cover: "/projects/tal-1.png",
    description:
    "Tailor is a specialized business management application built to digitize and streamline operations for tailoring shops. The platform replaces traditional paper notebooks with digital customer profiles, detailed body measurement logs, multi-stage order tracking (from cutting to fitting and delivery), and scheduling tools to help shops run efficiently.",
    tech: [
      "Laravel",
      "PHP",
      "Blade",
      "Bootstrap",
      "MySQL",
      "CSS",
      "HTML",
      "JavaScript",
    ],
    features: [
      "Store client records with precise custom body measurements (chest, waist, inseam, etc.) for repeat orders.",
      "Track custom garments through multiple production stages from initial consultation and fitting to final delivery.",
      "Manage scheduling and deadlines to ensure garments are ready on time.",
      "Elegant, responsive web interface tailored specifically for boutique shops and master tailors.",
        ],
    gallery: [
      "/projects/tal-1.png",
      "/projects/tal-2.png",
      "/projects/tal-3.png",
      "/projects/tal-4.png",
      "/projects/tal-6.png",
      "/projects/tal-5.png",
    ],
    liveUrl: "https://tailor.theaiofficial.com",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
