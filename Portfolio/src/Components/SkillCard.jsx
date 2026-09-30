import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

function SkillCard({ logo, title, color = "#f97316" }) {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-center justify-center py-5 px-2.5 gap-3 rounded-2xl transition-all duration-300 border cursor-default group overflow-hidden w-full bg-card hover:bg-surface-hover shadow-sm"
      style={{
        borderColor: hovered ? `${color}60` : "var(--border-color)",
        boxShadow: hovered ? `0 12px 28px -8px ${color}35` : "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon Container with authentic brand styling */}
      <motion.div
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-4xl md:text-5xl"
        animate={{
          scale: hovered ? 1.12 : 1,
          rotate: hovered ? 3 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          filter: hovered ? `drop-shadow(0 0 10px ${color}40)` : "none"
        }}
      >
        {logo}
      </motion.div>

      {/* Title */}
      <h3
        className="text-[11px] sm:text-xs font-bold tracking-tight text-center whitespace-nowrap w-full px-1 text-text-main group-hover:text-orange-500 transition-colors duration-200"
      >
        {title}
      </h3>
    </motion.div>
  );
}

export default SkillCard;
