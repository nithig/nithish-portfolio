"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HackerText from "@/components/hacker-text";
import Orbit from "@/components/orbit";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full max-w-full min-h-screen flex flex-col items-center justify-center overflow-hidden p-4 pt-24 md:pt-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
          }}
        />
        {isMounted && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgb(16, 104, 244) 1px, transparent 1px),
                               linear-gradient(to right, rgb(16, 104, 244) 1px, transparent 1px)`,
              backgroundSize: `40px 40px`,
              maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 80%)`,
              WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 80%)`,
            }}
          />
        )}
      </div>
      
      {/* Content Container */}
      {/* FIX 1: Added 'max-w-5xl' to pull content away from the edges and towards the center */}
      <div className="container mx-auto px-4 z-10 w-full max-w-5xl">
        
        {/* FIX 2: Reduced 'gap-16' to 'gap-8 md:gap-12' to bring Text and Orbit closer */}
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 w-full">

          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm text-primary"
              style={{ backgroundColor: 'rgba(16, 104, 244, 0.2)', color: 'rgb(16, 104, 244)'}}
            >
              Fullstack Developer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Hey! I&apos;m <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Nithishkumar</span>
            </motion.h1>
            <HackerText
              texts={['Fullstack Developer', 'AI-driven Automation', 'Results-oriented']}
              className="text-xl sm:text-2xl md:text-3xl text-white mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 max-w-lg mb-8"
            >
              Results-oriented developer with expertise in the MERN stack and AI-driven automation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a href="#projects">
                <Button className="bg-primary hover:bg-primary/80 text-white rounded-lg px-6 py-3 bg-[rgb(16,104,244)] hover:bg-[rgb(47,119,234)] transition-colors duration-300">
                  Check portfolio
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary-light rounded-lg px-6 py-3"
                  style={{ borderColor: 'rgb(16, 104, 244)', color: 'rgb(16, 104, 244)'}}
                >
                  Contact Me
                </Button>
              </a>
            </motion.div>
          </div>
          
          {/* Orbit/Image Content */}
          <div className="flex items-center justify-center order-1 md:order-2 max-w-full w-full"> 
             <div className="relative w-full max-w-[600px] md:max-w-full flex justify-center">
                <Orbit />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}