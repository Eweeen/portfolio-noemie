"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { Project } from "@/types/projects";
import { JSX, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { DURATION, FROM } from "@/types/animation";
import Template1 from "./template-1";
import Template2 from "./template-2";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({
  project,
}: ProjectContentProps): JSX.Element {
  // Animation
  const isMobile = useIsMobile();
  const initialCurve = isMobile ? 100 : 200;
  const curve = useMotionValue(initialCurve);
  const height = useMotionValue(0);

  useEffect(() => {
    curve.set(initialCurve);
    animate(height, 3000, { duration: 3 });
  }, [curve, height, initialCurve]);

  const transform = useTransform(
    curve,
    (c) => `M0 1000 L0 ${c} Q500 ${-c} 1000 ${c} L1000 1000 Z`,
  );

  return (
    <>
      {/* Animation */}
      <div className="relative h-dvh bg-[url('/images/fond.jpg')] bg-cover bg-bottom">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.svg
            style={{ height }}
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <motion.path fill="#fafcff" d={transform} />
          </motion.svg>
        </div>
      </div>

      {/* Content */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: FROM }}
        transition={{ duration: DURATION }}
        className="relative z-20"
      >
        <header className="flex justify-center gap-3 -mt-140 mb-28 px-10">
          <h1 className="text-center text-background bg-black-blue py-2 px-3 rounded text-5xl font-black tracking-[-0.08em] -rotate-2">
            {project.title}
          </h1>
        </header>

        <Template1 project={project} />
      </motion.div>
    </>
  );
}
