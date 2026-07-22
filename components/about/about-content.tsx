"use client";

import { JSX } from "react";
import { DURATION, FROM } from "@/types/animation";
import { motion } from "motion/react";
import Image from "next/image";
import Categories from "@/components/categories/categories";
import { categories } from "@/data/categories";
import { schoolCareer } from "@/data/school-career";
import { professionalCareer } from "@/data/professional-career";
import SchoolCareerItem from "@/components/about/school-career-item";
import ProfessionalCareerItem from "@/components/about/professional-career-item";

export default function AboutContent(): JSX.Element {
  return (
    <>
      <div className="relative h-[50dvh] bg-[url('/images/fond.webp')] bg-cover bg-bottom overflow-hidden">
        <div className="hidden md:block">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: FROM }}
            transition={{ duration: DURATION }}
            className="absolute bottom-24 -right-8 rotate-6"
          >
            <Image
              src="/images/nuage-1.webp"
              alt="Nuage 1"
              width={465}
              height={98}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: FROM }}
            transition={{ duration: DURATION }}
            className="absolute z-30 bottom-34 -left-20 rotate-y-180"
          >
            <Image
              src="/images/nuage-2.webp"
              alt="Nuage 2"
              width={458}
              height={115}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: FROM }}
            transition={{ duration: DURATION }}
            className="absolute top-50 right-52"
          >
            <Image
              src="/images/nuage-contour-2.webp"
              alt="Nuage contour 2"
              width={355}
              height={95}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: FROM }}
        transition={{ duration: DURATION }}
      >
        <header className="relative z-20 flex flex-col md:flex-row justify-between items-center gap-20 xl:gap-40 -mt-50 mx-10 xl:mx-50 mb-29 md:mb-40">
          <Image
            src="/images/noemie.webp"
            alt="Noémie"
            width={536}
            height={661}
            className="rounded"
          />

          <div className="w-full flex flex-col">
            <h1 className="w-fit text-background bg-red py-2 px-3 rounded text-4xl md:text-5xl font-black tracking-[-0.08em] -rotate-2">
              Noémie Gentric
            </h1>

            <h2 className="text-3xl font-black my-8">
              Disponible pour rendre votre projet unique ;)
            </h2>

            <p className="mb-8">Ce qui anime ma passion pour la création ?</p>

            <ul className="list-disc pl-5 space-y-4">
              <li>
                Apprendre de nouvelles choses tous les jours ;) <br /> Mettre en
                pratique mes connaissances tout en explorant des sujets variés
              </li>
              <li>
                Les multiples possibilités dans la création brander, animer et
                webdesigner... Chaque projet me permet d’explorer plusieurs
                aspects !
              </li>
              <li>
                Voir les sourires des personnes quand leurs projets prennent vie{" "}
                {"<3"}
              </li>
            </ul>
          </div>
        </header>

        {/* Categories */}
        <Categories
          categories={categories}
          className="px-10 lg:px-24 xl:px-32 2xl:px-50 mb-29 md:mb-40"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 px-10 lg:px-24 xl:px-68 mb-20">
          {/* Parcours scolaire */}
          <div>
            <h2 className="text-3xl font-black tracking-[-0.06em]">Parcours</h2>
            <h2 className="w-fit text-3xl font-black tracking-[-0.06em] bg-dark-blue px-4 py-2 -rotate-2 text-background rounded mb-12 md:mb-16">
              scolaire
            </h2>

            <ul>
              {schoolCareer
                .sort((a, b) => +b.start - +a.start)
                .map((item) => (
                  <SchoolCareerItem key={item.id} item={item} />
                ))}
            </ul>
          </div>

          {/* Parcours professionnel */}
          <div>
            <h2 className="text-3xl font-black tracking-[-0.06em]">Parcours</h2>
            <h2 className="w-fit text-3xl font-black tracking-[-0.06em] bg-electric px-4 py-2 -rotate-2 text-background rounded mb-12 md:mb-16">
              professionnel
            </h2>

            <ul>
              {professionalCareer
                .sort((a, b) => +b.start - +a.start)
                .map((item) => (
                  <ProfessionalCareerItem key={item.id} item={item} />
                ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
