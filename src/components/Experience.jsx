'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Calendar, Award, ArrowRight } from 'lucide-react'

const experiences = [
  {
    company: 'Hitachi India ',
    position: 'Software Developer Intern',
    period: 'July 2024 - Present',
    description: 'Developed a real-time data monitoring systems, improving performance and efficiency.',
    achievements: [
  'Engineered real-time Process Monitoring System dashboard using React.js and ApexCharts, processing 2K+ data points daily ',
  'Reduced dashboard loading time by 45% through implementation of lazy loading and code splitting strategies ',
  'Designed reusable React components used across 3 different projects, reducing development time by 30% ',
  'Implemented DataTables integration for complex data visualization, improving data accessibility ',
 ],
    tech: ['React', 'Node.js', 'Next.js', 'ML','Angular'],
    // color: 'bg-blue-500', // Blue color for the card
  },
  {
    company: 'CliniQ 360',
    position: 'Frontend developer Intern',
    period: 'Feb 2024 - May 2024',
    description: 'Created responsive web designs and implemented frontend features.',
    achievements: [
      'Increased website loading speed by 40% through optimization of Next.js and efficient data fetching strategies.',
      'Improved responsive design using Tailwind CSS, improving user experience across multiple.',
      'Collaborated with UX/UI designers to enhance user interface elements, leading to an increase in user engagement.'
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Docker'],
    
  },
  {
    company: 'Ceve Consultancy Pvt. Ltd.',
    position: 'Blockchain Research Intern',
    period: 'April 2023 - Oct 2023',
    description: 'Conducted in-depth research on blockchain technologies',
    achievements: [
      'Conducted comprehensive research on blockchain technologies to analyze trends, use cases, and technical advancements.',
      'Created detailed, industrial-grade reports, offering actionable insights to development teams for project planning and implementation.',
      'Collaborated with stakeholders to ensure reports aligned with business goals, enhancing decision-making and strategic planning.'
    ],
    tech: [],

  },
]

export default function Experience() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl font-bold text-white mb-4 relative inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Work Experience
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h1>
          </div>

          <div className="space-y-16 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900" />

                <div
                  className={`ml-16 bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1 ${exp.color}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        {exp.position}
                      </motion.h3>
                      <div className="flex items-center text-purple-400 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-cyan-400 bg-gray-900 px-4 py-2 rounded-full">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Award size={18} className="mr-2 text-purple-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <ArrowRight size={16} className="mr-2 mt-1 text-cyan-400" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-900 text-purple-400 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
