import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import SkillCategoryCard from "../Components/SkillCategoryCard";
import {
  ReactIcon,
  TailwindIcon,
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  NextjsIcon,
  NodejsIcon,
  ExpressIcon,
  PostgresIcon,
  MongoIcon,
  SQLIcon,
  RestApiIcon,
  JWTIcon,
  PythonIcon,
  GitIcon,
  GitHubIcon,
  PostmanIcon,
  VSCodeIcon,
  NpmIcon,
  VercelIcon,
} from "../Components/TechIcons";
import { 
  CursorIcon, 
  AntigravityIcon, 
  ClaudeIcon, 
  CodexIcon, 
  AmazonQIcon, 
  CopilotIcon, 
  GrokIcon 
} from "../Components/AIIcons";

const categorizedSkills = {
  frontend: [
    { logo: <ReactIcon size={46} />, title: "React.js", color: "#00D8FF" },
    { logo: <TailwindIcon size={46} />, title: "Tailwind CSS", color: "#06B6D4" },
    { logo: <JavaScriptIcon size={44} />, title: "JavaScript", color: "#F7DF1E" },
    { logo: <HTML5Icon size={44} />, title: "HTML5", color: "#E34F26" },
    { logo: <CSS3Icon size={44} />, title: "CSS3", color: "#1572B6" },
    { logo: <NextjsIcon size={44} />, title: "Next.js", color: "#000000" },
  ],
  backend: [
    { logo: <NodejsIcon size={44} />, title: "Node.js", color: "#5FA04E" },
    { logo: <ExpressIcon size={44} />, title: "Express.js", color: "#000000" },
    { logo: <PostgresIcon size={44} />, title: "PostgreSQL", color: "#4169E1" },
    { logo: <MongoIcon size={44} />, title: "MongoDB", color: "#47A248" },
    { logo: <SQLIcon size={44} />, title: "SQL", color: "#0284C7" },
    { logo: <RestApiIcon size={44} />, title: "RESTful APIs", color: "#0284C7" },
    { logo: <JWTIcon size={44} />, title: "JWT & Auth", color: "#D63AFF" },
    { logo: <PythonIcon size={44} />, title: "Python", color: "#3776AB" },
  ],
  tools: [
    { logo: <GitIcon size={44} />, title: "Git", color: "#F05032" },
    { logo: <GitHubIcon size={44} />, title: "GitHub", color: "#181717" },
    { logo: <PostmanIcon size={44} />, title: "Postman", color: "#FF6C37" },
    { logo: <VSCodeIcon size={44} />, title: "VS Code", color: "#007ACC" },
    { logo: <NpmIcon size={44} />, title: "npm", color: "#CB3837" },
    { logo: <VercelIcon size={44} />, title: "Vercel", color: "#000000" },
  ],
  aiTools: [
    { logo: <CursorIcon size={44} />, title: "Cursor", color: "#121214" },
    { logo: <AntigravityIcon size={44} />, title: "Antigravity", color: "#A855F7" },
    { logo: <ClaudeIcon size={44} />, title: "Claude", color: "#D96B43" },
    { logo: <CodexIcon size={44} />, title: "Codex", color: "#000000" },
    { logo: <AmazonQIcon size={44} />, title: "Amazon Q", color: "#2563EB" },
    { logo: <CopilotIcon size={44} />, title: "Copilot", color: "#0284C7" },
    { logo: <GrokIcon size={44} />, title: "Grok", color: "#000000" },
  ]
};

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 stagger-reveal">
        {/* Frontend */}
        <SkillCategoryCard title="Frontend">
          {categorizedSkills.frontend.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </SkillCategoryCard>

        {/* Backend */}
        <SkillCategoryCard title="Backend & Databases">
          {categorizedSkills.backend.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </SkillCategoryCard>

        {/* Developer Tools */}
        <SkillCategoryCard title="Developer Tools">
          {categorizedSkills.tools.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </SkillCategoryCard>

        {/* AI-Assisted Engineering */}
        <SkillCategoryCard title="AI-Assisted Engineering">
          {categorizedSkills.aiTools.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </SkillCategoryCard>
      </div>
    </section>
  );
});

export default Skills;
