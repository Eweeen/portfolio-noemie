import ProjectContent from "@/components/projects/project-content";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return {
      title: "Projet non trouvé - Noémie Gentric",
      description:
        "Le projet que vous recherchez n'a pas été trouvé. Veuillez vérifier l'URL ou revenir à la page d'accueil.",
    };
  }

  return {
    title: `${project.title} - Noémie Gentric`,
    description: project.metadata?.description,
  };
}

export default async function Project({
  params,
}: ProjectPageProps): Promise<JSX.Element> {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
