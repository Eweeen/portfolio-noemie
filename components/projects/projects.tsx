"use client";

import { JSX } from "react";
import { motion } from "motion/react";
import { Project } from "@/types/projects";
import ProjectItem from "./project-item";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps): JSX.Element {
  const isMobile = useIsMobile();

  const delay = (i: number) => {
    if (isMobile) {
      return 0.3;
    } else {
      return (i % 3) * 0.3;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay(i) }}
          viewport={{ once: true, amount: 0.3 }}
          className="h-100 md:h-150"
        >
          <ProjectItem project={project} />
        </motion.div>
      ))}
    </div>
  );
}
