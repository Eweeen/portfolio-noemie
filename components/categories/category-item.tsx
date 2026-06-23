"use client";

import { useState } from "react";
import LottieAnimation from "../animations/lottie-animation";
import Image from "next/image";
import { Category } from "@/generated/prisma/client";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function CategoryItem({ category }: { category: Category }) {
  const isMobile = useIsMobile();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-fit mb-2">
        {hover && !isMobile ? (
          <LottieAnimation
            jsonData={category.lottie as object}
            loop={false}
            className="w-12 h-12"
          />
        ) : (
          <Image
            src={category.svg}
            alt={`${category.title} icon`}
            aria-hidden="true"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        )}
      </div>

      <h3 className="text-xl font-bold" style={{ color: category.color }}>
        {category.title}
      </h3>

      <p
        dangerouslySetInnerHTML={{ __html: category.description }}
        className="whitespace-nowrap"
      />
    </div>
  );
}
