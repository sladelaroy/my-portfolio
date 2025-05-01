import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { techSVGs } from "../../assets/svg/assets";

const techIcons = Object.values(techSVGs);

// Function to generate grid-based symmetrical positions
const generateSymmetricalPositions = (count, screenWidth) => {
  const positions = [];
  const rows = Math.ceil(Math.sqrt(count)); // Calculate rows based on the number of icons
  const cols = rows; // Use a square grid for symmetry
  const spacing = screenWidth < 768 ? 100 / rows : 100 / cols; // Adjust spacing based on screen size

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols / 2; col++) {
      const top = row * spacing + Math.random() * (spacing / 2); // Randomize within the grid cell
      const left = col * spacing + Math.random() * (spacing / 2); // Randomize within the grid cell
      positions.push({ top, left });
    }
  }

  return positions;
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const FloatingIcons = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    const debouncedResize = debounce(handleResize, 200); // Debounce by 200ms
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  const iconCount = screenWidth < 768 ? 30 : 60; // 30 icons for mobile, 60 for desktop

  const icons = useMemo(() => {
    const positions = generateSymmetricalPositions(iconCount, screenWidth);
    return positions.flatMap(({ top, left }, i) => {
      const mirroredLeft = 100 - left; // Mirror the position for the right half
      const size = screenWidth < 768 ? 30 + Math.random() * 20 : 50 + Math.random() * 30; // Adjust size for mobile and desktop
      const delay = Math.random() * 4;
      return [
        { id: `${i}-left`, src: techIcons[i % techIcons.length], top: `${top}%`, left: `${left}%`, size, delay },
        { id: `${i}-right`, src: techIcons[(i + 1) % techIcons.length], top: `${top}%`, left: `${mirroredLeft}%`, size, delay },
      ];
    });
  }, [screenWidth]);

  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
      {icons.map(({ id, src, top, left, size, delay }) => (
        <motion.div
          key={id}
          className="absolute"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 0.6, 0], y: [10, -10, 10] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
          style={{
            top,
            left,
            width: size,
            height: size,
          }}
        >
          <Image src={src} alt="tech-icon" width={size} height={size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
