import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { techSVGs } from "../../assets/svg/assets";

const techIcons = Object.values(techSVGs);

// Function to generate unique symmetrical positions
const generateSymmetricalPositions = (count, screenWidth) => {
  const positions = [];
  const spacing = screenWidth < 768 ? 12 : 8; // Adjust spacing for mobile and desktop

  while (positions.length < count && positions.length < 1000) {
    const top = Math.random() * 100; // Random top position (0% to 100%)
    const left = Math.random() * 50; // Random left position (0% to 50%)
    const overlap = positions.some(
      (pos) =>
        Math.abs(pos.top - top) < spacing && Math.abs(pos.left - left) < spacing // Prevent overlap
    );

    if (!overlap) {
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

  const iconCount = screenWidth < 768 ? 20 : 40; // Increase icon count for mobile and desktop

  const icons = useMemo(() => {
    const positions = generateSymmetricalPositions(iconCount, screenWidth);
    return positions.flatMap(({ top, left }, i) => {
      const mirroredLeft = 100 - left;
      const size = screenWidth < 768 ? 25 + Math.random() * 15 : 40 + Math.random() * 20; // Adjust size for mobile and desktop
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
