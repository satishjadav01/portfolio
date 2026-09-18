import React from "react";

function Footer() {
  return (
    <div className="w-full py-12 text-gray-600 flex justify-center items-center border-t border-white/[0.05]">
      <p className="text-sm tracking-wide">
        &copy; {new Date().getFullYear()} Satish Jadav. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
