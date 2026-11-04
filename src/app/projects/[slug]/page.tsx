import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProjectDetail from "@/components/ProjectDetail";
import { buildSeo, projectSchema, Seo } from "@/components/Seo";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return buildSeo({
      title: "Project Not Found",
      description: "This case study could not be found.",
      canonical: "/projects",
      noIndex: true,
    });
  }

  return buildSeo({
    title: project.title,
    description: project.description,
    canonical: `/projects/${project.slug}`,
    keywords: [project.tag, project.year, ...project.tech],
    image: project.cover,
    imageAlt: `${project.title} project preview`,
    ogType: "article",
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Seo identity={false} nodes={[projectSchema(project)]} />
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
