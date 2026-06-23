import { links } from "@/utils/const";
import Image from "next/image";
import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="relative z-30 bg-background p-6 md:p-20">
      <div className="bg-[url('/images/fond.jpg')] bg-cover bg-center py-16 md:p-24 rounded-lg">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/svg/merci.svg"
            alt="Merci"
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
      </div>
    </footer>
  );
}
