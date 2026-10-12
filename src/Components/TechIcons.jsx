import React from "react";

// ==================== FRONTEND ICONS ====================

// 1. React.js: Official Cyan Atom
export const ReactIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 115 100" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="57.5" cy="50" rx="10" ry="10" fill="#00D8FF" />
    <g stroke="#00D8FF" strokeWidth="6" fill="none">
      <ellipse cx="57.5" cy="50" rx="52" ry="20" />
      <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(60 57.5 50)" />
      <ellipse cx="57.5" cy="50" rx="52" ry="20" transform="rotate(120 57.5 50)" />
    </g>
  </svg>
);

// 2. Tailwind CSS: Official Cyan Dual Wave
export const TailwindIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M17.5 25.5C19.5 17.5 25.5 13.5 35.5 13.5C48 13.5 50.5 22.5 56.5 24.5C60.5 25.8 63.5 23.5 65.5 17.5C63.5 25.5 57.5 29.5 47.5 29.5C35 29.5 32.5 20.5 26.5 18.5C22.5 17.2 19.5 19.5 17.5 25.5ZM-0.5 45.5C1.5 37.5 7.5 33.5 17.5 33.5C30 33.5 32.5 42.5 38.5 44.5C42.5 45.8 45.5 43.5 47.5 37.5C45.5 45.5 39.5 49.5 29.5 49.5C17 49.5 14.5 40.5 8.5 38.5C4.5 37.2 1.5 39.5 -0.5 45.5Z"
      fill="#06B6D4"
      transform="scale(0.85) translate(4, 5)"
    />
  </svg>
);

// 3. JavaScript: Official SimpleIcons Yellow Badge
export const JavaScriptIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);

// 3b. TypeScript: Official SimpleIcons Blue Badge
export const TypeScriptIcon = ({ size = "1em", className = "", color = "#3178C6" }) => (
  <SiTypescript size={size} className={className} color={color} />
);

// 4. HTML5: Official Orange Shield with White '5'
export const HTML5Icon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9 6L14 55.5L32 60.5L50 55.5L55 6H9Z" fill="#E34F26" />
    <path d="M32 57V9.5H51.5L47.5 52.5L32 57Z" fill="#EF652A" />
    <path d="M32 24.5H20.5L20 18H32V12H13.5L15.5 31H32V24.5ZM32 43.5L24.5 41.5L24 35H18L19 46.5L32 50V43.5Z" fill="#EBEBEB" />
    <path d="M32 24.5V31H43L42 41.5L32 43.5V50L45 46.5L46.5 31L47 24.5H32ZM32 12V18H50.5L51 12H32Z" fill="#FFFFFF" />
  </svg>
);

// 5. CSS3: Official Blue Shield with White '3'
export const CSS3Icon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9 6L14 55.5L32 60.5L50 55.5L55 6H9Z" fill="#1572B6" />
    <path d="M32 57V9.5H51.5L47.5 52.5L32 57Z" fill="#33A9DC" />
    <path d="M32 24H22.5L23 31H32V37H23.5L24 43.5L32 45.7V52L20 48.7L18.5 28L18 18H32V24Z" fill="#EBEBEB" />
    <path d="M32 24V18H46L45.5 24H32ZM32 31V37H44.5L43.5 48.7L32 52V45.7L39.5 43.5L40 37H32V31H45L45.5 24H32Z" fill="#FFFFFF" />
  </svg>
);

// 6. Next.js: Official Black Circle with White 'N'
export const NextjsIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="32" fill="#000000" />
    <path
      d="M43.5 46.5L25 22.8H21V41.2H24.5V27.5L40.8 48.2C41.8 47.7 42.7 47.1 43.5 46.5ZM43 22.8H39.5V36.2L43 40.8V22.8Z"
      fill="#FFFFFF"
    />
  </svg>
);


import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiJsonwebtokens, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

// ==================== BACKEND & DATABASE ICONS ====================

// 7. Node.js: Official Green Hexagon Logo with JS
export const NodejsIcon = ({ size = "1em", className = "", color = "#5FA04E" }) => (
  <FaNodeJs size={size} className={className} color={color} />
);

// 8. Express.js: Official SimpleIcons Vector
export const ExpressIcon = ({ size = "1em", className = "", color = "currentColor" }) => (
  <SiExpress size={size} className={className} color={color} />
);

// 9. PostgreSQL: Official Blue Elephant Outline
export const PostgresIcon = ({ size = "1em", className = "", color = "#4169E1" }) => (
  <BiLogoPostgresql size={size} className={className} color={color} />
);

// 10. MongoDB: Official Green Leaf
export const MongoIcon = ({ size = "1em", className = "", color = "#47A248" }) => (
  <SiMongodb size={size} className={className} color={color} />
);

// 11. SQL: Cylinder Database (3 blue stacked disks)
export const SQLIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g fill="#0284C7">
      <ellipse cx="32" cy="14" rx="19" ry="7.5" fill="#0284C7" />
      <path d="M13 14V26C13 30.1 21.5 33.5 32 33.5C42.5 33.5 51 30.1 51 26V14C51 18.1 42.5 21.5 32 21.5C21.5 21.5 13 18.1 13 14Z" fill="#0369A1" />
      <ellipse cx="32" cy="26" rx="19" ry="7.5" fill="#0284C7" />
      <path d="M13 26V38C13 42.1 21.5 45.5 32 45.5C42.5 45.5 51 42.1 51 38V26C51 30.1 42.5 33.5 32 33.5C21.5 33.5 13 30.1 13 26Z" fill="#0369A1" />
      <ellipse cx="32" cy="38" rx="19" ry="7.5" fill="#0284C7" />
      <path d="M13 38V50C13 54.1 21.5 57.5 32 57.5C42.5 57.5 51 54.1 51 50V38C51 42.1 42.5 45.5 32 45.5C21.5 45.5 13 42.1 13 38Z" fill="#075985" />
    </g>
    <ellipse cx="32" cy="14" rx="19" ry="7.5" stroke="#38BDF8" strokeWidth="2" />
  </svg>
);

// 12. RESTful APIs: Official {API} logo
export const RestApiIcon = ({ size = "1em", className = "", color = "#0284C7" }) => (
  <TbApi size={size} className={className} color={color} />
);

// 13. JWT & Auth: Official SimpleIcons JSON Web Tokens
export const JWTIcon = ({ size = "1em", className = "", color = "#D63AFF" }) => (
  <SiJsonwebtokens size={size} className={className} color={color} />
);

// 14. Python: Official Blue & Yellow Interlocking Snakes
export const PythonIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M31.5 6C20 6 21 11 21 11L21 16H32V18H15C8 18 8 26 8 26L8 31C8 36 13 36 13 36H17V32C17 28 20 25 24 25H35C39 25 41 22 41 18V11C41 6 35 6 31.5 6ZM26 10C27.1 10 28 10.9 28 12C28 13.1 27.1 14 26 14C24.9 14 24 13.1 24 12C24 10.9 24.9 10 26 10Z"
      fill="#3776AB"
    />
    <path
      d="M32.5 58C44 58 43 53 43 53L43 48H32V46H49C56 46 56 38 56 38L56 33C56 28 51 28 51 28H47V32C47 36 44 39 40 39H29C25 39 23 42 23 46V53C23 58 29 58 32.5 58ZM38 54C36.9 54 36 53.1 36 52C36 50.9 36.9 50 38 50C39.1 50 40 50.9 40 52C40 53.1 39.1 54 38 54Z"
      fill="#FFD438"
    />
  </svg>
);


// ==================== DEVELOPER TOOLS ICONS ====================

// 15. Git: Official SimpleIcons Branch Diamond
export const GitIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#F05032" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z" />
  </svg>
);

// 16. GitHub: Official Black Octocat Silhouette
export const GitHubIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="30" fill="#181717" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 14C22.06 14 14 22.06 14 32C14 39.95 19.16 46.7 26.31 49.07C27.21 49.24 27.54 48.68 27.54 48.2C27.54 47.78 27.52 46.43 27.52 44.97C22.51 46.06 21.46 42.84 21.46 42.84C20.64 40.77 19.47 40.22 19.47 40.22C17.84 39.11 19.6 39.13 19.6 39.13C21.4 39.26 22.35 40.98 22.35 40.98C23.95 43.72 26.56 42.93 27.58 42.47C27.75 41.31 28.21 40.52 28.72 40.07C24.72 39.62 20.52 38.07 20.52 31.18C20.52 29.22 21.22 27.61 22.37 26.35C22.18 25.9 21.57 24.07 22.54 21.61C22.54 21.61 24.05 21.13 27.48 23.45C28.91 23.05 30.45 22.85 31.99 22.85C33.53 22.85 35.07 23.05 36.51 23.45C39.93 21.13 41.44 21.61 41.44 21.61C42.41 24.07 41.8 25.9 41.62 26.35C42.77 27.61 43.46 29.22 43.46 31.18C43.46 38.09 39.24 39.61 35.23 40.05C35.87 40.6 36.45 41.69 36.45 43.37C36.45 45.78 36.43 47.72 36.43 48.2C36.43 48.69 36.75 49.25 37.67 49.07C44.83 46.68 50 39.94 50 32C50 22.06 41.94 14 32 14Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 17. Postman: Official SimpleIcons Astronaut Badge
export const PostmanIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#FF6C37" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
  </svg>
);

// 18. VS Code: Official brand image
export const VSCodeIcon = ({ size = "1em", className = "" }) => (
  <img
    src="https://img.icons8.com/color/1200/visual-studio-code-2019.jpg"
    alt="VS Code"
    width={size}
    height={size}
    className={className}
    style={{ objectFit: "contain", borderRadius: "8px" }}
  />
);

// 19. npm: Official SimpleIcons Red Box
export const NpmIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#CB3837" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
  </svg>
);

// 20. Vercel: Solid Black Triangle
export const VercelIcon = ({ size = "1em", className = "" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="32,10 58,54 6,54" fill="currentColor" />
  </svg>
);
