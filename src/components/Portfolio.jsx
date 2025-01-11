import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { Github, ExternalLink } from "react-icons";

// Hardcoded portfolio data
const portfolio = [
  {
    id: 1,
    name: "AI PDF Notes Assistant",
    description: " The AI-powered PDF Notes Assistant efficiently processes and extracts text from multi-page PDF documents, enabling fast, relevant search functionality. It allows users to search through PDF content with high accuracy and speed.",
    image: "ai-pdf.png", // Replace with actual image URLs
    github: "https://github.com/vedantupadhye/Pdf_ChatNext",
    demo: "https://ai-notes-taker-sigma.vercel.app/",
    tech: ["Next.js", "Node.js",'ConvexDB', "ShadCN",],
  },
  {
    id: 2,
    name: "Ecom Dashboard",
    description: "An admin dashboard for an e-commerce website that allows admin and other users to enlist their products on the website through an admin panel with user authentication and Google login options.",
    image: "admindash.png", // Replace with actual image URLs
    github: "https://github.com/vedantupadhye/next_adminpanel",
    demo: "#",
    tech: ["React.js","Node.js", "Firebase", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Cloud Yard",
    description: "A Full stack web app with the ability to store data on cloud and create folders for better management and features like Dropbox.",
    image: "cloudyard.png", // Replace with actual image URLs
    github: "https://github.com/vedantupadhye/dropbox",
    demo: "https://demo.com/project2",
    tech: ["Next.js", "MongoDB", "ShadCN"],
  },
  // Add more project objects as needed
];

const ProjectCard = ({
  index,
  name,
  description,
  image,
  github,
  demo,
  tech,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`relative group w-full mt-[-2px] flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-6`}
    >
      
      {/* Image Section */}
      <div className="relative w-full md:w-2/5 h-72 md:h-96 overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <img
        src={image}
        alt="project_image"
        className="w-full h-full object-cover group-hover:opacity-90 transition-all duration-300 rounded-lg"
      />

        {/* Hover Effect */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-black py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300"
            >
              {/* <Github size={24} /> */}
              <FaGithub />
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-500 py-2 px-4 rounded-full hover:bg-green-400 transition duration-300"
            >
              {/* <ExternalLink size={24} /> */}
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className={`w-full md:w-3/5 flex flex-col justify-center ${isEven ? "text-left" : "text-right"} p-6`}>
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold text-3xl md:text-4xl leading-snug mb-4">          {name}</h3>
        <p className="text-gray-300 text-md md:text-lg mb-4">{description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-[#64ffda] bg-[#64ffda]/10 px-4 py-2 rounded-full text-sm font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-dark-bg py-16 px-8">
       <div className="text-center mb-16">
            <motion.h1
              className="text-5xl font-bold text-white mb-4 relative inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Portfolio
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h1>
          </div>

      {/* Change Grid Layout to Flex */}
      <div className="flex flex-wrap justify-center gap-10">
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
