import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        what i offer
      </motion.h4>

      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">
        My Services
      </motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am an experienced Frontend Developer with over a decade of
        professional expertise in the field. Throughout my career, I have had
        the privilege of collaborating with prestigious organizationsa,
        contributing to their success and growth.
      </motion.p>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="grid grid-cols-auto gap-6 my-10 ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileInView={{scale: 1.05}}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 
            hover:shadow-black hover:-translate-y-1 duration-500 
            dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-500 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
