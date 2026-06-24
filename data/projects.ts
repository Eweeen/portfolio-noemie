import { Project } from "@/types/projects";
import { categories } from "@/data/categories";

export const projects: Array<Project> = [
  {
    id: 1,
    name: "la-rennes-du-parc",
    title: "La Rennes du parc",
    preview: "preview.png",
    content: {
      title:
        "Création de l’identité visuelle et de 3 motions pour le festival fictif “la rennes du parc”",
      description: `Le festival (fictif) « la Rennes du parc » se tient tous les ans fin juillet à Rennes. Cette année, il se déroule les 26, 27 et 28 juillet 2024.\n
        Il s’agit d’une fête musicale ouverte à toutes et tous. Mais les festivités souhaitent avant tout s’inscrire dans une démarche socialement engagée, responsable et durable.\n
        Les festivités se tiennent dans 3 lieux de Rennes : le parc de Bréquigny, le parc du Thabor et le parc des Gayeulles.`,
      imagePresentation: "mockup-3.png",
      firstPart: {
        images: ["mockup-1.png", "mockup-2.png"],
        caption:
          "Nous avons l’envie de représenter le coté bruyant, coloré et socialement engagé en utilisant des formes graphiques brutes, de la texture papier et des photographies.",
      },
      nextPart: [
        [
          {
            url: "https://www.youtube.com/embed/qUHMiDX7YVg?si=nGyBVgx0-yDpz532",
          },
          {
            url: "https://www.youtube.com/embed/rHGrQ_Psd08?si=XEP4RWVDrRQTJ0r4",
          },
          {
            url: "https://www.youtube.com/embed/z47Vph4k5Fk?si=ZbxdUkyxLTNjE2EO",
          },
        ],
      ],
    },
    draft: false,
    categories: [categories[0], categories[1]],
  },
  {
    id: 2,
    name: "colorize",
    title: "Colorize",
    preview: "preview.png",
    content: {
      title: "Création de l’identité visuelle fictive de colorize",
      description: `Colorize, une entreprise innovante a mis au point un dentifrice avec une formule brevetée, validée par les dentistes.\n
        En plus de combattre efficacement la plaque et renforcer l'émail, ce dentifrice a une nouvelle propriété unique : après un brossage bien réalisé, le dentifrice laisse temporairement (3 minutes) les dents multicolores.`,
      imagePresentation: "mockup-affiche-2.png",
      firstPart: {
        images: ["mur.png", "mockup-affiches.jpg"],
        caption:
          "J’ai eu l’envie de représenter le coté ludique, coloré et innovant de Colorize en utilisant une police manuscrite enfantine, une police linéale moderne et les couleurs de l’arc-en-ciel.",
      },
      nextPart: [
        [
          { path: "mockup-annonce.png", type: "landscape" },
          { path: "tube-pack.png", type: "landscape" },
          { path: "pharmacie.jpg", type: "landscape" },
        ],
        [
          { path: "mockup-affiche-1.png", type: "landscape" },
          { path: "mockup-affiche-4.png", type: "landscape" },
        ],
      ],
    },
    draft: false,
    categories: [categories[0]],
  },
  {
    id: 3,
    name: "hackin-tregor",
    title: "Hack'in Tregor",
    preview: "hit-mockup.png",
    content: {
      title: "Création de l’identité visuelle de l’évènement Hack’in Trégor",
      description: `Hack'In Trégor Day, première édition, est conçu pour vous sensibiliser aux enjeux de la sécurité informatique à travers des activités amusantes, des démonstrations pratiques et des témoignages inspirants.\n
        Que vous soyez étudiant ou salarié d’entreprise ou tout simplement curieux de la cyber, cet événement est fait pour vous initier aux techniques de hacking éthique dans une ambiance conviviale et participative.\n
        Création d’une illustration et Déclinaisons en affiche, posts pour les réseaux sociaux, slides de présentation, t-shirts et PLV.`,
      imagePresentation: "hit-mockup.png",
      firstPart: {
        images: ["hit-logo.png", "t-shirt-hit.png"],
        caption:
          "J’ai eu l’envie de représenter le coté code et rétro gaming en utilisant le pixel, la texture d’un vieille écran de pc et des couleurs fluorescentes.",
      },
      nextPart: [
        [
          { path: "phone-1.png", type: "landscape" },
          { path: "phone-2.png", type: "landscape" },
          { path: "phone-3.png", type: "landscape" },
        ],
        [
          { path: "picture-1.png", type: "landscape" },
          { path: "picture-2.png", type: "portrait" },
          { path: "picture-3.png", type: "portrait" },
        ],
      ],
    },
    draft: false,
    categories: [categories[0]],
  },
  {
    id: 4,
    name: "pita",
    title: "Pita",
    preview: "magasin-mockup.png",
    content: {
      title: "Création de l’identité visuelle et de l’application fictive Pita",
      description: `Un application destinée au partage alimentaire, Grâce à l’application PITA. Reçois chez toi ou va chez un cuisinier en herbe pour partager un repas fait maison et à moindre coût !\n
        Tout en restant dans les tendances actuelles, nous voulons montrer un esprit jeune et rafraichissant.`,
      imagePresentation: "magasin-mockup.png",
      firstPart: {
        images: ["mockup-homepage.jpg", "sac-livraison.png"],
        caption:
          "Nous avons l’envie de représenter le coté accessible et jeune en utilisant des dessins type doodle et des couleurs évoquant la gastronomie.",
      },
      nextPart: [
        [
          { path: "mockup-informations.png", type: "portrait" },
          { path: "mockup-num.png", type: "portrait" },
          { path: "mockup-recherche.png", type: "portrait" },
        ],
        [
          { path: "visuel2.png", type: "landscape" },
          { path: "visuel3.png", type: "landscape" },
          { path: "visuel1.png", type: "landscape" },
        ],
      ],
    },
    draft: false,
    categories: [categories[0], categories[2]],
  },
  {
    id: 5,
    name: "air-up",
    title: "Air Up",
    preview: "subway-billboard-mockup.png",
    content: {
      title: "Création d’un motion design fictive pour Air Up",
      description: `Votre client, AirUp, lance ce nouveau produit et souhaite toucher un <strong>public jeune</strong> avec cette campagne web. Vous devrez l’animer dans une <strong>direction artistique qui lui est propre</strong>.\n
        AirUp lance son <strong>POD Piment de Cayenne</strong>, en <strong>édition limitée</strong>, en lien avec le défis tendance du moment : <strong>Hot Ones</strong>. L’objectif initial étant de goûter des tenders avec différents niveaux de sauces épicées. La victoire revient au participant qui aura goûté plus de sauces que son adversaire.`,
      imagePresentation: "air-up-mockup.jpg",
      firstPart: {
        images: ["mockup-main.png", "subway-billboard-mockup.png"],
        caption:
          "J’ai eu envie de représenter l’aspect <strong>piquant</strong> du piment, le <strong>dynamisme</strong> et la <strong>jeunesse</strong> en utilisant des <strong>formes géométriques</strong> sans courbes et des <strong>couleurs chaudes</strong> et vives.",
      },
      nextPart: [
        [
          {
            url: "https://www.youtube.com/embed/O-466zzouw0?si=QLTmhudUaeqpcHra",
          },
        ],
      ],
    },
    draft: false,
    categories: [categories[0], categories[1]],
  },
  {
    id: 6,
    name: "telegramme",
    title: "Le Télégramme",
    preview: "preview.png",
    content: {
      title:
        "Création d’un motion fictif pour le Télégramme sur les règles du mölkky",
      description: `Vous êtes invité à réaliser une vidéo journalistique et pédagogique pour expliquer les règles du jeu Mölkky pour le journal Le Télégramme.\n
        Le but est de combiner créativité, narration, vulgarisation et respect d’une direction artistique déjà existante.`,
      imagePresentation: "preview.png",
      firstPart: {
        images: ["image-1.png", "image-2.png"],
        caption:
          "J’ai eu envie de représenter l’aspect journal, authentique et écriture en utilisant de la texture papier, des photographies et des tracés crayonnés.",
      },
      nextPart: [
        [
          {
            url: "https://www.youtube.com/embed/NK_llp5I530?si=WvX741w_B-IXAJDM",
          },
        ],
      ],
    },
    draft: false,
    categories: [categories[1]],
  },
];
