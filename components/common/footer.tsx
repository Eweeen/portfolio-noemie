import { links } from "@/utils/const";
import Image from "next/image";
import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="relative z-30 bg-background p-6 md:p-20">
      <div className="relative bg-[url('/images/fond.webp')] bg-cover bg-center pb-18 pt-34 md:px-24 md:py-34 rounded-lg overflow-hidden">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/svg/merci.svg"
            alt="Merci"
            loading="eager"
            width={200}
            height={100}
            className="w-40 md:w-48 h-auto"
          />
          <p className="text-4xl md:text-5xl -mt-4 font-black tracking-[-0.08em] whitespace-nowrap">
            d’avoir regardé
          </p>
        </div>

        <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-9 mb-20 text-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                className="text-black-blue hover:text-red"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center">
          © {new Date().getFullYear()} noémie-gentric
        </p>

        {/* Nuages Desktop */}
        <div className="hidden lg:block">
          <Image
            src="/images/nuage-1.webp"
            alt="Nuages Desktop"
            width={607}
            height={128}
            className="absolute -bottom-14 -left-40 rotate-y-180"
          />
          <Image
            src="/images/nuage-2.webp"
            alt="Nuages Desktop"
            width={617}
            height={155}
            className="absolute -bottom-10 -right-20 rotate-y-180"
          />
          <Image
            src="/images/nuage-contour-1.webp"
            alt="Nuages Desktop"
            width={376}
            height={146}
            className="absolute bottom-10 right-35 rotate-y-180"
          />
          <Image
            src="/images/nuage-contour-2.webp"
            alt="Nuages Desktop"
            width={402.5}
            height={108}
            className="absolute bottom-15 left-24 rotate-y-180"
          />
          <Image
            src="/images/petit-nuage.webp"
            alt="Nuages Desktop"
            width={222}
            height={59}
            className="absolute top-46 left-12.5"
          />
        </div>

        {/* Nuages Mobile */}
        <div className="lg:hidden">
          <Image
            src="/images/nuage-1.webp"
            alt="Nuages Desktop"
            width={383}
            height={81}
            className="absolute -bottom-8 -left-1/3 rotate-y-180"
          />
          <Image
            src="/images/nuage-2.webp"
            alt="Nuages Desktop"
            width={346.5}
            height={87}
            className="absolute -bottom-8 -right-1/3 rotate-y-180"
          />
          <Image
            src="/images/nuage-contour-1.webp"
            alt="Nuages Desktop"
            width={211}
            height={82}
            className="absolute top-22 -right-6 rotate-y-180"
          />
          <Image
            src="/images/nuage-contour-2.webp"
            alt="Nuages Desktop"
            width={254}
            height={68}
            className="absolute top-6 -left-12 rotate-y-180"
          />
        </div>
      </div>
    </footer>
  );
}
