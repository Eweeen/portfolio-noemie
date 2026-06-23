import { MenuItem } from "@/types/app";
import { links } from "@/utils/const";
import Link from "next/link";
import { JSX, useEffect } from "react";

interface MobileMenuProps {
  items: MenuItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileMenu({
  items,
  open,
  setOpen,
}: MobileMenuProps): JSX.Element {
  // Disable scrolling when the menu is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "auto";
    }
  }, [open]);

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col justify-between bg-main pt-36 p-10 lg:hidden transition-transform duration-300"
      style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
    >
      <ul className="flex flex-col justify-center gap-8 text-3xl font-black">
        {items.map((item, i) => (
          <li
            key={item.name}
            className={`relative ${i % 2 === 0 ? "-rotate-2" : "rotate-2"} ${i === 1 ? "translate-y-6" : ""} ${i === 2 ? "translate-y-8" : ""}`}
          >
            <Link
              href={item.href}
              className={`text-black-blue ${item.class} px-3 py-2 rounded-sm text-white`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <ul className="flex flex-col gap-8 mb-8">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center">
          © {new Date().getFullYear()} noémie-gentric
        </p>
      </div>
    </div>
  );
}
