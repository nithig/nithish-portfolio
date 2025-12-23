"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Social links with official brand colors
const socialLinks = [
  { icon: Github, href: "https://github.com/nithig", name: "GitHub", color: "#181717" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nithishkumar-ganesan", name: "LinkedIn", color: "#0A66C2" },
  { icon: Mail, href: "mailto:gnithishdeveloper@gmail.com", name: "Mail", color: "#EA4335" },
  { icon: Phone, href: "tel:+916383682418", name: "Phone", color: "#25D366" },
];

export default function FAB() {
  const [isOpen, setIsOpen] = useState(false);

  // Rotate the main FAB button when open
  const fabVariants = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
  };

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
      y: 50,
      opacity: 0,
      scale: 0,
      transition: { y: { stiffness: 1000 } },
    },
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed bottom-16 right-8 md:bottom-10 md:right-10 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex flex-col items-center gap-3 mb-4"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {socialLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      style={{ backgroundColor: link.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
                  </TooltipTrigger>
                  {/* Fixed Tooltip: Always appears to the LEFT to avoid getting cut off */}
                  <TooltipContent 
                    side="left" 
                    align="center" 
                    className="px-3 py-1.5 text-sm font-medium bg-gray-900 text-white border-none shadow-md"
                  >
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              style={{ backgroundColor: "rgb(16, 104, 244)" }}
              variants={fabVariants}
              animate={isOpen ? "open" : "closed"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-7 w-7 md:h-8 md:w-8" />
              <span className="sr-only">Toggle menu</span>
            </motion.button>
          </TooltipTrigger>
          {!isOpen && (
            <TooltipContent 
              side="left" 
              align="center" 
              className="px-3 py-1.5 font-medium bg-gray-900 text-white border-none"
            >
              <p>Let&apos;s connect!</p>
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}