import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { JSX } from "react";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const customFont = localFont({
  src: "../public/fonts/Nono-Regular.otf",
});

export const metadata: Metadata = {
  title: "Noémie Gentric",
  description:
    "Noémie Gentric, graphiste freelance en Bretagne. Identité visuelle, motion design et webdesign sur-mesure pour donner vie à votre univers. Découvrez mes créations !",
  keywords: [
    "Noémie Gentric",
    "graphiste freelance Bretagne",
    "graphiste freelance",
    "graphiste Bretagne",
    "identité visuelle",
    "création d'identité visuelle",
    "designer graphique",
    "motion design",
    "webdesign",
    "création de site web",
    "branding",
    "communication visuelle",
    "logo sur mesure",
    "graphiste indépendante",
    "studio graphique Bretagne",
    "design graphique",
  ],
  authors: [{ name: "Noémie Gentric", url: "https://noemiegentric.fr" }],
  creator: "Noémie Gentric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html
      lang="fr"
      className={`${epilogue.className} ${epilogue.variable} ${customFont.className} h-dvh text-dark-blue antialiased`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
