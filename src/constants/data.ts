export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 4,
    name: "Projects",
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
    title: "ThreeRun - 3D Obstacle Course Game",
    desc: "A 3D obstacle course game built with React Three Fiber, featuring a third-person character controller with movement and animations.",
    subdesc:
      "Currently in early development, with plans for level completion, multiplayer, and collectibles.",
    href: "https://a-coderr.github.io/obstacle_course_r3f/",
    source: "https://github.com/A-coderr/obstacle_course_r3f",
    logo: "projects/ThreeRun_Main_Screen.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 4,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "icons/threejs.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "Redux",
        path: "icons/redux.svg",
      },
    ],
  },
  {
    title: "Anzhelika Kostyuk - Portfolio Website",
    desc: "My Portfolio Website, a showcase of my skills, projects, and experience as a software developer.",
    subdesc:
      "Built with modern web technologies, this portfolio highlights interactive 3D elements, smooth animations, and a responsive design for an engaging user experience.",
    href: "https://github.com/A-coderr/three_portfolio",
    source: "https://github.com/A-coderr/three_portfolio",
    logo: "projects/Portfolio_Main.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "icons/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "icons/typescript-icon.svg",
      },
      {
        id: 4,
        name: "Java Script",
        path: "icons/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "icons/threejs.svg",
      },
      {
        id: 6,
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 7,
        name: "CSS",
        path: "icons/css-3.svg",
      },
    ],
  },
  {
    title: "Karate Galaxy - Karate Website",
    desc: "A Karate Website, developed as part of a college assignment.",
    subdesc:
      "Designed with a clean and responsive layout, it ensures a smooth user experience across different devices.",
    href: "https://a-coderr.github.io/karate-galaxy/",
    source: "https://github.com/A-coderr/Karate_HTML_CSS",
    logo: "projects/KarateGalaxy_Main.png",
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
        name: "HTML",
        path: "icons/html-5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "icons/css-3.svg",
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
  { url: "https://www.instagram.com/a_akcio/?hl=en" },
  { url: "https://github.com/A-coderr" },
  { url: "https://www.facebook.com/profile.php?id=100011369881132" },
  { url: "http://www.linkedin.com/in/anzhelika-kostyuk-a2b388194" },
];

export const skills = [
  "ReactJS",
  "Three.js",
  "JavaScript",
  "TypeScript",
  "C#",
  "Unity",
  "Python",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "Git",
  "MongoDB",
  "Azure",
  "Atlassian suite",
  "MySQL",
  "Scrum",
  "Agile",
  "3D",
  "GitHub",
  "Web Development",
  "React Three Fiber",
  "Redux",
  "TailwindCSS",
  "Object-Oriented Programming",
  "Test-Driven Development",
  "Responsive Design",
  "Data Structures",
  "Algorithms",
  "User Experience",
  "Version Control",
];
