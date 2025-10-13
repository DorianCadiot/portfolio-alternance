export const navLinks = [
  {
    id: 1,
    name: "À propos",
    href: "#home",
  },
  {
    id: 3,
    name: "Compétences",
    href: "#skills",
  },
  {
    id: 4,
    name: "Projets",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Développement d'un platformer 2D via Unity",
    desc: "Projet personnel en duo avec un autre étudiant informatique, découverte de Unity via une super série tuto, sur Youtube.",
    subdesc:
      "Cela m'a permis d'apprendre également les bases du C#, ainsi que le fonctionnement d'un moteur de jeu.",
    href: "https://doriancadiot.github.io/Jeu-Unity/",
    logo: "projects/Capture_jeu_Untiy.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      {
        id: 1,
        name: "C#",
        path: "icons/c-sharp.svg",
      },
      {
        id: 2,
        name: "Unity",
        path: "icons/unity.svg",
      },
      {
        id: 3,
        name: "WebGL",
        path: "icons/webgl-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "VScode",
        path: "icons/visual-studio-code-1.svg",
      },
    ],
  },
  {
    title: "Projet universitaire autour de la programmation orientée objet",
    desc: "Développement de A à Z d'un prototype de jeu avec interaction dans la console.",
    subdesc:
      " Lors de ce projet à 4, nous avons choisi de développer un jeu roguelike, dans lequel le joueur avançait de salle en salle dans un donjon. \n Le joueur pouvait progresser dans le donjon pour obtenir des récompenses générées aléatoirement à la fin de chaque salle, lui permettant d'améliorer son équipement afin d'aller plus loin.",
    href: "https://gitlab.univ-nantes.fr/E224021B/POO.23.24.20",
    logo: "projects/java_logo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      {
        id: 1,
        name: "java",
        path: "icons/java-vertical.svg",
      },
      {
        id: 2,
        name: "git",
        path: "icons/github-icon.svg",
      },
      {
        id: 3,
        name: "VSCode",
        path: "icons/visual-studio-code-1.svg",
      },
    ],
  },
  {
    title: "Projet universitaire autour de la programmation fonctionnelle",
    desc: "Programmation d'un analyseur syntaxique en OCaml d'un langage \"SimpleML\", vérifiant les types des expressions et évaluant leurs valeurs.",
    subdesc:
      "Ce projet m'as permis de mieux comprendre comment fonctionne un analyseur syntaxique pour les différents languages.",
    href: "https://gitlab.univ-nantes.fr/E224021B/projet-programation-fonctionnelle",
    logo: "projects/colour-logo.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    tags: [
      {
        id: 1,
        name: "OCaml",
        path: "icons/OCaml_Sticker.svg",
      },
      {
        id: 2,
        name: "VSCode",
        path: "icons/visual-studio-code-1.svg",
      },{
        id: 3,
        name: "git",
        path: "icons/github-icon.svg",
      },
    ],
  },
  {
    title: "Développement d’un Shoot’em Up",
    desc: "Création complète du moteur et du gameplay à partir de zéro",
    subdesc: "Ce projet d’une semaine m’a permis de comprendre la structure d’un moteur de jeu et l’importance de sa séparation logique avec le gameplay dans le code.",
    href: "https://github.com/DorianCadiot/Remise_a_niveau",
    logo: "projects/ShootemUp.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      {
        id: 1,
        name: "VSCode",
        path: "icons/visual-studio-code-1.svg",
      },
      {
        id: 2,
        name: "C++",
        path: "icons/ISO_C++_Logo.png",
      },
    ],
  },
  {
    title: "Création de mon portfolio",
    desc: "Développement de mon portfolio via github pages et ReactJS. ",
    subdesc:
      "Cela m'as permis de découvrir github pages, ReactJS ainsi que WebGL afin d'insérer mes projets.",
    href: "https://github.com/DorianCadiot/portfolio-alternance",
    logo: "projects/Capture-portfolio.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      {
        id: 1,
        name: "React",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "Github",
        path: "icons/github-icon.svg",
      },
      {
        id: 3,
        name: "WebGL",
        path: "icons/webgl-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "icons/javascript.svg",
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Centre for Virtual Reality Innovation - VARLab",
    position: "DLS Software Developer",
    duration: "August 2022 - current",
    icon: "varlab_logo.png",
    duties: [
      "Developed scalable and performant web applications using JavaScript, ReactJS, MongoDB, and ExpressJS.",
      "Contributed to flat screen and VR learning experiences using Unity and C#, optimizing data structures for efficiency.",
      "Led the development of onboarding projects, standardizing workflows and improving ramp-up time for new developers by 45%.",
      "Conducted code reviews, enforcing best practices in code efficiency, security, and testability.",
      "Mentored 10+ co-op developers enhancing productivity and team collaboration.",
    ],
  },
  {
    id: 2,
    company: "Centre for Virtual Reality Innovation - VARLab",
    position: "AR/VR Software Developer (Co-op and Part-Time)",
    duration: "January 2021 - December 2021",
    icon: "varlab_logo.png",
    duties: [
      "Developed interactive 2D and 3D learning experiences in Unity and C#, applying modular, reusable, and scalable development principles. ",
      "Created reusable assets and scripts, improving development speed by 20%.",
      "Collaborated with UX/UI designers and artists to enhance user interactions, resulting in a 23% increase in usability testing scores and a more intuitive user experience.",
      "Conducted unit and integration testing, which reduced the number of bugs in production by 12%.",
      "Managed version control using Git, reducing merge conflicts and improving team efficiency.",
    ],
  },
  {
    id: 3,
    company: "Conestoga College",
    position: "Mobile Application Developer (Co-op)",
    duration: "June 2020 - December 2020",
    icon: "conestoga_logo.png",
    duties: [
      "Developed cross-platform mobile applications with integrated augmented reality (AR) features.",
      "Optimized application performance, increasing speed by 17% and enhancing user engagement by 21%.",
      "Participated in design and system architecture reviews, ensuring scalability and maintainability.",
      "Wrote and maintained technical documentation for scalability and future development.",
      "Gained hands-on experience with Agile methodologies, participating in daily stand-ups, sprint planning, and retrospectives.",
    ],
  },
];

export const socialLinks = [
  { url: "https://www.instagram.com/dorian.cdt/?hl=en" },
  { url: "https://www.linkedin.com/in/cadiot-dorian/?trk=opento_sprofile_topcard" },
];

export const skills = [
  "C++",
  "POO",
  "JavaScript",
  "TypeScript",
  "C#",
  "Unity",
  "Python",
  "VScode",
  "Oracle",
  "SQL",
  "Programmation Fonctionnelle",
  "Git",
  "IntelliJ",
  "OCaml",
  "Prolog",
  "MySQL",
  "Gitlab",
  "Structures de données",
  "2D",
  "GitHub",
  "Analyseurs syntaxiques",
  "Java",
  "Maven",
  "Algorithmes",
];
