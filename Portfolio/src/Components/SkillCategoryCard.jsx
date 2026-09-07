import React from "react";

function SkillCategoryCard({ title, children }) {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-[2rem] border border-border-subtle bg-surface/50 backdrop-blur-md w-full h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-[3px] h-5 bg-[#EF7927] rounded-full"></div>
        <h2 className="text-lg font-bold text-[#EF7927] uppercase tracking-widest">
          {title}
        </h2>
      </div>

      {/* Grid of skill cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 mt-2">
        {children}
      </div>
    </div>
  );
}

export default SkillCategoryCard;
