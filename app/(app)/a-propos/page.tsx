import { JSX } from "react";
import { Metadata } from "next";
import AboutContent from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "À propos - Noémie Gentric",
  description:
    "Graphiste freelance en Bretagne, Noémie Gentric allie graphisme, motion design et webdesign pour créer une identité visuelle unique à votre projet.",
  keywords: [
    "Noémie Gentric",
    "graphiste freelance Bretagne",
    "graphiste indépendante",
    "designer graphique Bretagne",
    "créatrice d'identité visuelle",
    "experte en branding",
    "motion designer",
    "webdesigner freelance",
    "communication visuelle",
    "accompagnement graphique",
    "création de marque",
    "identité de marque",
    "designer freelance",
  ],
  authors: [{ name: "Noémie Gentric", url: "https://noemiegentric.fr" }],
  creator: "Noémie Gentric",
};

export default function About(): JSX.Element {
  return <AboutContent />;
}
