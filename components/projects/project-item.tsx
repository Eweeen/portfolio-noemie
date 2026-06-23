import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.id}`}
      className="relative block w-full h-full rounded-lg overflow-hidden group cursor-pointer"
    >
      <Image
        src={`/images/${project.name}/${project.preview}`}
        alt={`${project.title} preview`}
        fill
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 flex flex-col justify-end gap-4 py-7 px-8 bg-linear-to-t from-black-blue/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-background text-2xl font-black -tracking-widest">
          {project.title}
        </h3>

        {project.categories.length > 0 && (
          <div className="flex gap-2">
            {project.categories.map((category) => (
              <span
                key={category.id}
                className="bg-white-blue-100 px-3 py-2 rounded-sm lowercase"
                style={{ color: category.color }}
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
