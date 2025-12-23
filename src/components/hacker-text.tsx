"use client";

import React, { useState, useEffect, useRef } from "react";

interface HackerTextProps {
  texts: string[];
  className?: string;
}

const HackerText: React.FC<HackerTextProps> = ({ texts, className }) => {
  const [currentText, setCurrentText] = useState(texts[0] || "");
  const [textIndex, setTextIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const letters = "!@#$%^&*()_+{}:\"<>?|[];',./`~";

  useEffect(() => {
    if (!isMounted) return;

    const scramble = (text: string) => {
      let iteration = 0;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        setCurrentText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
        iteration += 1 / 3;
      }, 30);
    };

    const textCycle = () => {
      scramble(texts[textIndex]);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const cycleInterval = setInterval(textCycle, 3000); // Loop every 3 seconds
    scramble(texts[textIndex]);


    return () => {
      clearInterval(cycleInterval);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMounted, textIndex, texts]);
  
  if (!isMounted) {
    return (
      <div className={`font-mono font-bold text-white ${className}`}>
        <span>{texts[0]}</span>
         <span
          className="animate-pulse"
          style={{ color: "#1068F4" }}
        >
          _
        </span>
      </div>
    );
  }

  return (
    <div className={`font-mono font-bold text-white ${className}`}>
      <span>{currentText}</span>
      <span
        className="animate-pulse"
        style={{ color: "#1068F4" }}
      >
        _
      </span>
    </div>
  );
};

export default HackerText;
