"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// --- DATA (Unchanged) ---
const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer: (
      <>
        I specialize in the modern <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Next.js</span>{" "}
        ecosystem, combining full-stack development with DevOps principles. My
        core stack includes{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>TypeScript</span>,{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Next.js (App Router)</span>, and{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Docker</span> for containerization. I
        build robust backends using both the{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>MERN stack</span> and serverless
        solutions like <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Convex</span>.
      </>
    ),
  },
  {
    question: "How do you handle complex state management?",
    answer: (
      <>
        For global client state, I prefer{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Zustand</span> or{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Redux Toolkit</span> depending on
        complexity. For server state and caching, I rely heavily on{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>TanStack Query</span> to ensure my UI is
        always in sync with the backend without manual fetching logic.
      </>
    ),
  },
  {
    question: "What is your approach to database architecture?",
    answer: (
      <>
        I choose the tool that fits the data. For structured, relational data, I
        use <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>PostgreSQL</span> with{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Prisma</span> or{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Drizzle ORM</span>. For flexible,
        document-based data, I use{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>MongoDB</span>. I focus heavily on
        schema design to prevent N+1 query issues.
      </>
    ),
  },
  {
    question: "How do you ensure application performance?",
    answer: (
      <>
        I implement{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Server-Side Rendering (SSR)</span> and{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Static Site Generation (SSG)</span> via
        Next.js. I also optimize images using{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>next/image</span>, implement
        code-splitting, and use lazy loading for heavy components to keep the
        Core Web Vitals green.
      </>
    ),
  },
  {
    question: "Do you have experience with DevOps and Deployment?",
    answer: (
      <>
        Yes. I deploy applications using{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Vercel</span> for frontend and{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>AWS (EC2, S3)</span> or{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Render</span> for backend services. I
        use <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Docker</span> to containerize apps
        for consistent environments and set up CI/CD pipelines using{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>GitHub Actions</span>.
      </>
    ),
  },
  {
    question: "How do you handle authentication and security?",
    answer: (
      <>
        I implement secure auth flows using{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Clerk</span>,{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>NextAuth.js</span>, or custom{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>JWT</span> strategies. I ensure all API
        routes are protected, inputs are validated using{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Zod</span>, and sensitive data is
        encrypted.
      </>
    ),
  },
  {
    question: "What is your philosophy on UI/UX design?",
    answer: (
      <>
        I believe in "Accessibility First." I use{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Tailwind CSS</span> for rapid styling
        and <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Framer Motion</span> for meaningful
        micro-interactions. I often use{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Shadcn UI</span> components to ensure a
        consistent, professional look that is fully accessible.
      </>
    ),
  },
  {
    question: "How do you approach testing?",
    answer: (
      <>
        I write unit tests for critical utility functions using{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Jest</span> and integration tests for
        major user flows using <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Cypress</span> or{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Playwright</span>. This ensures that
        new features don't break existing functionality.
      </>
    ),
  },
  {
    question: "Can you work with existing design files (Figma)?",
    answer: (
      <>
        Absolutely. I have experience translating complex{" "}
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Figma</span> designs into pixel-perfect
        React code. I pay attention to spacing, typography, and responsive
        breakpoints to match the designer's vision exactly.
      </>
    ),
  },
  {
    question: "Why should we hire you over others?",
    answer: (
      <>
        Beyond just coding, I bring a product mindset. I don't just build
        features; I build solutions that solve business problems. I take
        ownership of the entire stack, from database optimization to the final
        pixel on the screen.
      </>
    ),
  },
];

const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: { question: string; answer: React.ReactNode };
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      layout
      className="group bg-slate-900/50 border border-gray-800 rounded-2xl p-5 hover:border-primary/30 transition-colors relative overflow-hidden"
      style={{'--hover-border-color': 'rgba(16, 104, 244, 0.3)'} as React.CSSProperties}
      data-state={isOpen ? 'open' : 'closed'}
    >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-opacity duration-300" 
             style={{ background: `radial-gradient(300px circle at 0% 0%, hsl(var(--primary))10, transparent 40%)`}}
        ></div>
      <motion.button
        layout
        className="w-full flex justify-between items-center relative z-10"
        onClick={onClick}
      >
        <span className="font-medium text-lg text-left text-white">{item.question}</span>
        {isOpen ? <Minus className="text-white"/> : <Plus className="text-white"/>}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden relative z-10"
          >
            <div className="pt-4 text-gray-400 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });
  const [isMounted, setIsMounted] = useState(false);
  
  // FIX 1: Use a Ref to access the section element instead of document.getElementById
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
            x: event.clientX - rect.left, 
            y: event.clientY - rect.top 
        });
    };

    const section = containerRef.current;
    if (section) {
        section.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
        if (section) {
            section.removeEventListener("mousemove", handleMouseMove);
        }
    };
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // FIX 2: Added 'w-full max-w-full' to prevent horizontal overflow bugs on mobile
    <section 
        id="faqs" 
        ref={containerRef}
        className="relative bg-background py-24 overflow-hidden w-full max-w-full"
    >
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

      <div className="relative max-w-4xl mx-auto px-6 z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Technical Insights
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-2" style={{ backgroundColor: 'rgb(16, 104, 244)'}}></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explore my technical skills, thought process, and how I build
            scalable, aesthetic, and performant systems.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}