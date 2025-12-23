"use client";



import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import {

  FaReact,

  FaHtml5,

  FaCss3Alt,

  FaJsSquare,

  FaNodeJs,

  FaPython,

} from "react-icons/fa";

import { SiTailwindcss, SiMongodb, SiNextdotjs, SiGit } from "react-icons/si";

import { PlaceHolderImages } from "@/lib/placeholder-images";

import { useIsMobile } from "@/hooks/use-mobile";



const outerIcons = [

  { component: FaNodeJs, color: "#68A063", size: "3rem" },

  { component: SiMongodb, color: "#4DB33D", size: "3rem" },

  { component: FaPython, color: "#306998", size: "3rem" },

  { component: SiTailwindcss, color: "#38B2AC", size: "3rem" },

  { component: FaReact, color: "#61DAFB", size: "3rem" },

];



const innerIcons = [

  { component: FaJsSquare, color: "#F7DF1E", size: "2rem" },

  { component: FaCss3Alt, color: "#1572B6", size: "2rem" },

  { component: FaHtml5, color: "#E34F26", size: "2rem" },

  { component: SiNextdotjs, color: "#FFFFFF", size: "2rem" },

  { component: SiGit, color: "#F05032", size: "2rem" },

];



export default function Orbit() {

  const developerImage = PlaceHolderImages.find(p => p.id === 'developer-image');

  const isMobile = useIsMobile();



  const outerRadius = isMobile ? 150 : 225;

  const innerRadius = isMobile ? 110 : 150;

 

  return (

    <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[500px] md:h-[500px]">

      {/* Dashed Orbits */}

      <motion.div

        className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] border-2 border-dashed rounded-full"

        style={{ borderColor: "rgb(16, 104, 244)"}}

        animate={{ rotate: 360 }}

        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}

      />

      <motion.div

        className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-2 border-dashed rounded-full"

        style={{ borderColor: "rgb(16, 104, 244)"}}

        animate={{ rotate: -360 }}

        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}

      />



      {/* Center Image */}

      <div className="relative h-[252px] w-[252px] md:h-[350px] md:w-[350px] z-10 ">

        <Image

          src={developerImage?.src || "/profile.png"}

          alt={developerImage?.description || "Developer photo"}

          width={512}

          height={512}

          className="rounded-[45%] object-cover shadow-2xl"

          data-ai-hint={developerImage?.imageHint || "developer portrait"}

        />

      </div>



      {/* Outer Orbit Icons */}

      <motion.div

        className="absolute w-full h-full z-20"

        animate={{ rotate: 360 }}

        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}

      >

        {outerIcons.map((icon, index) => {

          const angle = index * (360 / outerIcons.length);

          return (

            <motion.div

              key={`outer-${index}`}

              className="absolute top-1/2 left-1/2"

              style={{

                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${outerRadius}px) rotate(-${angle}deg)`

              }}

            >

              <icon.component style={{ fontSize: icon.size, color: icon.color }} />

            </motion.div>

          );

        })}

      </motion.div>



      {/* Inner Orbit Icons */}

      <motion.div

        className="absolute w-full h-full"

        animate={{ rotate: -360 }}

        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

      >

        {innerIcons.map((icon, index) => {

          const angle = index * (360 / innerIcons.length);

          return (

            <motion.div

                key={`inner-${index}`}

                className="absolute top-1/2 left-1/2"

                style={{

                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${innerRadius}px) rotate(-${angle}deg)`

                }}

            >

                {icon.component.name === 'SiNextdotjs' ? (

                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">

                         <icon.component style={{ fontSize: icon.size, color: icon.color }} />

                    </div>

                ) : (

                    <icon.component style={{ fontSize: icon.size, color: icon.color }} />

                )}

            </motion.div>

          );

        })}

      </motion.div>

       

        {/* React Icon at the bottom */}

       

    </div>

  );

}

