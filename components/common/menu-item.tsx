"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import Line from "../animations/line";
import { MenuItem as IMenuItem } from "@/types/app";

interface MenuItemProps {
  item: IMenuItem;
}

export default function MenuItem({
  item,
}: Readonly<MenuItemProps>): JSX.Element {
  return (
    <li className="relative w-26 text-center">
      <Link href={item.href} className="text-black-blue">
        {item.name}

        <Line
          className="line-svg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(100%+20px)]"
          style={{ strokeDashoffset: usePathname() === item.href ? 0 : 200 }}
        />
      </Link>
    </li>
  );
}
