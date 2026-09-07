import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import SkillCategoryCard from "../Components/SkillCategoryCard";
import { FaReact, FaGithub, FaNodeJs, FaPython, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { SiPostman, SiVercel, SiPostgresql, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

const categorizedSkills = {
  frontend: [
    { logo: <FaReact />, title: "React JS", color: "#61DAFB" },
    { logo: <RiTailwindCssFill />, title: "TailWind", color: "#06B6D4" },
    { logo: <RiNextjsLine />, title: "Next JS", color: "#FFFFFF" },
    { logo: <FaHtml5 />, title: "HTML5", color: "#E34F26" },
    { logo: <IoLogoCss3 />, title: "CSS", color: "#264DE4" },
    { logo: <IoLogoJavascript />, title: "JavaScript", color: "#F7DF1E" },
  ],
  backend: [
    { logo: <FaNodeJs />, title: "Node.js", color: "#339933" },
    { logo: <FaPython />, title: "Python", color: "#3776AB" },
    { logo: <SiPostgresql />, title: "PostgreSQL", color: "#336791" },
    { logo: <SiMongodb />, title: "MongoDB", color: "#47A248" },
    { logo: <TbApi />, title: "REST API", color: "#0096D6" },
  ],
  tools: [
    { logo: <FaGitAlt />, title: "Git", color: "#F05032" },
    { logo: <FaGithub />, title: "Github", color: "#E6EDF3" },
    { logo: <SiVercel />, title: "Vercel", color: "#FFFFFF" },
    { logo: <SiPostman />, title: "Postman", color: "#FF6C37" },
  ]
};

const Skills = React.forwardRef(function Skills(props, ref) {
  const { theme } = useTheme();

  const adaptColor = (color) => {
    return theme === 'light' && (color === '#FFFFFF' || color === '#E6EDF3') ? '#000000' : color;
  };

  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 stagger-reveal">
        {/* Frontend */}
        <SkillCategoryCard title="Frontend">
          {categorizedSkills.frontend.map((skill, i) => (
            <SkillCard key={i} {...skill} color={adaptColor(skill.color)} />
          ))}
        </SkillCategoryCard>

        {/* Backend */}
        <SkillCategoryCard title="Backend">
          {categorizedSkills.backend.map((skill, i) => (
            <SkillCard key={i} {...skill} color={adaptColor(skill.color)} />
          ))}
        </SkillCategoryCard>

        {/* Tools */}
        <SkillCategoryCard title="Tools">
          {categorizedSkills.tools.map((skill, i) => (
            <SkillCard key={i} {...skill} color={adaptColor(skill.color)} />
          ))}
        </SkillCategoryCard>
      </div>
    </section>
  );
});

export default Skills;
