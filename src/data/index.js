import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import CanvasLoader from "../components/Loader";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Position from "../components/Position";
import SpacemanCanvas from "../components/Spaceman";

export {
  CanvasLoader,
  Skills,
  Experience,
  Hero,
  Navbar,
  Portfolio,
  Position,
  SpacemanCanvas,
};

import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Hitachi",
    date: "July 2024 - Present",
    details: [
      " Working as a SDE Intern at <span style='color: white;'>Hitachi in the PAEG department</span> provided me with valuable insights into the software development lifecycle.",
      "Closely worked with automation industry and also worked to represent pictorial charts represntation of automation"
    ],
  },
  {
    title: "Frontend developer Intern",
    company_name: "CliniQ 360",
    date: "Feb 2024 - May 2024",
    details: [
      " <span style='color: white;'>I designed and implemented user-friendly interfaces</span> for a healthcare management platform using React and Next.js.",
      " <span style='color: white;'>Reduced Website Loading Time by 50% </span> Through performance optimization techniques, the platform's loading time was cut in half, resulting in a faster and more efficient user experience.",
    ],
  },
  {
    title: "Blockchain Research Intern",
    company_name: "Ceve Consultancy Pvt. Ltd.",
    date: "April 2023 - Oct 2023",
    details: [
      "I spearheaded the production of <span style='color: white;'>insightful technical reports on blockchain technologies</span>, demonstrating strong analytical skills and a keen understanding of industry trends.",
      "These reports were instrumental in supporting <span style='color: white;'>strategic decision-making </span> and provided valuable insights to our development team and to our clients",
    ],
  },
];

const portfolio = [
  {
    name: "WeBlog",
    description:
      "A fullstack blogging website with user authentication and Google sign in methods which allows user to create and publish blogs for others to access it.",
    image: oscs,
  },
  {
    name: "Com Manager",
    description:
      "An admin dashboard for an e-commerce website that allows admin and other users to enlist their products on the website through an admin panel with user authentication and Google login options.",
    image: devnotes,
  },
  {
    name: "Cloud Yard",
    description:
      "A Full stack web app with the ability to store data on cloud and create folders for better management and features like Dropbox.",
    image: algorithms,
  },
];

export { experiences, portfolio};










// import {
//   algorithms,
//   devnotes,
//   oscs,
// } from "../assets";

// export const navLinks = [
//   {
//     id: "hero",
//     title: "Hero",
//   },
//   {
//     id: "portfolio",
//     title: "Portfolio",
//   },
//   {
//     id: "experience",
//     title: "Experience",
//   },
//   {
//     id: "skills",
//     title: "Skills",
//   },
// ];

// const experiences = [
//   {
//     title: "Software Developer Intern",
//     company_name: "Hitachi",
//     date: "July 2024 - Present",
//     details: [
//       " I was responsible for developing a <span style='color: white;'> multi-level employee application review website</span>, encompassing stages such as employee submission, manager review, department head review, and final feedback.",
//     ],
//   },
//   {
//     title: "Frontend developer Intern",
//     company_name: "CliniQ 360",
//     date: "Feb 2024 - May 2024",
//     details: [
//       " <span style='color: white;'>I designed and implemented user-friendly interfaces</span> for a healthcare management platform using React and Next.js.",
//       " <span style='color: white;'>Reduced Website Loading Time by 50% </span> Through performance optimization techniques, the platform's loading time was cut in half, resulting in a faster and more efficient user experience.",
//     ],
//   },
//   {
//     title: "Blockchain Research Intern",
//     company_name: "Ceve Consultancy Pvt. Ltd.",
//     date: "april 2023 - oct 2023",
//     details: [
//       "I spearheaded the production of <span style='color: white;'>insightful technical reports on blockchain technologies</span>, demonstrating strong analytical skills and a keen understanding of industry trends.",
//       "These reports were instrumental in supporting <span style='color: white;'>strategic decision-making </span> and provided valuable insights to our development team and to our clients"
      
//     ],
//   },
// ];

// const portfolio = [
//   {
//     name: "WeBlog",
//     description:
//       "A fullstack blogging website with user authentication and Google sign in methods which allows user to create and publish blogs for others to access it.",
//     image: oscs,
//   },
//   {
//     name: "Com Manager",
//     description:
//       "A admin dashboard for an e-commerce website that allows admin and other users to enlist their products on the website through a admin pannel with user authentication and Google login options.",
//     image: devnotes,
//   },
//   {
//     name: "Cloud Yard",
//     description:
//       "A Full stack web app with ability to store data on cloud and create folders for better management and features like Ddropbox",
//     image: algorithms,
//   },
// ];

// export { experiences, portfolio };

