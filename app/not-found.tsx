"use client";

import Navbar from "@/components/common/navbar";
import Link from "next/link";
import Underline from "@/components/animations/line-2";
import { motion } from "motion/react";
import { DURATION, FROM } from "@/types/animation";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col bg-background font-[epilogue] text-black-blue">
      <Navbar />

      <div className="flex-1 flex mt-24 md:mt-30 mx-6 md:mx-20 mb-6 md:mb-20 bg-[url('/images/fond-404.png')] bg-cover bg-center rounded-lg">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: FROM }}
          transition={{ duration: DURATION }}
          className="flex-1 flex flex-col justify-center items-center px-7"
        >
          <h1 className="text-background bg-red py-2 px-3 rounded text-center text-3xl font-black tracking-[-0.08em] -rotate-2 mb-6">
            Ne t’inquiète pas, ça m’arrive aussi de me perdre :)
          </h1>
          <p className="mb-20">(Il y a d’autres pages sympas pas loin)</p>

          <Link
            href="/"
            className="line-hover relative text-xl font-medium cursor-pointer"
          >
            Découvrir mon univers
            <Underline className="line-svg absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 h-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
