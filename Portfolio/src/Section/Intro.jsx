import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { FaCode } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";

const Hstyle = "text-text-main font-bold text-3xl lg:text-5xl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const Intro = React.forwardRef(function Intro(props, ref) {
  return (
    <motion.section
      ref={ref}
      data-name="Intro"
      className="scroll-mt-28 flex flex-col w-full gap-8 md:gap-10 items-center md:items-start pt-16 md:pt-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants}>
        <Heading FWord="SOFTWARE" LWord="ENGINEER" />
      </motion.div>

      <motion.div variants={itemVariants} className="md:pr-20 lg:pr-45 text-center md:text-left">
        <Paragraph para="Passionate about building products that are fast, intuitive, and built to scale. I combine strong frontend development with backend engineering to turn ideas into reliable, production-ready web applications." />
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start w-full gap-8 md:gap-20 items-center">
        {[
          { count: "1.5+", label: "YEARS OF EXPERIENCE" },
          { count: "20+", label: "PROJECTS COMPLETED" },
          // { count: "2+", label: "CLIENTS WORLDWIDE" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start group">
            <h1 className={`${Hstyle} group-hover:text-orange-500 transition-colors duration-300`}>
              {stat.count}
            </h1>
            <div className="max-w-[100px] md:max-w-none">
              <Paragraph para={stat.label} />
            </div>
          </div>
        ))}
        
        {/* Download CV Button */}
        <div className="mt-4 md:mt-0 md:ml-auto">
          <a
            href="/Muhammad_Abdullah.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 active:scale-95"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Skill cards */}
      {/* Stack Cards */}
      <motion.div variants={itemVariants} className="flex gap-6 flex-col md:flex-row w-full stagger-reveal">
        {/* Dev card */}
        <div className="group relative overflow-hidden h-72 w-full bg-card backdrop-blur-xl border border-border-subtle rounded-[2rem] p-10 flex flex-col justify-between transition-all duration-500 hover:border-green-400/40 hover:bg-green-400/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.15)]">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-green-400/10 rounded-full blur-[60px] group-hover:bg-green-400/20 transition-all duration-700 animate-float delay-1000"></div>

          <div className="p-4 bg-green-400/10 rounded-2xl w-fit border border-green-400/20 text-green-500 group-hover:bg-green-400 group-hover:text-black transition-all duration-500">
            <FaCode size={32} />
          </div>

          <div className="relative z-10">
            <h1 className="text-text-main font-bold text-[1.3rem] pt-2 leading-tight">
              HTML, CSS3, Javascript, React, <br /> Next, Tailwind, Node.js & Python
            </h1>
          </div>

          <div className="flex justify-end relative z-10">
            <button className="h-12 w-12 flex items-center justify-center border border-border-strong bg-surface text-green-600 rounded-full hover:bg-green-400 hover:text-white hover:border-green-400 transition-all duration-300 shadow-lg group-hover:scale-110">
              <CiLocationArrow1 size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});

export default Intro;
