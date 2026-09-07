import React from "react";
import { GoHome, GoFileSubmodule } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function Navbar({
  isDocked,
  activeSection,
  onHomeClick,
  onProjectsClick,
  onExperienceClick,
  onSkillsClick,
  onContactClick,
}) {
  const navItems = [
    { icon: GoHome, label: "home", onClick: onHomeClick },
    { icon: GoFileSubmodule, label: "projects", onClick: onProjectsClick },
    { icon: CgWorkAlt, label: "experience", onClick: onExperienceClick },
    { icon: GrTechnology, label: "skills", onClick: onSkillsClick },
    { icon: LuNotebookPen, label: "contact", onClick: onContactClick },
  ];

  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`nav-dock-animate text-2xl lg:text-xl gap-2 bg-surface/90 backdrop-blur-md h-auto flex items-center px-3 py-1.5 rounded-2xl border border-border-strong shadow-xl ${isDocked ? "flex-row lg:flex-col w-auto" : "flex-row w-auto"
        }`}
    >
      {navItems.map(({ icon: Icon, label, onClick }, i) => {
        const isActive = activeSection === label;
        return (
          <button
            key={i}
            type="button"
            onClick={onClick}
            aria-label={`Go to ${label} section`}
            title={label.charAt(0).toUpperCase() + label.slice(1)}
            className={`group relative rounded-xl p-2.5 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 active:scale-90 ${isActive ? "text-orange-500 bg-orange-500/10" : "text-text-main"
              }`}
          >
            <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
        );
      })}
      
      {/* Theme Toggle Button */}
      <div className={`w-[1px] bg-border-strong mx-1 ${isDocked ? "h-6 lg:w-6 lg:h-[1px]" : "h-6"}`}></div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title="Toggle Theme"
        className="group relative rounded-xl p-2.5 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 active:scale-90 text-text-main"
      >
        {theme === 'dark' ? (
          <FiSun size={20} className="transition-transform duration-300 group-hover:scale-110" />
        ) : (
          <FiMoon size={20} className="transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
