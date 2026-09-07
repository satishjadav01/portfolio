import React, { useState } from "react";
import Heading from "../Components/Heading";
import { IoIosArrowForward } from "react-icons/io";
import RecentProjectCard from "../Components/RecentProjectCard";
import { projects } from "../data/projects.jsx";

const RecentProjects = React.forwardRef(function RecentProjects(props, ref) {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const hasMore = visibleCount < projects.length;

  return (
    <section ref={ref} data-name="RecentProjects" className="scroll-mt-28 flex flex-col gap-10">
      <div>
        <Heading FWord="RECENT" LWord="PROJECTS" />
      </div>

      <div className="flex flex-col gap-2 relative stagger-reveal">
        {/* Vertical connector line */}
        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-px bg-white/[0.03] z-0 hidden lg:block" />

        {projects.slice(0, visibleCount).map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block"
          >
            <RecentProjectCard
              pic={project.pic}
              heading={project.heading}
              discr={project.discr}
              tags={project.tags}
            />
          </a>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreProjects}
            className="group relative px-8 py-3 rounded-full bg-surface border border-border-subtle text-text-main font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <IoIosArrowForward className="transition-transform duration-500 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
        </div>
      )}
    </section>
  );
});

export default RecentProjects;

