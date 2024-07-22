import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiMongodb, SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const skills = [
  { name: "React", icon: <FaReact size={90} /> },
  { name: "Express", icon: <SiExpress size={90} /> },
  { name: "Next.js", icon: <SiNextdotjs size={90} /> },
  { name: "MongoDB", icon: <SiMongodb size={90} /> },
  { name: "Node.js", icon: <FaNodeJs size={90} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={90} /> },
  { name: "Prisma", icon: <SiPrisma size={90} /> },
  { name: "TypeScript", icon: <SiTypescript size={90} /> },
  { name: "Git", icon: <FaGitAlt size={90} /> },
];

const Skills = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h2 className={`${styles.sectionText} text-center`}>
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-24 mt-24">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center"
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="mt-4 text-xl font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");















// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
// import { SiExpress, SiNextdotjs, SiMongodb, SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";

// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";
// import { Skills } from ".";

// const skills = [
//   { name: "React", icon: <FaReact size={90} /> },
//   { name: "Express", icon: <SiExpress size={90} /> },
//   { name: "Next.js", icon: <SiNextdotjs size={90} /> },
//   { name: "MongoDB", icon: <SiMongodb size={90} /> },
//   { name: "Node.js", icon: <FaNodeJs size={90} /> },
//   { name: "PostgreSQL", icon: <SiPostgresql size={90} /> },
//   { name: "Prisma", icon: <SiPrisma size={90} /> },
//   { name: "TypeScript", icon: <SiTypescript size={90} /> },
//   { name: "Git", icon: <FaGitAlt size={90} /> },
// ];

// const Skills = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start("show");
//   }, [controls]);

//   return (
//     <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
//       <motion.div
//         initial="hidden"
//         animate={controls}
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: 100,
//           },
//           show: {
//             opacity: 1,
//             y: 0,
//             transition: {
//               type: "tween",
//               duration: 1,
//               delay: 0.2,
//             },
//           },
//         }}
//         className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
//       >
//        <h2 className={`${styles.sectionText} text-center`}>
//         Skills
//        </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-24 mt-24">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center text-center"
//               whileHover={{ scale: 1.1 }}
//             >
//               {skill.icon}
//               <p className="mt-4 text-xl font-semibold">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Skills, "skills");







