"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages as placeholderImages } from "@/lib/placeholder-images"; 
import { Badge } from "@/components/ui/badge";

// --- DATA ---
const projects = [
  {
    id: "ai-advisor-project",
    title: "Voice-Activated AI Advisor",
    subtitle: "Rasa, Python, Web Speech API, React",
    description: "Achieved 95% automated query resolution by designing a state-aware dialogue system. Reduced response latency by 30% using a lightweight Web Speech API frontend.",
    tags: ["#Rasa", "#Python", "#Web Speech API", "#React"],
    imageSide: "left",
    markerType: "hollow",
    image: placeholderImages.find(p => p.id === 'portfolio-project')?.src || "/placeholder.png",
    themeColor: "#3B82F6", // Blue
  },
  {
    id: "marketplace-project",
    title: "Lung Cancer Detection CNN",
    subtitle: "Python, TensorFlow, CNN",
    description: "Achieved 97% classification accuracy on histopathological image datasets and improved diagnostic efficiency by 40% for healthcare professionals.",
    tags: ["#Python", "#TensorFlow", "#CNN"],
    imageSide: "right",
    markerType: "filled",
    slides: [
        placeholderImages.find(p => p.id === 'marketplace-project')?.src || "/lg.png",
        "/lg_2.png",
        "/lg_3.png",
    ],
    themeColor: "#10B981", // Emerald
  },
  {
    id: "ecommerce-project",
    title: "Modern Portfolio",
    subtitle: "Nithishkumar - Full Stack Development",
    description: "Designed and built a fully custom, animation-rich portfolio to leave a strong first impression with custom theme controls: light/dark toggle +",
    tags: ["#React", "#Supabase", "#Node.js", "#Framer"],
    imageSide: "left",
    markerType: "filled",
    image: placeholderImages.find(p => p.id === 'ecommerce-project')?.src || "/pro.png",
    themeColor: "#06B6D4", // Cyan
  },
  {
    id: "coming-soon-project",
    title: "Upcoming MERN Stack Project",
    subtitle: "Full Stack Architecture",
    description: "I'm currently architecting a new, full-stack MERN application with a React.js 16 frontend. Focusing on scalable real-time features. Code coming soon!",
    tags: ["#Ongoing", "#MERN Stack", "#Next.js"],
    imageSide: "right",
    markerType: "hollow",
    image: placeholderImages.find(p => p.id === 'coming-soon-project')?.src || "/placeholder.png",
    themeColor: "#A855F7", // Purple
  },
];

// --- UPDATED SLIDING CAROUSEL ---
const ImageCarousel = ({ slides, alt }: { slides: string[], alt: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 3500); // Increased slightly for better viewing time

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        // Added overflow-hidden to clip the sliding images
        <div className="relative w-full h-full overflow-hidden rounded-lg">
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    // Slide Animation Logic
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30,
                        mass: 1
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[currentIndex]}
                        alt={`${alt} - Slide ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
};


const ProjectItem = ({ project, index }: { project: any, index: number }) => {
  const isEven = index % 2 === 0;
  const hasCarousel = project.slides && project.slides.length > 0;

  return (
    <div className="group/project relative flex flex-col md:grid md:grid-cols-2 md:gap-8 items-center mb-24 last:mb-0 z-10 w-full">
      
      {/* Timeline Marker */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
        <div 
            className="w-4 h-4 rounded-full border-2 bg-background transition-all duration-500 ease-out group-hover/project:scale-[1.8] group-hover/project:border-opacity-0" 
            style={{ 
                borderColor: project.themeColor,
                boxShadow: `0 0 10px ${project.themeColor}40`
            }}
        >
            <div className="w-full h-full rounded-full opacity-0 group-hover/project:opacity-100 transition-all duration-300 scale-0 group-hover/project:scale-100"
                 style={{ backgroundColor: project.themeColor, boxShadow: `0 0 20px 4px ${project.themeColor}` }}
            ></div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className={`relative flex-1 w-full ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'} ${isEven ? '' : 'md:order-2'}`}
      >
        <h3 
          className="text-3xl font-bold mb-2 transition-all duration-300 origin-left group-hover/project:scale-105 group-hover/project:tracking-wide"
          style={{ color: project.themeColor }}
        >
          <span className="block transition-all duration-300 group-hover/project:drop-shadow-[0_0_15px_rgba(var(--theme-rgb),0.5)]"
                style={{ textShadow: `0 0 0px ${project.themeColor}` }}
          >
              {project.title}
          </span>
        </h3>

        <p className="text-gray-400 mb-4 font-medium">{project.subtitle}</p>
        
        <div 
          className={`relative mb-6 p-6 rounded-2xl border border-gray-800 bg-slate-900/80 overflow-hidden transition-all duration-500 group-hover/project:border-opacity-50 group-hover/project:bg-slate-900/90 group-hover/project:shadow-2xl ${isEven ? '' : 'md:text-left'}`}
          style={{ borderColor: 'rgba(31, 41, 55, 0.5)' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500 pointer-events-none"
               style={{ border: `1px solid ${project.themeColor}50`, borderRadius: '1rem' }}></div>
          
          <p className="text-gray-300 relative z-10 leading-relaxed">{project.description}</p>
        </div>

        <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'md:justify-end'}`}>
          {project.tags.map((tag: string) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="border-gray-700 bg-slate-900/50 transition-colors duration-300"
              style={{ color: project.themeColor, borderColor: `${project.themeColor}20` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Image / Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex-1 flex items-center justify-center p-4 relative z-10 w-full ${isEven ? '' : 'md:order-1'}`}
      >
        <div className="relative w-full max-w-lg transition-all duration-500 group-hover/project:scale-[1.03]">
          <div 
              className="relative rounded-lg overflow-hidden aspect-[4/3]"
              style={{ boxShadow: `0 0 0 1px ${project.themeColor}20` }}
          >
              <div 
                  className="absolute -inset-4 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: `radial-gradient(circle, ${project.themeColor}40 0%, transparent 70%)` }} 
              ></div>

              {hasCarousel ? (
                 <ImageCarousel slides={project.slides} alt={project.title} />
              ) : (
                <Image
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover relative z-10"
                />
              )}
              
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function LatestWorksSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const x1 = useTransform(springX, [0, 1500], [0, -300]); 
  const y1 = useTransform(springY, [0, 1000], [0, -200]);

  const x2 = useTransform(springX, [0, 1500], [0, 400]); 
  const y2 = useTransform(springY, [0, 1000], [0, -150]); 

  const x3 = useTransform(springX, [0, 1500], [0, -200]);
  const y3 = useTransform(springY, [0, 1000], [0, 300]); 

  /* =====================================================
     🌌 AMBIENT SWELLING SPOTLIGHT (NEW — ADDITIVE)
     ===================================================== */
  const [spotlights, setSpotlights] = useState<any[]>([]);
  const spotlightId = React.useRef(0);
  const lastSpawn = React.useRef(0);

  const AMBIENT_COLORS = [
    "rgba(168,85,247,0.35)",
    "rgba(59,130,246,0.35)",
    "rgba(34,211,238,0.3)",
    "rgba(16,185,129,0.35)",
    "rgba(236,72,153,0.35)",
    "rgba(250,204,21,0.3)",
  ];

  function spawnAmbientSpotlight() {
    const now = Date.now();
    if (now - lastSpawn.current < 140) return;
    lastSpawn.current = now;

    const newSpot = {
      id: spotlightId.current++,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 260 + 220,
      color: AMBIENT_COLORS[Math.floor(Math.random() * AMBIENT_COLORS.length)],
    };

    setSpotlights(prev => [...prev, newSpot]);

    setTimeout(() => {
      setSpotlights(prev => prev.filter(s => s.id !== newSpot.id));
    }, 1600);
  }

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // 🔥 Ambient trigger (NEW)
    spawnAmbientSpotlight();
  }

  return (
    <section 
      id="projects" 
      className="bg-background py-20 overflow-hidden relative w-full max-w-full"
      onMouseMove={handleMouseMove}
    >
      {/* =====================================================
          🌌 AMBIENT SWELLING SPOTLIGHT LAYER (NEW)
          ===================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <AnimatePresence>
          {spotlights.map(light => (
            <motion.div
              key={light.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute rounded-full blur-[140px] mix-blend-screen"
              style={{
                top: light.top,
                left: light.left,
                width: light.size,
                height: light.size,
                background: light.color,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* =====================================================
          🌫️ YOUR ORIGINAL PARALLAX BLOBS (UNCHANGED)
          ===================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div 
          style={{ x: x1, y: y1 }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen opacity-60"
        />
        <motion.div 
          style={{ x: x2, y: y2 }}
          className="absolute top-[10%] -right-20 w-[500px] h-[500px] bg-cyan-500/15 blur-[100px] rounded-full mix-blend-screen opacity-50"
        />
        <motion.div 
          style={{ x: x3, y: y3 }}
          className="absolute bottom-0 left-[20%] w-[700px] h-[500px] bg-blue-700/10 blur-[130px] rounded-full mix-blend-screen opacity-50"
        />
      </div>

      {/* =====================================================
          🧱 CONTENT (UNCHANGED)
          ===================================================== */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-white">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Works</span>
          </h2>
          <div className="inline-block relative mt-2">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="relative flex flex-col w-full">
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-gray-800 to-transparent hidden md:block"></div>
          
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-slate-900/30 border border-gray-800 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>

          <p className="text-gray-400 text-center max-w-3xl mx-auto relative z-10">
            During my learning journey, I built several practice projects like a <span className="text-blue-400 font-semibold">calculator</span>, <span className="text-blue-400 font-semibold">watches</span>, and <span className="text-blue-400 font-semibold">clones</span>. This portfolio showcases only my <span className="text-yellow-400 font-semibold">best work</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
