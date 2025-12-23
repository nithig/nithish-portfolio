"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Scroll,
  Circle,
  Brain,
  RefreshCcw,
  MapPin,
  Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// --- DATA ---
const timelineData = {
  work: [
    {
      icon: Briefcase,
      title: "MERN Stack Developer Trainee",
      company: "ACCIOJOB",
      date: "Nov 2023 - Present", 
      location: "Haryana (Remote/Hybrid)",
      description: "Intensive Full Stack Development training. Built scalable web applications using React.js, Node.js, Express, and MongoDB. Gained expertise in Data Structures & Algorithms (DSA) and system design concepts.",
    },
    {
      icon: Briefcase,
      title: "In-Plant Training",
      company: "Industrial Training Program",
      date: "Completed",
      location: "India",
      description: "Gained practical insights into software development lifecycles, industrial workflows, and best practices in a professional environment.",
    },
  ],
  education: [
    {
      icon: GraduationCap,
      title: "B.E. Computer Science & Engineering",
      company: "Priyadarshini Engineering College",
      date: "Jun 2024 (Completed)",
      location: "Vaniyambadi, Vellore",
      description: "Graduated with 8.1 CGPA. Specialized in AI/ML basics and Full Stack Web Development.",
    },
    {
      icon: GraduationCap,
      title: "Higher Secondary Education (HSC)",
      company: "Selva Higher Secondary School",
      date: "Mar 2020",
      location: "Krishnagiri",
      description: "Completed with 64.5%. Focus on Mathematics and Computer Science.",
    },
    {
      icon: GraduationCap,
      title: "Secondary Education (SSLC)",
      company: "Crescent Matriculation School",
      date: "Apr 2018",
      location: "Gudiyatham",
      description: "Completed with 79.4%.",
    },
  ],
  certifications: [
    {
      icon: Scroll,
      title: "FullStack With Python",
      company: "Certification Course",
    },
    {
      icon: Scroll,
      title: "Cloud Essential (AWS)",
      company: "Cloud Computing Basics",
    },
    {
      icon: Scroll,
      title: "Cloud Sandboxing with AWS & Cyber Security",
      company: "Security & Infrastructure",
    },
    {
      icon: Scroll,
      title: "Employability Skills Development Training",
      company: "Project: The Future of Work (Glassdoor)",
    },
  ],
};

const philosophyPoints = [
  {
    tech: "React.js, Node.js, Express, MongoDB:",
    description: "Building robust full-stack applications. I specialize in the MERN stack to create scalable, single-page applications.",
  },
  {
    tech: "AI & Automation (Rasa, Python):",
    description: "Integrating intelligent features. My experience includes building Context-Aware AI Agents and Voice-Activated Customer Advisors.",
  },
  {
    tech: "Data Science & CNNs:",
    description: "Leveraging Deep Learning for real-world solutions. I have worked on Lung Cancer Detection systems achieving 97% accuracy.",
  },
  {
    tech: "UI/UX & Design (Figma, CSS3):",
    description: "Managing the full lifecycle from design to deployment. I ensure pixel-perfect user interfaces using Tailwind CSS.",
  },
];

const featureCards = [
  {
    icon: Brain,
    title: "Analytical Problem Solving",
    description: "Strong aptitude for breaking down logic and DSA, honed during intensive training.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Learning",
    description: "Committed to staying updated with the latest technologies, from AI agents to modern web frameworks.",
  },
];

// --- FIXED COMPONENTS ---

const TimelineItem = ({
  icon: Icon,
  title,
  company,
  date,
  isFirst,
  isLast,
  description,
  location,
}: {
  icon: React.ElementType;
  title: string;
  company: string;
  date?: string;
  isFirst?: boolean;
  isLast?: boolean;
  description?: string;
  location?: string;
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="relative pl-8 md:pl-12 py-2"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{ overflow: "visible" }} // Crucial for lines to overlap gaps
    >
      {/* --- TIMELINE LINE CONTAINER --- */}
      <div className="absolute left-0 top-0 h-full w-12 flex justify-center">
        
        {/* 1. UPPER LINE (Connects to previous item) */}
        {/* Only show if NOT the first item */}
        {!isFirst && (
            <div className="absolute top-[-24px] h-[48px] w-[2px] bg-[#1068F4] left-[11px] md:left-[13px]"></div>
        )}

        {/* 2. LOWER LINE (Connects to next item) */}
        {/* Only show if NOT the last item */}
        {!isLast && (
            <div className="absolute top-[24px] h-[calc(100%+24px)] w-[2px] bg-[#1068F4] left-[11px] md:left-[13px]"></div>
        )}

        {/* 3. THE DOT (Centered at top-6) */}
        <div className="absolute top-6 left-[4px] md:left-[6px] w-4 h-4 rounded-full bg-[#000319] border-2 border-[#1068F4] z-20 shadow-[0_0_10px_#1068F4]">
            <div className="w-full h-full rounded-full bg-[#1068F4] opacity-20 animate-pulse"></div>
        </div>
      </div>

      <div className="group relative bg-[#0a0e17] border border-gray-800/60 rounded-xl p-6 transition-all duration-300 hover:border-[#1068F4]/50 hover:shadow-[0_0_30px_-10px_rgba(16,104,244,0.3)] hover:-translate-y-1">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1068F4]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{title}</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                {company && <span className="font-semibold text-gray-300">{company}</span>}
                {location && (
                    <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#1068F4]" />
                        {location}
                    </span>
                )}
            </div>
            {date && (
                <div className="w-fit flex items-center gap-1.5 rounded-md bg-[#1068F4]/10 border border-[#1068F4]/20 px-3 py-1 text-xs font-medium text-[#1068F4]">
                    <Calendar className="w-3 h-3" />
                    {date}
                </div>
            )}
            {description && (
                <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed border-t border-gray-800/50 pt-3">
                    {description}
                </p>
            )}
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative pl-8 md:pl-12 pb-6 pt-4">
      {/* Header Dot */}
      <div className="absolute left-0 top-5 w-12 flex justify-center">
         {/* Optional: Small line connecting header to first item? Usually not needed, but can add if requested */}
         <div className="absolute left-[4px] md:left-[6px] w-5 h-5 md:w-6 md:h-6 flex items-center justify-center z-10 bg-[#000319] rounded-full border border-gray-800">
            <Circle className="w-2.5 h-2.5 text-[#1068F4] fill-current" />
         </div>
      </div>
      <h3 className="text-2xl font-bold text-[#1068F4]">{title}</h3>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#000319] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl text-center font-bold text-white">
            About <span className="text-[#1068F4]">My Journey</span>
          </h2>
          <div className="flex justify-center mt-2">
             <div className="h-1 w-24 bg-[#1068F4] rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col gap-8">
            
            {/* Experience */}
            <div>
                <TimelineSectionHeader title="Experience & Training" />
                <div className="flex flex-col gap-6"> 
                    {timelineData.work.map((item, index) => (
                    <TimelineItem
                        key={index}
                        {...item}
                        isFirst={index === 0}
                        isLast={index === timelineData.work.length - 1}
                    />
                    ))}
                </div>
            </div>

            {/* Education */}
            <div>
                <TimelineSectionHeader title="Education" />
                <div className="flex flex-col gap-6">
                    {timelineData.education.map((item, index) => (
                    <TimelineItem
                        key={index}
                        {...item}
                        isFirst={index === 0} 
                        isLast={index === timelineData.education.length - 1}
                    />
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div>
                <TimelineSectionHeader title="Certifications" />
                 <div className="flex flex-col gap-6">
                    {timelineData.certifications.map((item, index) => (
                        <TimelineItem 
                             key={index} 
                             {...item} 
                             isFirst={index === 0}
                             isLast={index === timelineData.certifications.length - 1}
                        />
                    ))}
                 </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-20">
             
             {/* 1. Philosophy Card */}
            <div className="group relative bg-[#0a0e17] border border-gray-800 rounded-xl p-8 overflow-hidden hover:border-[#1068F4]/50 transition-colors duration-300">
               <div className="absolute inset-0 bg-gradient-to-b from-[#1068F4]/5 to-transparent opacity-50" />
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-[#1068F4]">
                    My Development Philosophy
                  </h3>
                  <ul className="space-y-5">
                    {philosophyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm md:text-base leading-relaxed">
                        <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#1068F4]"></div>
                        <p className="text-gray-400">
                          <span className="font-semibold text-[#1068F4]">
                            {point.tech}
                          </span>{" "}
                          {point.description}
                        </p>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* 2. Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-[#0a0e17] border border-gray-800 rounded-xl p-6 flex flex-col items-start text-left overflow-hidden transition-all hover:border-[#1068F4]/50 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#1068F4]/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="bg-[#1068F4]/20 p-3 rounded-full mb-4 w-fit">
                      <card.icon className="w-6 h-6 text-[#1068F4]" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-base">{card.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 3. Learning Goals */}
            <div className="bg-[#0a0e17] border border-gray-800 rounded-xl p-8 hover:border-[#1068F4]/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <Brain className="w-6 h-6 text-[#1068F4]" />
                 Upcoming Learning Goals
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm px-4 py-1.5 border-[#1068F4]/50 bg-[#1068F4]/10 text-[#1068F4] hover:bg-[#1068F4]/20 transition-colors">
                  Advanced AI Agents
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-1.5 border-[#1068F4]/50 bg-[#1068F4]/10 text-[#1068F4] hover:bg-[#1068F4]/20 transition-colors">
                  System Design
                </Badge>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}