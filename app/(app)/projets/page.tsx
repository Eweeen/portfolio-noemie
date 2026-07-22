import { JSX } from "react";
import { Metadata } from "next";
import ProjectsContent from "@/components/projects/projects-content";

export const metadata: Metadata = {
  title: "Projets - Noémie Gentric",
  description:
    "Découvrez le portfolio de Noémie Gentric, graphiste freelance en Bretagne : identités visuelles, vidéos animées et maquettes web réalisées avec passion.",
  keywords: [
    "Noémie Gentric",
    "portfolio graphiste Bretagne",
    "réalisations graphiste",
    "projets graphisme",
    "portfolio identité visuelle",
    "portfolio motion design",
    "portfolio webdesign",
    "création de logo",
    "branding",
    "design graphique",
    "maquette de site web",
    "animation graphique",
    "références graphiste freelance",
    "exemples identité visuelle",
  ],
  authors: [{ name: "Noémie Gentric", url: "https://noemiegentric.fr" }],
  creator: "Noémie Gentric",
};

export default function Projects(): JSX.Element {
  return <ProjectsContent />;
}
