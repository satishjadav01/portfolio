import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
                <ExperienceCard
          heading="Junior Fullstack Developer"
          para="Currently working as a Full-Stack Developer at a software house, contributing to the development of responsive and scalable web applications using HTML, CSS, JavaScript, React, Next.js, Node.js, and backend technologies. Involved in building user interfaces, developing APIs, integrating databases, and delivering end-to-end web solutions.
"
          date="April, 2026 – Present"
          active
        />
        <ExperienceCard
          heading="Fullstack Intern"
          para="Previously worked as a Full-Stack Intern at a software house, contributing to the development of responsive web applications using React, JavaScript, Node.js, and modern web technologies. Gained hands-on experience in frontend development, backend API integration, database interaction, and building end-to-end web solutions.

**Dec 2025 – Jul 2026**
"
          date="Dec , 2025 – April, 2026"
        />

      </div>
    </section>
  );
});

export default Experience;
