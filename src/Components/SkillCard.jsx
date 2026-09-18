import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

function SkillCard({ logo, title, color }) {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  const showColor = theme === 'light' || hovered;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-center justify-center py-4 px-2 gap-3 rounded-2xl transition-colors duration-300 border cursor-default group overflow-hidden w-full"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: showColor ? `${color}40` : "var(--border-color)",
        boxShadow: showColor ? `0 8px 25px -10px ${color}25` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl"
        animate={{ 
          scale: hovered ? 1.15 : 1,
          rotate: hovered ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          color: showColor ? color : "var(--text-muted)",
          filter: showColor ? `drop-shadow(0 0 12px ${color}50)` : "none"
        }}
      >
        {logo}
      </motion.div>

      {/* Title */}
      <h3
        className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wide uppercase transition-colors duration-300 text-center whitespace-nowrap w-full px-1"
        style={{ color: showColor ? color : "var(--text-secondary)" }}
      >
        {title}
      </h3>
    </motion.div>
  );
}

export default SkillCard;
