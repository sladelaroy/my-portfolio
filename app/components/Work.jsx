"use client"
import { assets, workData } from "@/assets/assets";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "./ProjectCard";

const Work = ({ isDarkMode }) => {
  const carouselRef = React.useRef(null);

  const items = workData.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[6%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my software development portfolio! Explore a collection of
        projects showcasing my expertise in software development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative w-full max-w-5xl mx-auto"
      >

        
        {/* <AliceCarousel
          mouseTracking
          items={items}
          responsive={{
            0: { items: 1 },
            1024: { items: 3 }
          }}
          controlsStrategy="responsive"
        /> */}

<AliceCarousel
    ref={carouselRef}
    mouseTracking
    items={items}
    responsive={{
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    }}
    disableButtonsControls
    renderDotsItem={({ isActive }) => (
      <div
        className={`w-2 h-2 rounded-full mx-1 transition ${
          isActive ? "bg-black dark:bg-white" : "bg-gray-400"
        }`}
      />
    )}
  />

  {/* Dots */}
  <div className="mt-4 flex justify-center items-center">
    {/* AliceCarousel will auto-inject dots here */}
  </div>

  {/* Navigation Buttons Row */}
  <div className="mt-4 flex justify-between px-4">
    <button
      onClick={() => carouselRef.current?.slidePrev()}
      className={`p-2 rounded-full shadow transition ${
        isDarkMode
          ? "bg-white text-black hover:bg-gray-300"
          : "bg-black text-white hover:bg-gray-700"
      }`}
    >
      <FaChevronLeft />
    </button>
    <button
      onClick={() => carouselRef.current?.slideNext()}
      className={`p-2 rounded-full shadow transition ${
        isDarkMode
          ? "bg-white text-black hover:bg-gray-300"
          : "bg-black text-white hover:bg-gray-700"
      }`}
    >
      <FaChevronRight />
    </button>
  </div>
      </motion.div>

      {/* <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2
      text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a> */}
    </motion.div>
  );
};

export default Work;
