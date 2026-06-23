import { SchoolCareer } from "@/generated/prisma/client";

export const schoolCareer: SchoolCareer[] = [
  {
    id: 1,
    name: "DUT Métiers du Multimédia et de l’Internet",
    school: "IUT lannion",
    place: "Lannion (22)",
    start: new Date("2020-09-01"),
    end: new Date("2022-06-30"),
  },
  {
    id: 2,
    name: "Licence Professionnelle Graphisme Multimédia",
    school: "IUT Haguenau",
    place: "Haguenau (65)",
    start: new Date("2022-09-01"),
    end: new Date("2023-06-30"),
  },
  {
    id: 3,
    name: "MBA Direction Artistique",
    school: "My digital school",
    place: "Rennes (35)",
    start: new Date("2023-09-01"),
    end: new Date("2024-06-30"),
  },
  {
    id: 4,
    name: "Mastère Direction Artistique Plurimédia",
    school: "AGR",
    place: "Rennes (35)",
    start: new Date("2024-09-01"),
    end: new Date("2026-06-30"),
  },
];
