import type { Category } from "@/generated/prisma/client";
import CategoryItem from "./category-item";
import { JSX } from "react";

interface CategoriesProps {
  categories: Array<Category>;
  className?: string;
}

export default function Categories({
  categories,
  className,
}: Readonly<CategoriesProps>): JSX.Element {
  return (
    <div
      id="categories"
      className={`flex flex-col xl:flex-row justify-between items-center gap-8 ${className || ""}`}
    >
      <div className="flex flex-col items-center md:items-start text-3xl font-black">
        <span>On peut parler de</span>
        <span className="text-white bg-red px-3 py-2 rounded-sm -rotate-2">
          polyvalence
        </span>
      </div>

      <div className="w-full xl:w-fit flex gap-20 overflow-x-auto xl:overflow-clip pb-6 md:pb-0 custom-scrollbar">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
