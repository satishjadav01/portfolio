import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiMail, FiPhone } from "react-icons/fi";
import AnimatedEye from "./AnimatedEye";
import ThemeToggle from "./ThemeToggle";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/satishjadav01",
    hoverColor: "#e6edf3",
  },
  {
    Icon: CiLinkedin,
    href: "https://www.linkedin.com/in/satish-jadav-7716562a1/",
    hoverColor: "#0A66C2",
  },
];

function Sidebar() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="animated-border relative flex flex-col p-[2px] rounded-2xl lg:sticky top-20 shadow-2xl">
      <div className="bg-surface p-5 lg:p-10 rounded-2xl items-center gap-8 flex flex-col relative">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        {/* Full image — no cropping, with reserved space & skeleton */}
        <div
          className="relative group w-[85%] mx-auto overflow-hidden rounded-2xl"
          style={{ aspectRatio: "1 / 1" }}
        >
          {/* Skeleton shimmer — visible until image loads */}
          {!imgLoaded && (
            <div className="sidebar-skeleton absolute inset-0 rounded-2xl" />
          )}
          <img
            src="/Media.jpg"
            alt="Satish Jadav"
            width={533}
            height={800}
            loading="eager"
            fetchpriority="high"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.03] ${imgLoaded ? "sidebar-img-visible" : "sidebar-img-hidden"
              }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-orange-500/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-text-main">
            Satish Jadav
          </h1>
          <div className="h-0.5 w-10 bg-orange-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Bio */}
        <div className="lg:mt-2">
          <p className="font-medium leading-7 text-text-muted text-center text-xl">
            A <span className="text-text-main">Software Engineer</span> who builds modern, scalable web applications.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-text-secondary w-full lg:mt-2 bg-card p-4 rounded-xl border border-border-subtle">
          <a href="mailto:satishjadav700@gmail.com" className="flex items-center gap-3 hover:text-orange-500 transition-colors duration-300">
            <FiMail className="text-lg shrink-0" />
            <span className="text-sm font-medium truncate">satishjadav700@gmail.com</span>
          </a>
          <a href="tel:+919723818557" className="flex items-center gap-3 hover:text-orange-500 transition-colors duration-300">
            <FiPhone className="text-lg shrink-0" />
            <span className="text-sm font-medium">+91 97238 18557</span>
          </a>
        </div>

        {/* Social icons — show original brand color on hover */}
        <div className="flex gap-4 text-2xl text-text-muted">
          {socialLinks.map(({ Icon, href, hoverColor }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 hover:-translate-y-1 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Download CV — white default, orange on hover */}
        <a
          href="/Muhammad_Abdullah.pdf"
          download
          className="relative overflow-hidden group text-center w-full bg-surface-hover border border-border-strong text-text-main font-semibold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 block uppercase tracking-widest text-sm"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Download CV
            <AnimatedEye size={20} className="text-text-main group-hover:text-white transition-colors duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-surface/50 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
