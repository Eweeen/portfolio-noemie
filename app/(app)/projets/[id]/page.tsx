import ProjectContent from "@/components/projects/project-content";
import { projects } from "@/data/projects";
import { JSX } from "react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function Project({
  params,
}: ProjectPageProps): Promise<JSX.Element> {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <div>
        <h1>Project not found</h1>
      </div>
    );
  }

  return <ProjectContent project={project} />;
}
