"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiFlask,
  SiTensorflow,
  SiAmazon,
  SiRedux,
  SiFirebase,
  SiLinux,
  SiCanva,
  SiAdobephotoshop,
  SiAdobepremierepro,
  // SiCsharp,
} from "react-icons/si";
import { Bot, Share2, Server, ServerIcon } from "lucide-react";

const sectionColors = [
    "#8b5cf6", // Violet (Languages)
    "#06b6d4", // Cyan (Frontend)
    "#22c55e", // Green (Backend)
    "#f59e0b", // Amber (Database)
    "#ec4899", // Pink (AI/Tools)
    "#3b82f6", // Blue (Design)
];

const techCategories = [
  {
    title: "Languages",
    gridCols: "lg:grid-cols-3", 
    skills: [
        { name: "C++", icon: <SiCplusplus size={40} />, color: "#00599C" },
        // { name: "CSharp", icon: <SiCsharp size={40} />, color: "#55eaefff" },
        { name: "Python", icon: <SiPython size={40} />, color: "#3776AB" },
        { name: "JavaScript", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend",
    gridCols: "lg:grid-cols-5",
    skills: [
      { name: "React", icon: <SiReact size={40} />, color: "#00d8ff" },     // Neon Cyan
      { name: "HTML5", icon: <SiHtml5 size={40} />, color: "#ff5722" },    // Vibrant Orange-Red
      { name: "CSS3", icon: <SiCss3 size={40} />, color: "#2563eb" },      // Electric Blue
      { name: "Tailwind", icon: <SiTailwindcss size={40} />, color: "#22d3ee" }, // Bright Turquoise
      { name: "Redux", icon: <SiRedux size={40} />, color: "#a855f7" },    // Neon Purple
    ],
  },
  {
    title: "Backend",
    gridCols: "lg:grid-cols-5",
    skills: [
    { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "#22c55e" },  // Vibrant Green
    { name: "Express", icon: <SiExpress size={40} />, color: "#8b5cf6" },  // Violet/Purple
    { name: "Flask", icon: <SiFlask size={40} />, color: "#06b6d4" },    // Cyan/Teal
    { name: "Firebase", icon: <SiFirebase size={40} />, color: "#f59e0b" }, // Bright Amber
    { name: "API", icon: <ServerIcon size={40} />, color: "#ec4899" },     // Hot Pink
    ],
  },
   {
    title: "Database",
    gridCols: "lg:grid-cols-2",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql size={40} />, color: "#4479A1" },
    ],
  },
  {
    title: "AI/ML & Tools",
    gridCols: "lg:grid-cols-4",
    skills: [
        { name: "Rasa", icon: <Bot size={40} />, color: "#7F00FF" },
        { name: "TensorFlow", icon: <SiTensorflow size={40} />, color: "#FF6F00" },
        { name: "Git", icon: <SiGit size={40} />, color: "#F05032" },
        { name: "Linux", icon: <SiLinux size={40} />, color: "#FCC624" },
        { name: "AWS", icon: <SiAmazon size={40} />, color: "#1ee675" },
        { name: "System Design", icon: <Share2 size={40} />, color: "#cccccc" },
    ],
  },
   {
    title: "Design",
    gridCols: "lg:grid-cols-2",
    skills: [
        { name: "Canva", icon: <SiCanva size={40} />, color: "#00C4CC" },
        { name: "Figma", icon: <SiFigma size={40} />, color: "#F24E1E" },
        { name: "Photoshop", icon: <SiAdobephotoshop size={40} />, color: "#31A8FF" },
        { name: "Premier Pro", icon: <SiAdobepremierepro size={40} />, color: "#9999FF" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function TechStackSection() {
  return (
    <section id="skills" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Tech Stack <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Expertise</span>
          </h2>
          <div className="inline-block relative">
            <span className="invisible">Expertise</span>
            <div className="absolute bottom-[-4px] left-0 h-1 w-full bg-primary rounded-full" style={{ backgroundColor: 'rgb(16, 104, 244)'}}></div>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A professional toolkit optimized for performance and scalability
          </p>
        </div>

       <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {techCategories.map((category, index) => {
             // Pick a color based on the index (loops if you have more categories than colors)
             const sectionColor = sectionColors[index % sectionColors.length];

             return (
                <motion.div
                  key={category.title}
                  // Dynamic spanning logic
                  className={`group/category relative overflow-hidden bg-slate-900/50 border border-gray-800 rounded-2xl p-6 ${
                    category.skills.length > 4 ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  {/* --- UPDATED: Random Color Corner Spotlight (Higher Opacity) --- */}
                  <div 
                    className="absolute -top-12 -right-12 w-56 h-56 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover/category:opacity-100 transition-opacity duration-500" 
                    style={{ 
                        background: `radial-gradient(circle, ${sectionColor}66 0%, rgba(0,0,0,0) 70%)` 
                        // Note: "66" at the end of hex code = ~40% opacity
                    }}
                  />
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-1 h-6 rounded-full" style={{ backgroundColor: sectionColor }}></div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <motion.div 
                    className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${category.gridCols || "lg:grid-cols-5"} gap-y-4 gap-x-10 mt-6 relative z-10`}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="group/icon relative rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square transition-colors cursor-pointer"
                        variants={skillItemVariants}
                        style={{ '--skill-color': skill.color } as React.CSSProperties}
                        whileHover={{ scale: 1.05 }} 
                      >
                        {/* Inner Icons Background Glow */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover/category:opacity-85 group-hover/icon:opacity-100 transition-opacity duration-500"
                          style={{ 
                            background: `radial-gradient(circle at top left, ${skill.color}40, transparent 70%), radial-gradient(circle at bottom right, ${skill.color}40, transparent 70%), #111827` 
                          }}
                        />
                        
                        <div className="relative z-10 flex flex-col items-center justify-center gap-1">
                            <motion.div 
                               className="transition-colors duration-300" 
                               style={{color: skill.color}}
                               whileHover={{ rotate: 5, scale: 1.1 }}
                               transition={{ type: "spring", stiffness: 300 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider group-hover/icon:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
             );
          })}
        </motion.div>
      </div>
    </section>
  );
}
