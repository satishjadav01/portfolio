import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    id: 3,
    link: "https://quiz-sooty-sigma-47.vercel.app/homepage",
    pic: "project2.png",
    heading: "Quiz App",
    discr: "A Simple Quiz Application",
    tags: [
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  }
];
