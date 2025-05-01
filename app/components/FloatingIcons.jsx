import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { techSVGs } from "../../assets/svg/assets";

const techIcons = Object.values(techSVGs);

// Function to generate unique symmetrical positions
const generateSymmetricalPositions = (count, screenWidth) => {
  const positions = [];
  const spacing = screenWidth < 768 ? 20 : 15; // Adjust spacing for mobile and desktop

  while (positions.length < count) {
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

const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Update screen width on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const iconCount = screenWidth < 768 ? 10 : 25; // Fewer icons for mobile screens
    const positions = generateSymmetricalPositions(iconCount, screenWidth);

    const generatedIcons = positions.flatMap(({ top, left }, i) => {
      const mirroredLeft = 100 - left; // Mirror the position for the right half
      const size = screenWidth < 768 ? 20 + Math.random() * 20 : 40 + Math.random() * 50; // Smaller size for mobile
      const delay = Math.random() * 5; // Random animation delay

      return [
        {
          id: `${i}-left`,
          src: techIcons[i % techIcons.length],
          top: `${top}%`,
          left: `${left}%`,
          size,
          delay,
        },
        {
          id: `${i}-right`,
          src: techIcons[(i + 1) % techIcons.length], // Change the icon for the mirrored side
          top: `${top}%`,
          left: `${mirroredLeft}%`,
          size,
          delay,
        },
      ];
    });

    setIcons(generatedIcons);
  }, [screenWidth]);

  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
      {icons.map(({ id, src, top, left, size, delay }) => (
        <motion.div
          key={id}
          className="absolute"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 0.4, 0], y: [10, -10, 10] }}
          transition={{
            duration: 6,
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
