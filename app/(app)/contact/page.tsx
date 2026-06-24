"use client";

import { JSX, useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { DURATION, FROM } from "@/types/animation";
import Underline from "@/components/animations/line-2";
import Link from "next/link";
import Form from "next/form";
import { contactAction } from "@/app/actions/contact";

export default function Contact(): JSX.Element {
  // Form
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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

  const resetForm = () => {
    setName("");
    setSubject("");
    setMessage("");
  };

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
      >
        <header className="relative z-20 flex flex-col items-center gap-3 -mt-140">
          <h1 className="text-background bg-red py-2 px-3 rounded text-5xl font-black tracking-[-0.08em] -rotate-2">
            Discutons
          </h1>
          <p>(promis je lirai tout {"<3"})</p>
        </header>

        <div className="relative z-20 w-full p-10 pt-25 md:p-33">
          {/* Form */}
          <Form
            action={contactAction}
            onSubmit={resetForm}
            className="relative max-w-xl flex flex-col gap-10 mx-auto mb-20"
          >
            <div className="flex flex-col gap-6">
              <label
                htmlFor="name"
                className="text-2xl text-red font-black tracking-[-0.08em]"
              >
                Prénom et Nom
              </label>
              {/* border noir bleu quand le contenu est rempli */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Prénom Nom"
                className={`border-b focus:border-black-blue ${name ? "border-black-blue" : "border-[#CBCBCB]"} placeholder:text-[#CBCBCB] outline-none pb-1`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-6">
              <label
                htmlFor="subject"
                className="text-2xl text-red font-black tracking-[-0.08em]"
              >
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet"
                className={`border-b focus:border-black-blue ${subject ? "border-black-blue" : "border-[#CBCBCB]"} placeholder:text-[#CBCBCB] outline-none pb-1`}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-6">
              <label
                htmlFor="message"
                className="text-2xl text-red font-black tracking-[-0.08em]"
              >
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                className={`border-b focus:border-black-blue ${message ? "border-black-blue" : "border-[#CBCBCB]"} placeholder:text-[#CBCBCB] outline-none pb-1`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="line-hover relative w-fit mx-auto text-xl font-medium cursor-pointer"
            >
              Envoyer
              <Underline className="line-svg absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 h-2" />
            </button>
          </Form>

          {/* Info */}
          <div className="max-w-xl flex flex-col mx-auto">
            <h2 className="w-fit text-background bg-dark-blue py-2 px-3 rounded text-3xl font-black tracking-[-0.06em] -rotate-2 mb-4">
              Mon email :)
            </h2>
            <Link
              href="mailto:noemie.gentric@gmail.com"
              target="_blank"
              className="hover:text-red"
            >
              noemie.gentric@gmail.com
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
