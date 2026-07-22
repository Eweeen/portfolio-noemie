import { ProfessionalCareer } from "@/generated/prisma/client";

export const professionalCareer: ProfessionalCareer[] = [
  {
    id: 1,
    job: "Webdesigner",
    type: "stage d’observation",
    organization: "Orange",
    place: "Lannion (22)",
    start: new Date("2020-06-01"),
    end: new Date("2020-08-31"),
  },
  {
    id: 2,
    job: "Assistante communication",
    type: "alternance",
    organization: "Photonics Bretagne",
    place: "Lannion (22)",
    start: new Date("2021-06-01"),
    end: new Date("2022-08-31"),
  },
  {
    id: 3,
    job: "Graphiste",
    type: "alternance",
    organization: "Technopole Anticipa | French Tech Brest Bretagne Ouest",
    place: "Lannion (22)",
    start: new Date("2022-06-01"),
    end: new Date("2025-08-31"),
  },
  {
    id: 4,
    job: "Graphiste",
    type: "alternance",
    organization: "Smala",
    place: "Nantes (44)",
    start: new Date("2025-06-01"),
    end: new Date("2026-07-31"),
  },
];
