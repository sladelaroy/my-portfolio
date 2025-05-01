import { FaReact, FaNodeJs, FaExternalLinkAlt } from "react-icons/fa";
import { 
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiClerk,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiExpo,
  SiAppwrite,
  SiFirebase,
  SiSupabase, SiStripe
} from "react-icons/si";
import { motion } from "motion/react";
import React from "react";

const ProjectCard = ({ project }) => {
  const technologyIcons = [
    { name: "React", icon: FaReact, className: "text-blue-500" },
    { name: "Node.js", icon: FaNodeJs, className: "text-green-500" },
    { name: "Next.js", icon: SiNextdotjs, className: "text-black" },
    { name: "JavaScript", icon: SiJavascript, className: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, className: "text-blue-600" },
    { name: "TailwindCSS", icon: SiTailwindcss, className: "text-teal-500" },
    { name: "Clerk", icon: SiClerk, className: "text-purple-500" },
    { name: "Express", icon: SiExpress, className: "text-gray-700" },
    { name: "MongoDB", icon: SiMongodb, className: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, className: "text-blue-700" },
    { name: "Prisma", icon: SiPrisma, className: "text-pink-500" },
    { name: "React Native", icon: FaReact, className: "text-blue-400" },
    { name: "Expo", icon: SiExpo, className: "text-black" },
    { name: "Appwrite", icon: SiAppwrite, className: "text-blue-800" },
    { name: "Firebase", icon: SiFirebase, className: "text-orange-500" },
    { name: "Supabase", icon: SiSupabase, className: "text-blue-500" },
    { name: "Stripe", icon: SiStripe, className: "text-green-400" },
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="dark:bg-darkHover border border-gray-500 rounded-lg shadow-md p-3 mr-4 sm:mr-6"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-sm font-bold mt-4 sm:text-base">{project.title}</h3>

      {/* Adjusted description with line-clamp for 4 lines on desktop, 3 on mobile */}
      <p className="text-gray-600 dark:text-gray-400 mt-2 sm:text-sm text-xs line-clamp-4 sm:line-clamp-3">
        {project.description}
      </p>

      <div className="flex items-center mt-4 space-x-2">
        {technologyIcons.map((tech) => {
          if (project.technologies.includes(tech.name)) {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="border border-gray-500 rounded-full p-1 flex items-center justify-center"
              >
                <IconComponent className={tech.className} />
              </div>
            );
          }
          return null;
        })}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-4 text-blue-600 hover:underline text-xs sm:text-sm p-2 border border-gray-500 rounded-md"
      >
        Open Live Page <FaExternalLinkAlt className="ml-1" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
