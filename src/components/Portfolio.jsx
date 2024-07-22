import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
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
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div
        className='relative w-full md:w-3/5'
      >
        <div 
          className='relative w-full h-auto md:rounded-3xl overflow-hidden'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover pt-20'
          />
          {hover && (
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
              <a
                href='https://github.com/vedantupadhye'
                className='rounded-md bg-green-400 px-6 py-3 text-white'
              >
                Github
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={`w-full md:w-3/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-quaternary font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className=' text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl mt-4'>{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} ml-32`}>Portfolio</h2>
        {/* <h2 className="text-orange-400 font-bold md:text-[80px] sm:text-[50px] text-[40px]">Portfolio</h2> */}
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");



















// import { motion, useAnimation } from "framer-motion";
// import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// import { portfolio } from "../data";
// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";
// import { fadeIn, textVariant } from "../utils/motion";




// const ProjectCard = ({
//   index,
//   name,
//   description,
//   image,
// }) => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("show");
//     }
//   }, [controls, inView]);

//   const isEven = index % 2 === 0;

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={fadeIn("up", "spring", 0, 0.75)}
//       className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
//     >
//       <div className='relative w-full md:w-3/5 '>
//         <img
//           src={image}
//           alt='project_image'
//           className='w-full h-auto object-cover md:rounded-3xl pt-20'
          
//         />
//         <div >
//           <button className="rounded-md bg-green-400 px-6 py-3 mt-4 "><a href="https://github.com/vedantupadhye/fullstack_blog">Github</a> </button>
//         </div>
       
//       </div>

//       <div className={`w-full md:w-3/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
//         <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
//         <p className=' text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl mt-4'>{description}</p>
//       </div>
//     </motion.div>
//   );
// };



// const Portfolio = () => {
//   return (
//     <div className='text-center md:text-left md:px-20 lg:px-40'>
//       <motion.div variants={textVariant()}>
//         <h2 className={`${styles.sectionText}`}>Portfolio</h2>
//       </motion.div>

//       <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
//         {portfolio.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Portfolio, "portfolio");
