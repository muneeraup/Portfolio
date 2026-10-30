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
  repoUrl?: string;
  privateRepo?: boolean;
};

export const projects: Project[] = [
  {
    slug: "proqure",
    title: "ProQure",
    tag: "Full-Stack",
    year: "2025",
    cover: "/projects/proqure-1.png",
    description:
      "ProQure is a full-stack procurement intelligence platform designed to help organizations make smarter, more sustainable purchasing decisions. The platform leverages AI-powered analysis to evaluate suppliers across multiple dimensions including ESG performance, risk exposure, carbon emissions, and procurement spend. Through a conversational AI advisor and a rich analytics dashboard, procurement teams can generate supplier evaluations, visualize spend patterns, and monitor sustainability metrics in real time. ProQure transforms fragmented procurement data into actionable insights, enabling organizations to identify high-risk suppliers, benchmark performance against industry standards, and uncover opportunities for cost optimization and environmental impact reduction.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "GSAP",
      "Recharts",
      "React Hook Form",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Hugging Face API",
    ],
    features: [
      "AI-powered supplier evaluation and procurement advisor",
      "Interactive analytics dashboard with real-time procurement metrics",
      "ESG scorecards analyzing environmental, social, and governance performance",
      "Carbon emissions tracking and monthly CO₂ trend visualization",
      "Supplier risk assessment and benchmarking against industry standards",
      "Data visualizations including line charts, radar charts, bar charts, and pie charts",
      "Sortable supplier table with sustainability and risk indicators",
      "Exportable procurement reports in PDF and JSON formats",
    ],
    gallery: [
      "/projects/proqure-1.png",
      "/projects/proqure-2.png",
      "/projects/proqure-3.png",
      "/projects/proqure-4.png",
    ],
    liveUrl: "https://proqure.vercel.app/",
    repoUrl:
      "https://github.com/talesofcarter/mern-final-project-talesofcarter",
  },
  {
    slug: "zidallie",
    title: "Zidallie",
    tag: "Frontend",
    year: "2026",
    cover: "/projects/zidallie-hero.png",
    description:
      "Zidallie is a modern web platform designed to showcase safe and reliable transportation services for primary school students. The platform highlights Zidallie’s commitment to providing secure, comfortable, and timely transport solutions that give both parents and schools peace of mind. The landing page clearly communicates the company’s services, including customized transport solutions, right-sized vehicles, and intelligent transport management tools that simplify school transportation logistics. Built with a modern front-end stack, the website delivers a smooth, responsive, and visually engaging experience across devices.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
    ],
    features: [
      "Responsive landing page optimized for all devices",
      "Smooth page transitions and animations with Framer Motion",
      "Clear service sections explaining school transport solutions",
      "Modern UI focused on clarity, trust, and usability",
      "Component-based architecture using React and TypeScript",
    ],
    gallery: [
      "/projects/zidallie-hero.png",
      "/projects/zidallie-services.png",
      "/projects/zidallie-reviews-a.png",
      "/projects/zidallie-reviews-b.png",
      "/projects/zidallie-careers.png",
      "/projects/zidallie-careers-b.png",
      "/projects/zidallie-modal.png",
    ],
    liveUrl: "https://www.zidallie.co.ke/",
    privateRepo: true,
  },
  {
    slug: "robofarm",
    title: "Robofarm",
    tag: "Full-Stack",
    year: "2025",
    cover: "/projects/robofarm-1.png",
    description:
      "Robofarm is an AI-powered web application designed to help farmers and land managers make smarter decisions about soil health and sustainable agriculture. The platform allows users to input key soil metrics such as Nitrogen, Phosphorus, Potassium, temperature, humidity, pH levels, and rainfall data. Using AI models from the Hugging Face ecosystem, Robofarm analyzes this data and generates actionable recommendations to improve soil health and promote sustainable land management practices. Users can create accounts, track their soil analysis reports, and review past recommendations through a personalized dashboard. Developed during the Land Degradation PLP Hackathon, Robofarm demonstrates how artificial intelligence can support environmental sustainability and smarter agricultural decision-making.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Bcrypt",
      "Hugging Face API",
    ],
    features: [
      "AI-powered soil analysis and sustainable farming recommendations",
      "Secure user authentication with signup and login functionality",
      "Personalized user profile dashboard",
      "Historical report tracking for previous soil analyses",
      "Backend API for storing and retrieving soil reports",
      "Data-driven insights to improve soil health and agricultural productivity",
    ],
    gallery: [
      "/projects/robofarm-1.png",
      "/projects/robofarm-2.png",
      "/projects/robofarm-3.png",
      "/projects/robofarm-4.png",
      "/projects/robofarm-5.png",
    ],
    liveUrl: "https://robofarm.vercel.app/",
    repoUrl: "https://github.com/talesofcarter/robofarm",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
