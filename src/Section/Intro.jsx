import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { FaCode, FaFileAlt } from "react-icons/fa";
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

const Intro = React.forwardRef(function Intro({ onOpenResume }, ref) {
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
        <Heading FWord="FULLSTACK" LWord="DEVELOPER" />
      </motion.div>

      <motion.div variants={itemVariants} className="md:pr-20 lg:pr-45 text-center md:text-left">
        <Paragraph para="Full-stack developer with hands-on experience building responsive web applications and RESTful APIs using React.js, Node.js, Express.js, PostgreSQL, and MongoDB. Proven track record delivering end-to-end features – including JWT authentication systems, role-based admin dashboards, and automated workflows." />
      </motion.div>

      {/* Stats & Resume CTA */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start w-full gap-8 md:gap-16 items-center">
        {[
          { count: "1.3", suffix: "+", label: "YEARS OF EXPERIENCE" },
          { count: "20", suffix: "+", label: "PROJECTS COMPLETED" },
          { count: "8.5", suffix: "", label: "BCA CGPA" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start group cursor-default">
            <h1 className={`${Hstyle} group-hover:text-orange-500 transition-all duration-300 flex items-baseline tracking-tight group-hover:scale-105 origin-center md:origin-left`}>
              <span>{stat.count}</span>
              {stat.suffix && (
                <span className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-bold ml-0.5">
                  {stat.suffix}
                </span>
              )}
            </h1>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-text-muted group-hover:text-text-main uppercase transition-colors duration-300 mt-1 text-center md:text-left leading-snug">
              {stat.label}
            </span>
            <div className="w-5 h-[2px] bg-orange-500/20 group-hover:w-10 group-hover:bg-orange-500 transition-all duration-300 rounded-full mt-2" />
          </div>
        ))}

        {/* View / Download Resume Button */}
        <div className="mt-4 md:mt-0 md:ml-auto flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
          >
            <FaFileAlt />
            View Resume
          </button>
        </div>
      </motion.div>

      {/* Stack Card */}
      <motion.div variants={itemVariants} className="flex gap-6 flex-col md:flex-row w-full stagger-reveal">
        <div className="group relative overflow-hidden min-h-[16rem] sm:min-h-[18rem] h-auto w-full bg-card backdrop-blur-xl border border-border-subtle rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:border-orange-400/40 hover:bg-orange-400/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)]">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-orange-400/10 rounded-full blur-[60px] group-hover:bg-orange-400/20 transition-all duration-700 pointer-events-none" />

          <div className="p-4 bg-orange-400/10 rounded-2xl w-fit border border-orange-400/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
            <FaCode size={28} />
          </div>

          <div className="relative z-10 my-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-orange-500 mb-1">Core Tech Stack</h3>
            <h2 className="text-text-main font-bold text-lg sm:text-xl md:text-2xl leading-snug">
              React.js, Node.js, Express.js, PostgreSQL, MongoDB, Tailwind CSS, <br className="hidden sm:block" />
              HTML5, JavaScript, Python, RESTful APIs, Git & GitHub
            </h2>
          </div>

          <div className="flex justify-end relative z-10">
            <button
              onClick={onOpenResume}
              className="h-12 w-12 flex items-center justify-center border border-border-strong bg-surface text-orange-500 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg group-hover:scale-110 cursor-pointer"
              title="View full resume"
            >
              <CiLocationArrow1 size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});

export default Intro;
