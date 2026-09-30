import React from "react";
import Heading from "../Components/Heading";
import { BsBriefcase, BsCheckCircleFill } from "react-icons/bs";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = React.forwardRef(function Experience(props, ref) {
  const experiences = [
    {
      company: "EUROPA INFOTECH PVT. LTD.",
      role: "Fullstack Developer",
      location: "Surat, Gujarat",
      period: "June 2025 – Present",
      active: true,
      points: [
        "Developed responsive and user-friendly web applications using HTML, CSS, Tailwind CSS, JavaScript, React.js, and Node.js, improving UI consistency across devices.",
        "Collaborated in a 4-member agile team using Git for version control, contributing to a shared codebase with regular commits and structured code reviews.",
        "Contributed to backend development tasks, RESTful API integration, debugging, and performance optimization to improve application reliability.",
        "Boosted team productivity through consistent collaboration and knowledge sharing across frontend and backend workstreams."
      ],
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "Python",
        "Git",
        "GitHub",
        "REST APIs"
      ]
    }
  ];

  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      
      <div className="mt-8 space-y-6 stagger-reveal">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group relative bg-card border border-border-subtle hover:border-orange-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.12)] overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-orange-500/10 rounded-full blur-[70px] group-hover:bg-orange-500/20 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-border-subtle pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                      <BsBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-main group-hover:text-orange-500 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-muted pt-1">
                    <span className="font-semibold text-text-main flex items-center gap-1.5">
                      <FaBuilding className="text-orange-500 text-xs" /> {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-orange-500 text-xs" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    <FaCalendarAlt className="text-xs" /> {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <BsCheckCircleFill className="text-orange-500 text-sm mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="experience-bullet text-sm sm:text-base leading-relaxed font-inter font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="experience-tag text-xs font-medium px-3 py-1 rounded-full bg-surface border border-border-subtle transition-colors hover:border-orange-500/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Experience;
