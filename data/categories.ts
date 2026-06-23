import { Category } from "@/generated/prisma/client";
import GraphismeAnimation from "@/public/animations/graphisme.json";
import MotionAnimation from "@/public/animations/motion.json";
import WebdesignAnimation from "@/public/animations/webdesign.json";

export const categories: Array<Category> = [
  {
    id: 1,
    title: "Graphisme",
    svg: "/svg/graphisme.svg",
    lottie: GraphismeAnimation,
    color: "#ef5e25",
    description:
      "Création d’identité visuelle complète <br /> qui correspond à votre univers.",
    draft: false,
    order: 1,
  },
  {
    id: 2,
    title: "Motion Design",
    svg: "/svg/motion.svg",
    lottie: MotionAnimation,
    color: "#4b05a5",
    description:
      "Création de vidéos animées dans <br /> l’univers de votre projet.",
    draft: false,
    order: 2,
  },
  {
    id: 3,
    title: "Webdesign",
    svg: "/svg/webdesign.svg",
    lottie: WebdesignAnimation,
    color: "#7797e8",
    description:
      "Création de maquettes web pour <br /> refléter au mieux votre univers.",
    draft: false,
    order: 3,
  },
];
