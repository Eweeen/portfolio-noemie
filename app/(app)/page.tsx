import { JSX } from "react";
import Underline from "@/components/animations/line-2";
import Link from "next/link";
import HomePresentation from "@/components/home/home-presentation";
import Categories from "@/components/categories/categories";
import { projects } from "@/data/projects";
import { categories } from "@/data/categories";
import Projects from "@/components/projects/projects";

export default function Home(): JSX.Element {
  return (
    <div className="relative">
      <HomePresentation />

      <div className="relative z-20 w-full bg-background p-10 pt-25 md:p-33 space-y-28 md:space-y-45">
        {/* Categories */}
        <Categories categories={categories} className="2xl:px-33" />

        {/* Video */}
        <div className="w-full aspect-video bg-gray-300 rounded-md"></div>

        {/* Projects */}
        <div id="projects" className="flex flex-col gap-10">
          <Projects projects={projects.slice(0, 3)} />

          <Link
            href="/projets"
            className="line-hover relative inline-block ml-auto text-xl font-medium cursor-pointer"
          >
            Découvrir
            <Underline className="line-svg absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 h-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
