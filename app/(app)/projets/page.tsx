"use client";

import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import ProjectsComponent from "@/components/projects/projects";
import { projects } from "@/data/projects";
import { categories } from "@/data/categories";
import Underline from "@/components/animations/line-2";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { DURATION, FROM } from "@/types/animation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets - Noémie Gentric",
  description:
    "Découvrez le portfolio de Noémie Gentric, graphiste freelance en Bretagne : identités visuelles, vidéos animées et maquettes web réalisées avec passion.",
  keywords: [
    "Noémie Gentric",
    "portfolio graphiste Bretagne",
    "réalisations graphiste",
    "projets graphisme",
    "portfolio identité visuelle",
    "portfolio motion design",
    "portfolio webdesign",
    "création de logo",
    "branding",
    "design graphique",
    "maquette de site web",
    "animation graphique",
    "références graphiste freelance",
    "exemples identité visuelle",
  ],
  authors: [{ name: "Noémie Gentric", url: "https://noemiegentric.fr" }],
  creator: "Noémie Gentric",
};

export default function Projects(): JSX.Element {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

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

  const handleCategoryClick = (categoryId: number | null) => {
    if (categoryId === null) {
      setSelectedCategories([]);
      setFilteredProjects(projects);
      return;
    }

    let updatedSelectedCategories: number[];

    if (selectedCategories.includes(categoryId)) {
      updatedSelectedCategories = selectedCategories.filter(
        (id) => id !== categoryId,
      );
    } else {
      updatedSelectedCategories = [...selectedCategories, categoryId];
    }

    setSelectedCategories(updatedSelectedCategories);

    if (updatedSelectedCategories.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.categories.some((category) =>
          updatedSelectedCategories.includes(category.id),
        ),
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      {/* Animation */}
      <div className="relative h-dvh bg-[url('/images/fond.webp')] bg-cover bg-bottom">
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
      >
        <header className="relative z-20 flex flex-col items-center gap-3 -mt-140">
          <h1 className="text-background bg-red py-2 px-3 rounded text-5xl font-black tracking-[-0.08em] -rotate-2">
            Projets
          </h1>
          <p>(fait avec passion)</p>
        </header>

        <div className="relative z-20 w-full p-10 pt-25 md:p-33">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center pb-20">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-3 py-2 rounded-md font-medium transition-colors duration-300 cursor-pointer ${
                selectedCategories.length === 0
                  ? "bg-black-blue text-white-blue-100"
                  : "bg-white-blue-100 text-black-blue"
              }`}
            >
              Tous mes projets
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-3 py-2 rounded-md font-medium transition-colors duration-300 cursor-pointer`}
                style={{
                  color: selectedCategories.includes(category.id)
                    ? "white"
                    : category.color,
                  backgroundColor: selectedCategories.includes(category.id)
                    ? category.color
                    : "#f5f9ff",
                }}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div id="projects" className="flex flex-col gap-40">
            <ProjectsComponent projects={filteredProjects} />

            <Link
              href="https://www.behance.net/ngng75"
              target="_blank"
              className="line-hover relative inline-block mx-auto text-xl font-medium cursor-pointer"
            >
              Découvrir mon Behance
              <Underline className="line-svg absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 h-2" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
