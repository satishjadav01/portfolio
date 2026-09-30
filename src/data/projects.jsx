import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiPrisma,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import React from "react";

export const projects = [
  {
    id: 1,
    link: "https://github.com/satishjadav01/Review-web-app",
    pic: "megareview.png",
    heading: "Review Management System (MegaReview)",
    discr: "Full-stack SaaS review platform supporting 2 user roles (User/Super Admin) with JWT authentication, 6 modular admin dashboards, unique collection links, and automated Nodemailer/WhatsApp review workflows.",
    tags: [
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
  {
    id: 2,
    link: "https://github.com/satishjadav01/BudgetDesk_System",
    pic: "ledgerflow.png",
    heading: "Budget Desk System",
    discr: "Full-stack financial workspace for invoice generation, expense tracking, real-time analytics, and client-ready PDF exports.",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Django", icon: <SiDjango color="#092E20" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
  {
    id: 3,
    link: "https://github.com/satishjadav01/cosmic-insight",
    pic: "cosmic-insight.png",
    heading: "Cosmic Insight",
    discr: "Astrology, Numerology & Marriage Compatibility Engine with automated PDF report generation.",
    tags: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Django", icon: <SiDjango color="#092E20" /> },
      { name: "REST API", icon: <TbApi color="#0096D6" /> },
    ],
  },
  {
    id: 4,
    link: "https://github.com/satishjadav01/quizmaster",
    pic: "project2.png",
    heading: "Quiz App",
    discr: "Interactive quiz platform with category selection, real-time scoring, and state management.",
    tags: [
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  }
];
