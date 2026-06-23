/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Project } from "@/types/projects";
import Image from "next/image";
import { JSX } from "react";

interface Template1Props {
  project: Project;
}

export default function Template1({ project }: Template1Props): JSX.Element {
  return (
    <section className="flex flex-col gap-20 lg:gap-28">
      <article className="flex flex-col lg:flex-row items-center px-10 lg:px-32 gap-20 lg:gap-6">
        <div className="relative w-full lg:w-2/5 h-65 md:h-125">
          <Image
            src={`/images/${project.name}/${project.content.imagePresentation}`}
            alt={`Image de présentation du projet ${project.title}`}
            className="rounded object-cover w-full h-full"
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="w-full lg:w-3/5 lg:pl-29">
          <div className="flex justify-center md:justify-start gap-2 mb-8">
            {project.categories.map((c) => (
              <div
                key={c.id}
                className="text-white-blue-100 rounded px-3 py-2"
                style={{ backgroundColor: c.color }}
              >
                {c.title}
              </div>
            ))}
          </div>

          <h2 className="text-center md:text-start text-3xl font-black tracking-[-0.06em]">
            {project.content.title}
          </h2>
          <br />

          <p
            className="text-center md:text-start"
            dangerouslySetInnerHTML={{
              __html: project.content.description.replaceAll("\n", "<br />"),
            }}
          />
        </div>
      </article>

      <article className="flex flex-col lg:flex-row items-center px-10 lg:px-32 gap-20 lg:gap-6">
        {project.content.firstPart.images.map((item: string, i: number) => (
          <div
            key={i}
            className={`w-full lg:h-150 ${i === 0 ? "flex flex-col gap-8 lg:w-2/5" : "lg:w-3/5"}`}
          >
            <div className="relative rounded object-cover w-full h-65 md:h-125 lg:h-full overflow-hidden">
              <Image
                src={`/images/${project.name}/${item}`}
                alt={item}
                className="object-cover w-full h-full"
                loading="eager"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {i === 0 && (
              <p
                className="text-center md:text-start"
                dangerouslySetInnerHTML={{
                  __html: project.content.firstPart.caption,
                }}
              />
            )}
          </div>
        ))}
      </article>

      {project.content.nextPart.map((items: any, i: number) => (
        <article
          key={i}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 px-10 lg:px-32"
        >
          {items.map((item: any, j: number) => (
            <div
              key={j}
              className={`relative flex justify-center items-center overflow-hidden rounded ${
                items.length === 1
                  ? "col-span-6"
                  : items.length === 2
                    ? "col-span-3"
                    : "col-span-1 lg:col-span-2"
              } ${
                "url" in item && items.length < 3
                  ? "aspect-square md:aspect-video"
                  : "aspect-square"
              }`}
            >
              {item && "path" in item && (
                <Image
                  src={`/images/${project.name}/${item.path}`}
                  alt={item.path}
                  loading="eager"
                  className={`object-cover ${item.type === "landscape" ? "h-full w-auto" : "w-full h-auto"}`}
                  width={800}
                  height={800}
                />
              )}

              {item && "url" in item && (
                <iframe
                  src={item.url}
                  width="520"
                  height="520"
                  className="w-full h-full"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </article>
      ))}
    </section>
  );
}
