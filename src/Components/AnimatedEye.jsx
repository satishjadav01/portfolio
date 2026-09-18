import React from "react";

function AnimatedEye({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
    >
      {/* Eye outline */}
      <path
        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
        className="animated-eye-lid"
      />
      {/* Pupil */}
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="currentColor"
        className="animated-eye-pupil"
      />
    </svg>
  );
}

export default AnimatedEye;
