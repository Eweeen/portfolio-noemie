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

      <div className="relative z-20 w-full bg-background p-10 md:p-33 space-y-28 md:space-y-45">
        {/* Categories */}
        <Categories categories={categories} className="pt-25 2xl:px-33" />

        {/* Video */}
        <div className="w-full aspect-video rounded-md overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/rDBDzWOrq88?si=gZzYg5XIlEWQIo-V"
            width="520"
            height="315"
            className="w-full h-full"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-10">
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
