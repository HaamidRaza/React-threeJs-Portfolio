export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];
export const myProjects = [
  {
    title: "LandBnB - Full-Stack Rental Platform",
    desc: "LandBnB is a full-stack property rental platform inspired by Airbnb, enabling users to create, explore, and book listings through a robust authentication and CRUD system with geocoding and interactive maps.",
    subdesc:
      "Built using Node.js, Express, MongoDB, EJS, Cloudinary, Leaflet.js, and an MVC architecture, LandBnB provides a scalable and production-ready foundation for listing-based applications.",
    href: "https://landbnb-hq85.onrender.com",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#1E1A16",
      border: "0.2px solid #2A2420",
      boxShadow: "0px 0px 60px 0px #A67C4D4D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/node.png",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/express.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 4,
        name: "EJS",
        path: "/assets/ejs.png",
      },
    ],
  },
  {
    title: "Khana - Recipe Finder (React)",
    desc: "Khana is a modern recipe discovery app that lets users search for dishes, view detailed instructions, and manage favorites using a clean and responsive interface.",
    subdesc:
      "Developed with React, TailwindCSS, Context API, React Router, and the Forkify API, Khana offers smooth transitions, theme toggling, and persistent favorites via LocalStorage.",
    href: "https://khana-recipe-finder.vercel.app",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#121820",
      border: "0.2px solid #1A2430",
      boxShadow: "0px 0px 60px 0px #3B82F64D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "API Integration",
        path: "/assets/api.png",
      },
    ],
  },
];

export const calculateSizes = (isRealMobile, isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 3 : isMobile ? 3.3 : 5.8,
    deskPosition: isRealMobile
      ? [0.5, 7.7, 0]
      : isSmall
      ? [0.5, 13.7, -8]
      : isMobile
      ? [0.5, 13.7, -8]
      : [0.3, 7.3, -8.6],
    cubePosition: isSmall
      ? [5, 3.2, 0]
      : isMobile
      ? [7, 6, 0]
      : isTablet
      ? [5, -5, 0]
      : [17, -4.5, 0],
    reactLogoPosition: isSmall
      ? [2, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isRealMobile
      ? [-4, 10, 0]
      : isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 12, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-10, 7, 10],
    targetPosition: isRealMobile
      ? [-4, -1, -2]
      : isSmall
      ? [-5, -2, -10]
      : isMobile
      ? [-9, 4, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-30, -13, -50],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
