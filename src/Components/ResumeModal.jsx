import React, { useState } from "react";
import { FaDownload, FaPrint, FaCopy, FaCheck, FaTimes, FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaTrophy, FaCode, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Satish_Jadav_Resume.pdf";
    link.download = "Satish_Jadav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMarkdown = () => {
    const resumeText = `# SATISH JADAV
Surat, Gujarat | +91-9723818557 | satishjadav700@gmail.com
LinkedIn: https://linkedin.com/in/satish-jadav-7716562a1 | GitHub: https://github.com/satishjadav01

## PROFESSIONAL SUMMARY
Full-stack developer with hands-on experience building responsive web applications and RESTful APIs using React.js, Node.js, Express.js, PostgreSQL, and MongoDB. Proven track record delivering end-to-end features – including JWT authentication systems, role-based admin dashboards, and automated workflows – for a full-stack platform serving multiple user roles.

## TECHNICAL SKILLS
- Programming Languages: JavaScript , Python (Basic)
- Frontend: React.js, HTML5, CSS3, Tailwind CSS, Responsive Web Design
- Backend: Node.js, Express.js, RESTful APIs, JWT, Authentication & Authorization
- Databases: PostgreSQL, MongoDB, SQL
- Developer Tools: Git, GitHub, VS Code, Postman, npm

## EXPERIENCE
EUROPA INFOTECH PVT. LTD. | June 2025 – Present
Fullstack Developer | Surat, Gujarat
• Developed responsive and user-friendly web applications using HTML, CSS, Tailwind CSS, JavaScript, React.js, and Node.js, improving UI consistency across devices.
• Collaborated in a 4-member team using Git for version control, contributing to a shared codebase with regular commits and code reviews.
• Contributed to backend development tasks, RESTful API integration, debugging, and performance optimization to improve application reliability.
• Boosted team productivity through consistent collaboration and knowledge sharing across frontend and backend workstreams.

## PROJECTS
Review Management System (MegaReview)
Technologies: React.js, Node.js, Express.js, PostgreSQL, JWT, Tailwind CSS
• Built a full-stack Review Management platform supporting 2 user roles (User/Super Admin) to manage brands, customers, and reviews across multiple businesses.
• Implemented role-based authentication and authorization using React.js, Node.js, and JWT, with separate User/Super Admin access controls and secure login and registration flows, reducing unauthorized access risk.
• Built an end-to-end review collection system with unique review links, public customer review pages, rating/feedback management, review moderation, and centralized review monitoring, streamlining the review-to-publish workflow.
• Developed 6 comprehensive admin modules (Brand, Customer, Review, Review Link, Settings, Super Admin) including full CRUD operations and dashboard-level analytics for real-time performance tracking.
• Implemented automated communication workflows using Nodemailer/Resend with Email and WhatsApp integration, plus database seeding and bulk-processing scripts, cutting manual outreach effort for scalable operations.

## EDUCATION
Bhakta Kavi Narsinh Mehta University | Jun 2022 – Apr 2025
Bachelor of Computer Application - CGPA - 8.5 | Bhacha, Gujarat

Gayatri Vidhyalaya School | Apr 2022
HSC - Percentage - 77.23% | Chalala, Gujarat

## ACHIEVEMENTS
• Finalist among 100+ participants in BKNMU University Hackathon.
• Secured 3rd rank in the Coding Event competition at college.

## LANGUAGES & INTERESTS
• Languages: English, Hindi, Gujarati
• Interests: Cricket, learning new technologies, problem-solving, mentoring peers
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div 
        className="relative w-full max-w-4xl bg-surface border border-border-strong rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Actions bar (hidden in print) */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-border-subtle bg-surface-hover/80 sticky top-0 z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
            <h2 className="text-lg sm:text-xl font-bold text-text-main">
              Satish Jadav — Resume
            </h2>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-surface border border-border-subtle hover:border-orange-500 hover:text-orange-500 transition-colors text-text-muted"
              title="Copy as Markdown"
            >
              {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
              <span>{copied ? "Copied!" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-surface border border-border-subtle hover:border-orange-500 hover:text-orange-500 transition-colors text-text-muted"
              title="Print or Save as PDF"
            >
              <FaPrint />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
            >
              <FaDownload />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-surface hover:bg-red-500/10 hover:text-red-500 text-text-muted border border-border-subtle transition-colors ml-1"
              aria-label="Close"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Body */}
        <div className="overflow-y-auto p-4 sm:p-8 md:p-10 space-y-6 text-text-main font-inter printable-resume bg-surface">
          {/* Header */}
          <div className="text-center border-b border-border-subtle pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-text-main">
              Satish Jadav
            </h1>
            <p className="text-sm font-medium text-orange-500 flex items-center justify-center gap-1">
              <FaMapMarkerAlt className="text-xs" /> Surat, Gujarat, India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-text-muted pt-1">
              <a href="tel:+919723818557" className="hover:text-orange-500 flex items-center gap-1.5 transition-colors">
                <FaPhone className="text-xs" /> +91-9723818557
              </a>
              <span>•</span>
              <a href="mailto:satishjadav700@gmail.com" className="hover:text-orange-500 flex items-center gap-1.5 transition-colors">
                <FaEnvelope className="text-xs" /> satishjadav700@gmail.com
              </a>
              <span>•</span>
              <a href="https://linkedin.com/in/satish-jadav-7716562a1" target="_blank" rel="noreferrer" className="hover:text-orange-500 flex items-center gap-1.5 transition-colors">
                <FaLinkedin className="text-xs text-[#0A66C2]" /> LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com/satishjadav01" target="_blank" rel="noreferrer" className="hover:text-orange-500 flex items-center gap-1.5 transition-colors">
                <FaGithub className="text-xs" /> GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2 border-b border-border-subtle pb-1">
              Professional Summary
            </h3>
            <p className="text-sm text-text-muted leading-relaxed text-justify">
              Full-stack developer with hands-on experience building responsive web applications and RESTful APIs using <strong className="text-text-main font-semibold">React.js, Node.js, Express.js, PostgreSQL, and MongoDB</strong>. Proven track record delivering end-to-end features – including JWT authentication systems, role-based admin dashboards, and automated workflows – for a full-stack platform serving multiple user roles.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2 border-b border-border-subtle pb-1">
              <FaCode className="text-xs" /> Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="p-2.5 rounded-xl bg-card border border-border-subtle">
                <span className="font-semibold text-text-main">Programming Languages: </span>
                <span className="text-text-muted">JavaScript, Python (Basic), HTML5, CSS3</span>
              </div>
              <div className="p-2.5 rounded-xl bg-card border border-border-subtle">
                <span className="font-semibold text-text-main">Frontend: </span>
                <span className="text-text-muted">React.js, Next.js, Tailwind CSS, Responsive Web Design</span>
              </div>
              <div className="p-2.5 rounded-xl bg-card border border-border-subtle">
                <span className="font-semibold text-text-main">Backend & APIs: </span>
                <span className="text-text-muted">Node.js, Express.js, RESTful APIs, JWT, Auth & Authorization</span>
              </div>
              <div className="p-2.5 rounded-xl bg-card border border-border-subtle">
                <span className="font-semibold text-text-main">Databases & Tools: </span>
                <span className="text-text-muted">PostgreSQL, MongoDB, SQL, Git, GitHub, VS Code, Postman, npm</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2 border-b border-border-subtle pb-1">
              <FaBriefcase className="text-xs" /> Work Experience
            </h3>

            <div className="p-4 rounded-xl bg-card border border-border-subtle space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="font-bold text-base text-text-main">EUROPA INFOTECH PVT. LTD.</h4>
                  <p className="text-xs sm:text-sm font-medium text-orange-500">Fullstack Developer • Surat, Gujarat</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface text-text-muted border border-border-subtle w-fit">
                  June 2025 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-text-muted pt-1">
                <li>Developed responsive and user-friendly web applications using <strong className="text-text-main">HTML, CSS, Tailwind CSS, JavaScript, React.js, and Node.js</strong>, improving UI consistency across devices.</li>
                <li>Collaborated in a 4-member agile team using <strong className="text-text-main">Git</strong> for version control, contributing to a shared codebase with regular commits and structured code reviews.</li>
                <li>Contributed to backend development tasks, <strong className="text-text-main">RESTful API integration</strong>, debugging, and performance optimization to improve application reliability.</li>
                <li>Boosted team productivity through consistent collaboration and knowledge sharing across frontend and backend workstreams.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2 border-b border-border-subtle pb-1">
              Key Projects
            </h3>

            <div className="p-4 rounded-xl bg-card border border-border-subtle space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base text-text-main">Review Management System (MegaReview)</h4>
                  <a href="https://github.com/satishjadav01/Review-web-app" target="_blank" rel="noreferrer" className="text-xs text-orange-500 hover:underline inline-flex items-center gap-1">
                    <FaExternalLinkAlt size={10} /> GitHub
                  </a>
                </div>
              </div>
              <p className="text-xs font-semibold text-orange-500">
                Technologies: React.js, Node.js, Express.js, PostgreSQL, JWT, Tailwind CSS
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-text-muted">
                <li>Built a full-stack Review Management platform supporting 2 user roles (User/Super Admin) to manage brands, customers, and reviews across multiple businesses.</li>
                <li>Implemented role-based authentication and authorization using React.js, Node.js, and JWT, with separate User/Super Admin access controls and secure login/registration flows.</li>
                <li>Built an end-to-end review collection system with unique review links, public customer review pages, rating/feedback management, review moderation, and centralized monitoring.</li>
                <li>Developed 6 comprehensive admin modules (Brand, Customer, Review, Review Link, Settings, Super Admin) including full CRUD operations and real-time dashboard analytics.</li>
                <li>Implemented automated communication workflows using Nodemailer/Resend with Email and WhatsApp integration plus automated processing scripts.</li>
              </ul>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2 border-b border-border-subtle pb-1">
                <FaGraduationCap className="text-xs" /> Education
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-card border border-border-subtle">
                  <h5 className="font-bold text-xs sm:text-sm text-text-main">Bhakta Kavi Narsinh Mehta University</h5>
                  <p className="text-xs text-orange-500 font-medium">Bachelor of Computer Application (BCA)</p>
                  <div className="flex justify-between text-[11px] text-text-muted mt-1">
                    <span>CGPA: <strong>8.5 / 10</strong></span>
                    <span>Jun 2022 – Apr 2025</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border-subtle">
                  <h5 className="font-bold text-xs sm:text-sm text-text-main">Gayatri Vidhyalaya School</h5>
                  <p className="text-xs text-orange-500 font-medium">HSC (Higher Secondary)</p>
                  <div className="flex justify-between text-[11px] text-text-muted mt-1">
                    <span>Percentage: <strong>77.23%</strong></span>
                    <span>Apr 2022</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 flex items-center gap-2 border-b border-border-subtle pb-1">
                <FaTrophy className="text-xs" /> Achievements & Interests
              </h3>
              <div className="p-3 rounded-xl bg-card border border-border-subtle space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-text-main">Achievements:</span>
                  <ul className="list-disc list-inside text-xs text-text-muted mt-1 space-y-1">
                    <li>Finalist among 100+ participants in BKNMU University Hackathon.</li>
                    <li>Secured 3rd rank in the Coding Event competition at college.</li>
                  </ul>
                </div>
                <div className="pt-1 border-t border-border-subtle">
                  <span className="font-semibold text-text-main">Languages: </span>
                  <span className="text-text-muted text-xs">English, Hindi, Gujarati</span>
                </div>
                <div>
                  <span className="font-semibold text-text-main">Interests: </span>
                  <span className="text-text-muted text-xs">Cricket, New Tech, Problem-Solving, Mentoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
