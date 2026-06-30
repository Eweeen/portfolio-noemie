"use client";

import Image from "next/image";
import { JSX } from "react";
import Underline from "@/components/animations/line-2";
import { motion, useScroll, useTransform } from "motion/react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { DURATION, FROM } from "@/types/animation";

export default function HomePresentation(): JSX.Element {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();

  const curve = useTransform(
    scrollYProgress,
    [0, 0.1],
    isMobile ? [100, 100] : [200, 200],
  );
  const height = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.9] : [0, 0.5],
    [0, 3000],
  );

  const transform = useTransform(
    curve,
    (c) => `M0 1000 L0 ${c} Q500 ${-c} 1000 ${c} L1000 1000 Z`,
  );

  const scrollTo = (): void => {
    const el = document.getElementById("categories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed h-dvh w-full z-10 flex flex-col items-center justify-center bg-[url('/images/fond-hp.webp')] bg-cover bg-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: FROM }}
          transition={{ duration: DURATION }}
          className="h-full flex flex-col items-center justify-center px-8"
        >
          <h1 className="text-[40px] md:text-[56px] font-black -tracking-widest text-center leading-none">
            Ici, on se perd pour
          </h1>
          <Image
            src="/images/mieux-creer.webp"
            alt="Mieux créer"
            loading="eager"
            width={800}
            height={800}
            className="w-full md:w-140 h-auto -mt-7 md:-mt-5"
          />
          <p className="pt-3 md:text-xl text-center">
            (je m’occupe de tout réorganiser)
          </p>

          <button
            className="line-hover absolute text-xl font-medium bottom-19 cursor-pointer"
            onClick={scrollTo}
          >
            Découvrir
            <Underline className="line-svg absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 h-2" />
          </button>
        </motion.div>

        {/* Animation */}
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

      <div className="relative h-dvh w-full"></div>
    </>
  );
}
