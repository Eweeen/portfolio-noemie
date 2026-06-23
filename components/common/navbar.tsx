"use client";

import { JSX, useEffect, useState } from "react";
import LottieAnimation from "../animations/lottie-animation";
import loadingAnimation from "@/public/animations/logo-anim.json";
import Link from "next/link";
import { MenuItem as IMenuItem } from "@/types/app";
import MenuItem from "./menu-item";
import MobileMenu from "./mobile-menu";

const items: Array<IMenuItem> = [
  { name: "Projets", href: "/projets", class: "bg-red" },
  { name: "À propos", href: "/a-propos", class: "bg-dark-blue" },
  { name: "Contact", href: "/contact", class: "bg-electric" },
];

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "auto";
    }
  }, [open]);

  return (
    <>
      <nav className="w-full fixed z-50 flex items-center justify-between py-7 px-10 lg:pt-10 lg:px-[10%]">
        <Link href="/">
          <LottieAnimation
            jsonData={loadingAnimation}
            loop={false}
            className="w-12.5 h-6.5"
          />
        </Link>

        <ul className="hidden lg:flex gap-10">
          {items.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </ul>

        <div
          className="lg:hidden block relative h-4 w-10"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`
            absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-black-red rounded-full transistion-colors duration-300
            before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-0.5 before:bg-black-red before:rounded-full before:transition-transform before:duration-300
            after:absolute after:top-2.5 after:left-0 after:w-full after:h-0.5 after:bg-black-red after:rounded-full after:transition-transform after:duration-300
            ${open ? "bg-transparent before:translate-y-2.5 before:-rotate-35 after:-translate-y-2.5 after:rotate-35" : ""}
          `}
          ></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu items={items} open={open} setOpen={setOpen} />
    </>
  );
}
