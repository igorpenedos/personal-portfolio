export interface Project {
  name: string;
  languages: string[];
  description: string;
  points: string[];
  photo: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "TMU Prep",
    languages: ["React", "ChakraUI", "CSS", "Golang", "Gin", "MongoDB"],
    description:
      "Application that assits students organizing their academic schedule and ensure graduation",
    points: [
      "Collaborated with a group of 12 in an agile environment to build a web application that empowers CS students to visualize and organize their classes and check their graduation status.",
      "The project uses React for the front end and Golang with the Gin framework to handle the backend communications with Mongo.DB collections.",
      "Developed endpoints to ensure students can graduate with enrolled courses while helping the front end implement a responsive design that can reflect the backend functionalities.",
    ],
    photo: "tmuprep.jpg",
    link: "https://github.com/maryam-elbeshbishy/TMUPrep",
  },
  {
    name: "Customer Service Application",
    languages: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    description:
      "Ecommerce with mock data that simulates a true business experience",
    points: [
      "Created the backend for a mock e-commerce web application that enables customers to purchase items and get all the necessary information about their orders.",
      "The NodeJS and ExpressJS backend communicates with the MongoDB collections to schedule drivers and calculate distances to customer addresses.",
      "Implemented secure password handling for customer accounts.",
    ],
    photo: "csa.jpg",
    link: "https://github.com/igorpenedos/customer-service-application",
  },
  {
    name: "File Share",
    languages: ["React", "Express.JS", "Socket.IO"],
    description:
      "Socket.io project that allows users to share files through a socket connection",
    points: [],
    photo: "share.jpg",
    link: "https://github.com/igorpenedos/file-share",
  },
  {
    name: "Password Manager",
    languages: ["Python", "SQLite3"],
    description:
      "A python password manager that uses a local database to store password through hashing",
    points: [],
    photo: "password_manager.jpg",
    link: "https://github.com/igorpenedos/password-manager",
  },
  {
    name: "Create File Templates",
    languages: ["Typescript", "VS Extension"],
    description:
      "VS Code extension to have defualt templates when you create certain files",
    points: [],
    photo: "vs.jpg",
    link: "https://github.com/igorpenedos/create-file-template",
  },
  {
    name: "Discord Chat Archiver",
    languages: ["React", "TypeScript", "Discord.JS"],
    description:
      "Allows users to integrate a bot into discord servers and store chat logs offline. The bot ensures no data loss and provides a web application to visualize stored logs",
    points: [],
    photo: "dca.jpg",
    link: "https://github.com/igorpenedos/create-file-template",
  },
];
