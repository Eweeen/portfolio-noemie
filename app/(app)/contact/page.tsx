import { JSX } from "react";
import { Metadata } from "next";
import ContactContent from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact - Noémie Gentric",
  description:
    "Un projet en tête ? Contactez Noémie Gentric, graphiste freelance en Bretagne, pour discuter de votre identité visuelle, motion design ou webdesign.",
  keywords: [
    "Noémie Gentric",
    "contacter une graphiste freelance",
    "devis graphiste",
    "graphiste Bretagne",
    "graphiste freelance Bretagne",
    "création identité visuelle",
    "création logo",
    "projet branding",
    "motion design freelance",
    "webdesign freelance",
    "demande de devis graphiste",
    "accompagnement communication visuelle",
    "graphiste indépendante Bretagne",
  ],
  authors: [{ name: "Noémie Gentric", url: "https://noemiegentric.fr" }],
  creator: "Noémie Gentric",
};

export default function Contact(): JSX.Element {
  return <ContactContent />;
}
