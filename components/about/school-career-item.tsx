import { SchoolCareer } from "@/generated/prisma/client";
import { JSX } from "react";

export default function SchoolCareerItem({
  item,
}: {
  item: SchoolCareer;
}): JSX.Element {
  const careerPeriod = (item: SchoolCareer): string => {
    const startYear = item.start.getFullYear();
    const endYear = item.end ? item.end.getFullYear() : "Aujourd'hui";

    return `${startYear} - ${endYear}`;
  };

  return (
    <li className="relative pt-10 pl-10 pb-2 last:pb-10 border-l border-black-blue">
      <div className="absolute top-10 left-0 -translate-x-1/2 size-4.5 bg-black-blue rounded-full" />

      <p className="mb-6">{careerPeriod(item)}</p>

      <h3 className="text-2xl font-black tracking-[-0.08em] mb-2">
        {item.name}
      </h3>

      <p>
        {item.school} - {item.place}
      </p>
    </li>
  );
}
